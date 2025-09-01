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
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const menuIconStyle: React.CSSProperties = {
        position: 'relative',
        width: '28px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const barCommonStyle: React.CSSProperties = {
        background: isDarkMode ? 'white' : 'black',
        display: 'block',
        height: '2px',
        width: '18px',
        borderRadius: '2px',
        position: 'absolute',
        transition: 'all 0.2s ease-out',
    };

    const topBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        top: toggle ? '50%' : '5px',
        transform: toggle ? 'rotate(-45deg)' : 'none',
    };

    const middleBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        opacity: toggle ? 0 : 1,
        top: '50%',
        transition: 'opacity 0.2s ease-out',
    };

    const bottomBarStyle: React.CSSProperties = {
        ...barCommonStyle,
        top: toggle ? '50%' : '15px',
        transform: toggle ? 'rotate(45deg)' : 'none',
    };

    return (
        <nav
            className="px-4 w-full flex items-center py-4 fixed top-0 z-50"
            style={{
                backgroundColor: isDarkMode ? '#050816' : 'white'
            }}
        >
            <div className='w-full flex justify-between items-center'>
                <a
                    href="#"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
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
                </a>

                <ul className='list-none hidden sm:flex flex-row gap-10 absolute left-1/2 transform -translate-x-1/2'>
                {navLinks.map((nav, index) => (
                    <motion.li
                        key={nav.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    >
                    <a
                        href={`#${nav.id}`}
                        className={`${
                        active === nav.title 
                            ? (isDarkMode ? "text-white" : "text-black")
                            : (isDarkMode ? "text-gray-400" : "text-gray-600")
                        } ${isDarkMode ? "hover:text-white" : "hover:text-black"} text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                        onClick={() => setActive(nav.title)}
                    >
                        {nav.title}
                    </a>
                    </motion.li>
                ))}
                </ul>

                <div className='hidden sm:flex'>
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
                </div>

                <div className='sm:hidden flex items-center gap-4'>
                    <div style={menuIconStyle} onClick={() => setToggle(!toggle)}>
                        <span style={topBarStyle}></span>
                        <span style={middleBarStyle}></span>
                        <span style={bottomBarStyle}></span>
                    </div>
                    
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

                    <motion.div
                        className={`${
                        !toggle ? "hidden" : "flex"
                        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-lg`}
                        style={{
                            backgroundColor: isDarkMode ? '#1f2937' : 'white',
                            border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
                        {navLinks.map((nav, index) => (
                            <motion.li
                                key={nav.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 ${
                                    active === nav.title 
                                        ? (isDarkMode ? "text-white" : "text-black")
                                        : (isDarkMode ? "text-gray-300" : "text-gray-600")
                                } ${isDarkMode ? "hover:text-white" : "hover:text-black"}`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                }}
                            >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            </motion.li>
                        ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};