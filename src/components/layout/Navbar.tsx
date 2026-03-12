import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Navbar = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
        >
            <div className="bg-background/80 backdrop-blur-xl border border-border px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto shadow-2xl shadow-indigo-500/10">
                <div className="flex items-center gap-6 border-r border-border pr-6">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/khalida-thummala/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/khalida-thummala/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:khalidathummala38@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={18} />
                    </a>
                    <a
                        href={`${baseUrl}Thummala__Khalida.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2"
                    >
                        <FileText size={14} />
                        Resume
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
