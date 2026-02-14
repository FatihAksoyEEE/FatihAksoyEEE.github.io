import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{t('contactTitle')}</h2>
                    <p className="text-gray-400">{t('contactDesc')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{t('emailLabel')}</h3>
                                <a href="mailto:iletisim@fatih.com" className="text-gray-400 hover:text-blue-400 transition-colors">iletisim@fatih.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-900/30 rounded-lg text-indigo-400">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{t('linkedinLabel')}</h3>
                                <a href="https://linkedin.com/in/fatih" className="text-gray-400 hover:text-indigo-400 transition-colors">linkedin.com/in/fatih</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-800 rounded-lg text-gray-400">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{t('githubLabel')}</h3>
                                <a href="https://github.com/fatih" className="text-gray-400 hover:text-white transition-colors">github.com/fatih</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{t('locationTitle')}</h3>
                                <p className="text-gray-400">{t('locationDesc')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Form UI (Non-functional placeholders) */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 bg-gray-800/30 p-8 rounded-2xl border border-gray-700"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">{t('formName')}</label>
                            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('formNamePlaceholder')} />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">{t('emailLabel')}</label>
                            <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('formEmailPlaceholder')} />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">{t('formMessage')}</label>
                            <textarea rows="4" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="..."></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-transform active:scale-95 shadow-lg shadow-blue-500/25">
                            {t('formSend')}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
