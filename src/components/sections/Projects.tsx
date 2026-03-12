import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ShieldCheck, Zap, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "MemoryLane",
            image: "/memorylane.png",
            description: "A full-stack web application for secure media documentation and personal storytelling. Built with a focus on secure authentication and efficient media management.",
            tech: ["React (Vite)", "Node.js", "Express.js", "Supabase", "Cloudinary"],
            github: "https://github.com/khalida-thummala/MemoryLane_Personal",
            live: "https://memorylane-frontend.netlify.app/",
            icon: <ShieldCheck className="text-primary" size={20} />
        },
        {
            title: "Paste-Box",
            image: "/pastebox.png",
            description: "A secure file-sharing application featuring JWT-based authentication and cloud storage. Engineered for efficient data handling and seamless user experience.",
            tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
            github: "https://github.com/khalida-thummala/",
            live: "https://paste-box.vercel.app/",
            icon: <Lock className="text-primary" size={20} />
        },
        {
            title: "Time-Track AI",
            image: "/timetrack.png",
            description: "A productivity-focused time-tracking and analytics dashboard. Streamlining activity management with real-time data visualization.",
            tech: ["React (Vite)", "Tailwind CSS", "Firebase", "Recharts"],
            github: "https://github.com/khalida-thummala/timetrack-ai",
            live: "https://khalida-thummala.github.io/timetrack-ai/",
            icon: <Zap className="text-primary" size={20} />
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
