import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ShieldCheck, Zap, Lock } from 'lucide-react';

const Projects = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const projects = [
        {
            title: "ArogyaScribe – AI Clinical Documentation",
            image: `${baseUrl}arogyascribe.png`,
            description: "Built an AI-powered clinical documentation platform that automates SOAP note generation from doctor-patient conversations. Developed a RAG pipeline using LangChain and PostgreSQL for semantic search across medical records. Integrated Speech-to-Text APIs and GPT-4 models to transcribe consultations and generate structured medical summaries.",
            tech: ["React.js", "FastAPI", "PostgreSQL", "LangChain", "GPT-4"],
            github: "https://github.com/khalida-thummala/ArogyaScribe",
            live: "https://mediscribe-kohl.vercel.app/",
            icon: <Zap className="text-primary" size={20} />
        },
        {
            title: "MemoryLane – Digital Memory Platform",
            image: `${baseUrl}memorylane.png`,
            description: "Developed a full-stack social memory platform enabling users to capture, organize, and share personal moments securely. Integrated Cloudinary media uploads and AI-powered tagging using Google Gemini. Built collaborative albums, friend/follower workflows, and privacy-controlled sharing features.",
            tech: ["React.js", "Node.js", "Supabase", "Cloudinary", "Gemini API"],
            github: "https://github.com/khalida-thummala/MemoryLane_Personal",
            live: "https://memory-lane-personal-phi.vercel.app/",
            icon: <ShieldCheck className="text-primary" size={20} />
        }
    ];

    return (
        <section id="projects" className="section-container">
            <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic">Featured Projects</h2>
                <h3 className="text-4xl font-bold tracking-tight text-foreground">Technical Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-secondary/30 border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-all"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                        </div>

                        <div className="p-6 md:p-8 flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                                <div className="flex items-center gap-3">
                                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
