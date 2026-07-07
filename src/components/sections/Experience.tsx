import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "DigiVerve Solutions Pvt. Ltd.",
            role: "Full Stack Development Intern",
            period: "April 2026 – June 2026",
            location: "India",
            impact: [
                "Architecting and maintaining full-stack features using modern web frameworks to enhance platform performance.",
                "Developing robust backend APIs and managing relational and non-relational database models for high availability."
            ]
        },
        {
            company: "Amazon Development Centre India",
            role: "Software Development Engineer (SDE) Intern",
            period: "May 2025 – July 2025",
            location: "India",
            impact: [
                "Engineered backend integration for ESGS services, optimizing communication with Triton and reducing latency by 15%.",
                "Reconstructed authentication and validation pipelines, improving automated testing reliability.",
                "Optimized microservice API layers and streamlined debugging across distributed systems in high-scale environments."
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
