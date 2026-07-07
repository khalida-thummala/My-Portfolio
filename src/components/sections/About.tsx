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
                        Computer Science undergraduate with hands-on software development experience through an SDE internship at Amazon and full-stack development roles.
                    </p>
                    <p>
                        Proven expertise in building <span className="text-foreground font-medium underline decoration-primary underline-offset-4">full-stack platforms and AI-driven architectures</span>, including RAG pipelines and clinical documentation tools.
                    </p>
                    <p>
                        Highly skilled in designing scalable software solutions, optimizing system workflows, and applying generative AI and microservices practices to solve real-world engineering problems.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
