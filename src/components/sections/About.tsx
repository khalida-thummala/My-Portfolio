import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl"
            >
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic mb-4">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground">Software Engineer & Problem Solver.</h3>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>
                        Ambitious and results-oriented Software Engineering undergraduate with strong expertise in Java, Data Structures & Algorithms, and scalable backend development.
                    </p>
                    <p>
                        Experienced in <span className="text-foreground font-medium underline decoration-primary underline-offset-4">REST API design and distributed systems</span> through my Amazon SDE internship. I demonstrate strong problem-solving, Agile collaboration, and system design skills to deliver reliable, high-performance software solutions.
                    </p>
                    <p>
                        Focused on building applications that are secure, efficient, and user-centric. Beyond my B.Tech, I am a <span className="text-foreground font-medium">Masai School Empower her Scholar</span>, continuously expanding my expertise in full-stack development.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
