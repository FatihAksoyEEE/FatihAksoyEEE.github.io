import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        { name: 'C/C++', level: t('levelAdv'), percentage: '85%', category: t('programming') },
        { name: 'Python', level: t('levelAdv'), percentage: '85%', category: t('programming') },
        { name: 'MATLAB', level: t('levelInt'), percentage: '60%', category: t('programming') },
        { name: 'Embedded Systems (STM32, ESP32, Arduino)', level: t('levelAdv'), percentage: '90%', category: t('embeddedSystems') },
        { name: 'PCB Design (Altium)', level: t('levelInt'), percentage: '65%', category: t('circuitDesign') },
        { name: 'Circuit Analysis & Proteus', level: t('levelAdv'), percentage: '80%', category: t('circuitDesign') },
        { name: 'Git & GitHub', level: t('levelInt'), percentage: '60%', category: t('tools') },
        { name: 'Linux', level: t('levelBas'), percentage: '40%', category: t('tools') },
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    {t('skillsTitle')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                                    {skill.name}
                                </h3>
                                <span className="text-xs font-mono px-2 py-1 bg-gray-700 rounded text-gray-400 border border-gray-600">
                                    {skill.category}
                                </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full"
                                    style={{ width: skill.percentage }}
                                ></div>
                            </div>
                            <p className="text-right text-xs text-gray-500 mt-2">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
