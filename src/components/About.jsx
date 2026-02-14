import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import Profile from '../assets/Profile.png';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 relative px-4">
            <motion.div
                className="container mx-auto max-w-5xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <img
                                src={Profile}
                                alt="Profile"
                                className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text mb-6">
                            {t('aboutTitle')}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {t('aboutDesc1')}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {t('aboutDesc2')}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mt-4">
                            {t('aboutDesc3')}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <h3 className="text-blue-400 font-semibold text-xl">{t('greeting').split(' ')[0]}</h3>
                                <p className="text-sm text-gray-500">{t('degree')}</p>
                            </div>
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <h3 className="text-indigo-400 font-semibold text-xl">{t('experience')}</h3>
                                <p className="text-sm text-gray-500">{t('projectDev')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
