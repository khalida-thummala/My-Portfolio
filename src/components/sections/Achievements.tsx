import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Cpu, GraduationCap, Briefcase, Zap, Globe } from 'lucide-react';

const Achievements = () => {
    const data = [
        {
            title: "Amazon SDE Intern",
            issuer: "Amazon (Bengaluru)",
            description: "Completed intensive 3-month internship (Summer 2025) working on ESGS-Triton integration and distributed systems.",
            icon: <Briefcase className="text-primary" />
        },
        {
            title: "AI Prompt Engineering",
            issuer: "Naipunyam Program (Govt Initiative)",
            description: "Certified in advanced prompt engineering techniques and AI-augmented development through the state skill program.",
            icon: <Zap className="text-primary" />
        },
        {
            title: "Global Leadership Program",
            issuer: "FFE & Rishihood University | 2025",
            description: "Completed Global Leadership Program on Systems Thinking, focusing on complex problem-solving and ethical leadership.",
            icon: <Globe className="text-blue-400" />
        },
        {
            title: "Amazon Scholarship Recipient",
            issuer: "Amazon (2023)",
            description: "Awarded based on exceptional performance in the State Engineering Entrance Examination.",
            icon: <Trophy className="text-yellow-500" />
        },
        {
            title: "AFE Bootcamp Certificate",
            issuer: "Amazon Future Engineer",
            description: "Completed intensive 10-month Java & DSA Program (2025) covering professional engineering best practices.",
            icon: <Star className="text-blue-500" />
        },
        {
            title: "Generative AI with AWS",
            issuer: "Udacity (Accenture) | 2025",
            description: "Validated expertise in foundational concepts of GenAI, AWS AI services, and real-world implementation.",
            icon: <Cpu className="text-green-500" />
        },
        {
            title: "FLY Scholar Program",
            issuer: "Competitiveness Mindset Institute, USA",
            description: "Certified in Leadership & Problem-Solving Program (2024), focusing on competitiveness mindset.",
            icon: <GraduationCap className="text-orange-500" />
        },
        {
            title: "Masai School Mentee",
            issuer: "Masai School (Empower Her)",
            description: "Selected as an Empower Her Scholar for specialized software development training and mentorship.",
            icon: <Award className="text-purple-500" />
        }
    ];

    return (
        <section className="section-container">
            <div className="flex flex-col gap-4 mb-16 text-center">
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic border-b border-primary/20 pb-2 w-max mx-auto">Recognition</h2>
                <h3 className="text-4xl font-bold tracking-tight text-foreground">Achievements & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl border border-border bg-secondary/30 flex items-start gap-4 hover:bg-secondary/50 transition-all"
                    >
                        <div className="shrink-0 p-3 rounded-xl bg-background border border-border">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">{item.title}</h4>
                            <p className="text-xs text-primary font-bold uppercase tracking-tight mb-2">{item.issuer}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
