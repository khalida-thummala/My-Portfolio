import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Amazon",
            role: "Software Development Engineer Intern",
            period: "May 2025 – July 2025",
            location: "Bengaluru, India",
            impact: [
                "Built direct integration between ESGS and Triton, removing dependency on Paragon and simplifying testing workflows.",
                "Reverse-engineered request routing and implemented secure authentication and validation logic in Java.",
                "Improved end-to-end testing reliability and worked in Agile sprints to deliver high-performance backend solutions."
            ]
        }
    ];

    return (
        <section id="experience" className="section-container">
            <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic">Experience</h2>
                <h3 className="text-4xl font-bold tracking-tight text-foreground">Career Highlights</h3>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 border border-border p-8 rounded-2xl"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs mt-1">
                                    <span className="text-primary font-bold uppercase">{exp.company}</span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.impact.map((point, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
