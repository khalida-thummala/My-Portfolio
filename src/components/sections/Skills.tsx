import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { category: "Programming Languages", items: ["C", "Java", "Basic Python"] },
        { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"] },
        { category: "Databases & Frameworks", items: ["MySQL", "PostgreSQL", "FastAPI"] },
        { category: "Cloud & Tools", items: ["Git", "GitHub", "VS Code", "AWS", "Distributed Systems", "Microservices"] },
        { category: "Soft Skills", items: ["Creative Thinking", "Leadership", "Communication", "Team Collaboration"] }
    ];

    return (
        <section id="skills" className="section-container">
            <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic">Skills</h2>
                <h3 className="text-4xl font-bold tracking-tight text-foreground">Technical Toolkit</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map(item => (
                                <span key={item} className="text-sm text-foreground hover:text-primary transition-colors cursor-default">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
