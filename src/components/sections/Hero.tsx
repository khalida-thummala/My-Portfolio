import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
            <div className="glow top-1/4 -left-20" />
            <div className="glow bottom-1/4 -right-20" />

            <div className="section-container text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AVAILABLE FOR NEW OPPORTUNITIES
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground"
                >
                    Building <span className="text-primary italic">Scalable Systems</span> & <br />
                    High-Performance Backend Solutions.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Software Development Engineer Intern at <span className="text-foreground font-medium underline decoration-primary underline-offset-4">Amazon</span>.
                    Specializing in Java, Distributed Systems, and Production-Grade Full-Stack Applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects" className="group bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all">
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full font-bold border border-border text-foreground hover:bg-secondary transition-all">
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 text-muted-foreground grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Terminal size={24} />
                        <span>SDE Intern @ Amazon</span>
                    </div>
                    <div className="h-6 w-px bg-border hidden md:block" />
                    <span className="text-sm font-mono tracking-widest uppercase">Distributed Systems</span>
                    <div className="h-6 w-px bg-border hidden md:block" />
                    <span className="text-sm font-mono tracking-widest uppercase">Full-Stack Engineer</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
