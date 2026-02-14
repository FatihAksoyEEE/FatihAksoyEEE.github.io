import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Cpu, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center overflow-x-hidden pt-20 md:pt-0">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
            </div>

            {/* Content */}
            <div className="container relative z-30 mx-auto px-4 py-12 md:py-20 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <span className="text-blue-400 font-mono tracking-widest text-sm uppercase mb-4 block">
                            {t('greeting')}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 font-display">
                            {t('heroTitle')}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">{t('heroSubtitle')}</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed font-sans border-l-2 border-blue-500 pl-6">
                            {t('heroDesc')}
                        </p>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 clip-path-polygon font-bold uppercase tracking-wider flex items-center gap-3 w-full md:w-auto justify-center inline-flex"
                            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                        >
                            {t('viewProjects')} <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    {/* Right Side - Stat Cards */}
                    <div className="flex flex-col gap-6 mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="glass-card p-6 border border-white/10 bg-slate-900/50 backdrop-blur-md hover:bg-slate-800/60 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-blue-400 p-3 bg-blue-900/20 rounded-lg">
                                    <Cpu size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display">{t('embedded')}</h3>
                                    <p className="text-blue-200 text-sm font-mono tracking-wide">STM32, ESP32, AVR</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed border-t border-gray-700/50 pt-2">
                                {t('embeddedDesc')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="glass-card p-6 border border-white/10 bg-slate-900/50 backdrop-blur-md hover:bg-slate-800/60 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-blue-400 p-3 bg-blue-900/20 rounded-lg">
                                    <Server size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display">{t('iot')}</h3>
                                    <p className="text-blue-200 text-sm font-mono tracking-wide">MQTT, LoRaWAN</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed border-t border-gray-700/50 pt-2">
                                {t('iotDesc')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="glass-card p-6 border border-white/10 bg-slate-900/50 backdrop-blur-md hover:bg-slate-800/60 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-blue-400 p-3 bg-blue-900/20 rounded-lg">
                                    <Globe size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display">{t('pcb')}</h3>
                                    <p className="text-blue-200 text-sm font-mono tracking-wide">Altium, KiCad</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed border-t border-gray-700/50 pt-2">
                                {t('pcbDesc')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
