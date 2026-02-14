import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, toggleLanguage, language } = useLanguage();

    const links = [
        { name: t('about'), href: '#about' },
        { name: t('skills'), href: '#skills' },
        { name: t('projects'), href: '#projects' },
        { name: t('contact'), href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 top-0 start-0 border-b border-gray-800 bg-gray-900/90 backdrop-blur-md"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-display tracking-wide group-hover:text-blue-400 transition-colors">
                        FATİH AKSOY
                    </span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
                    {/* Language Switcher */}
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-lg text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle language"
                    >
                        <Globe size={18} className={language === 'tr' ? 'text-blue-500' : 'text-gray-500'} />
                        <span className={`transition-colors ${language === 'tr' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>TR</span>
                        <span className="text-gray-700">|</span>
                        <span className={`transition-colors ${language === 'en' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>EN</span>
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 w-10 h-10 text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-3 text-gray-300 rounded hover:text-white md:hover:text-blue-500 md:p-0 transition-colors uppercase text-sm tracking-wider"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
