import { useState, useEffect } from 'react';

interface TypingAnimationProps {
    words: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    delayBetweenWords?: number;
    className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
    words,
    typeSpeed = 150,
    deleteSpeed = 100,
    delayBetweenWords = 2000,
    className = ''
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setCurrentText(currentWord.substring(0, currentText.length - 1));

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }, deleteSpeed);
        } else {
            if (currentText === currentWord) {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenWords);
            } else {
                timeout = setTimeout(() => {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                }, typeSpeed);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 600);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            <span className="text-blue-500 dark:text-blue-400">{currentText}</span>
            <span
                className={`inline-block w-0.5 h-[1em] ml-1 bg-blue-500 dark:bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            >
            </span>
        </span>
    );
};
