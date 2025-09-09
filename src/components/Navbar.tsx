import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { navLinks } from "../data";
import { logo } from "../assets";
import { ThemeToggle } from "./ui/ThemeToggle";

export const Navbar = () => {
    const [active, setActive] = useState("About");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = navLinks.map(link => ({
                id: link.id,
                title: link.title,
                element: document.getElementById(link.id)
            })).filter(section => section.element);

            let currentSection = "";
            
            if (scrollTop < 200) {
                currentSection = "About";
            } else {
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    const rect = section.element!.getBoundingClientRect();
                    const sectionTop = rect.top + scrollTop;
                    const sectionHeight = rect.height;
                    
                    if (scrollTop >= sectionTop - 150 && scrollTop < sectionTop + sectionHeight - 150) {
                        currentSection = section.title;
                        break;
                    }
                }
                
                if (!currentSection && scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 100) {
                    currentSection = "Contact";
                }
            }

            if (currentSection && currentSection !== active) {
                setActive(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [active]);

    useEffect(() => {
        if (toggle) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [toggle]);

    useEffect(() => {
        const checkDarkMode = () => {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(isDark);
            if (isDark) {
                document.documentElement.classList.add('dark');
                document.body.style.backgroundColor = '#050816';
                document.body.style.color = 'white';
            } else {
                document.documentElement.classList.remove('dark');
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            }
        };

        checkDarkMode();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
            if (e.matches) {
                document.documentElement.classList.add('dark');
                document.body.style.backgroundColor = '#050816';
                document.body.style.color = 'white';
            } else {
                document.documentElement.classList.remove('dark');
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#050816';
            document.body.style.color = 'white';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    };

    const handleNavClick = (id: string, title: string) => {
        setActive(title);
        
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const menuIconStyle: React.CSSProperties = {
        position: 'relative',
        width: '24px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const barCommonStyle: React.CSSProperties = {
        background: isDarkMode ? 'white' : '#374151',
        display: 'block',
        height: '2px',
        width: '20px',
        borderRadius: '2px',
        position: 'absolute',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    const topBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        top: toggle ? '50%' : '6px',
        transform: toggle ? 'translateY(-50%) rotate(-45deg)' : 'none',
    };

    const middleBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        opacity: toggle ? 0 : 1,
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'opacity 0.2s ease-out',
    };

    const bottomBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        top: toggle ? '50%' : '14px',
        transform: toggle ? 'translateY(-50%) rotate(45deg)' : 'none',
    };

    return (
        <nav
            className="px-4 w-full flex items-center py-4 fixed top-0 z-50 backdrop-blur-lg border-b"
            style={{
                backgroundColor: isDarkMode ? 'rgba(5, 8, 22, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.3)'
            }}
        >
            <div className='w-full flex justify-between items-center'>
                <button
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                >
                <motion.img 
                    src={logo} 
                    alt='logo' 
                    className='w-11 h-11 object-contain transition-all duration-300'
                    style={{
                        filter: isDarkMode ? 'brightness(0) invert(1)' : 'none'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 }}
                />
                </button>

                <ul className='list-none hidden sm:flex flex-row gap-10 absolute left-1/2 transform -translate-x-1/2'>
                {navLinks.map((nav, index) => (
                    <motion.li
                        key={nav.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    >
                    <button
                        className={`${
                        active === nav.title 
                            ? (isDarkMode ? "text-white" : "text-black")
                            : (isDarkMode ? "text-gray-400" : "text-gray-600")
                        } ${isDarkMode ? "hover:text-white" : "hover:text-black"} text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                        onClick={() => handleNavClick(nav.id, nav.title)}
                    >
                        {nav.title}
                    </button>
                    </motion.li>
                ))}
                </ul>

                <div className='hidden sm:flex'>
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
                </div>

                <div className='sm:hidden flex items-center gap-3'>
                    <button 
                        className={`relative p-2 transition-all duration-300 ${
                            isDarkMode 
                                ? 'hover:bg-gray-700/30' 
                                : 'hover:bg-gray-200/30'
                        } rounded-lg hover:scale-105 active:scale-95`}
                        style={menuIconStyle} 
                        onClick={() => setToggle(!toggle)}
                        aria-label={toggle ? "Close menu" : "Open menu"}
                    >
                        <span style={topBarStyle}></span>
                        <span style={middleBarStyle}></span>
                        <span style={bottomBarStyle}></span>
                    </button>
                    
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

                    {toggle && (
                        <motion.div
                            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setToggle(false)}
                        />
                    )}

                    <motion.div
                        className={`${
                        !toggle ? "hidden" : "flex"
                        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-50 rounded-2xl shadow-2xl backdrop-blur-lg border`}
                        style={{
                            backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            border: isDarkMode ? '1px solid rgba(55, 65, 81, 0.8)' : '1px solid rgba(229, 231, 235, 0.8)',
                            backdropFilter: 'blur(12px)'
                        }}
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ 
                            opacity: toggle ? 1 : 0, 
                            scale: toggle ? 1 : 0.9,
                            y: toggle ? 0 : -10
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div 
                            className="absolute -top-2 right-6 w-4 h-4 rotate-45"
                            style={{
                                backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                                border: isDarkMode ? '1px solid rgba(55, 65, 81, 0.8)' : '1px solid rgba(229, 231, 235, 0.8)',
                                borderBottom: 'none',
                                borderRight: 'none'
                            }}
                        />
                        
                        <ul className='list-none flex justify-start items-start flex-1 flex-col gap-2 w-full'>
                        {navLinks.map((nav, index) => (
                            <motion.li
                                key={nav.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="w-full"
                            >
                                <button
                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-[16px] transition-all duration-300 ${
                                        active === nav.title 
                                            ? (isDarkMode 
                                                ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" 
                                                : "bg-blue-50 text-blue-600 border border-blue-200")
                                            : (isDarkMode 
                                                ? "text-gray-300 hover:bg-gray-700/50 hover:text-white" 
                                                : "text-gray-600 hover:bg-gray-100 hover:text-black")
                                    } hover:scale-[1.02] hover:shadow-md`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        handleNavClick(nav.id, nav.title);
                                    }}
                                >
                                    {nav.title}
                                </button>
                            </motion.li>
                        ))}
                        
                        <motion.li
                            className="w-full pt-2 mt-2 border-t border-gray-200 dark:border-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: navLinks.length * 0.05 + 0.1 }}
                        >
                            <button
                                className={`w-full text-center px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                                    isDarkMode 
                                        ? "text-gray-400 hover:bg-gray-700/50 hover:text-gray-300" 
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                } hover:scale-[1.02]`}
                                onClick={() => setToggle(false)}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Close Menu
                                </span>
                            </button>
                        </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};