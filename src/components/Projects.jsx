import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t('p1Title'),
            description: t('p1Desc'),
            tech: ['React', 'Serial Communication', 'Vite', 'Maps API'],
            type: t('typeSoftware'),
            typeKey: 'software',
            link: '#',
            github: '#'
        },
        {
            title: t('p2Title'),
            description: t('p2Desc'),
            tech: ['C++', 'ESP32', 'LoRaWAN', 'Embedded C', 'PCB Design'],
            type: t('typeHardware'),
            typeKey: 'hardware',
            link: '#',
            github: '#'
        },
        {
            title: t('p3Title'),
            description: t('p3Desc'),
            tech: ['IoT', 'MQTT', 'Node.js', 'Arduino'],
            type: t('typeIoT'),
            typeKey: 'iot',
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900/40 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text"
                >
                    {t('projectsTitle')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                        >
                            {/* Optional: Add Image here */}
                            <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <span className="text-gray-500 text-4xl font-bold opacity-20">
                                    {project.typeKey === 'software' ? '</>' : project.typeKey === 'iot' ? '((o))' : 'PCB'}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-900/30 text-blue-400 border border-blue-900/50">
                                        {project.type}
                                    </span>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
