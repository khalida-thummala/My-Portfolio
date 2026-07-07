import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Cpu, GraduationCap, Briefcase, Zap, Globe } from 'lucide-react';

const Achievements = () => {
    const data = [
        {
            title: "J.P. Morgan Chase & Co. Certification",
            issuer: "Forage | June 2026",
            description: "Completed Software Engineering Job Simulation covering Kafka, H2 database, Project Setup, and REST API Integration.",
            icon: <Briefcase className="text-primary" />
        },
        {
            title: "IIT Kharagpur NPTEL Elite+Topper",
            issuer: "NPTEL",
            description: "Ranked in the Top 2% nationwide in Natural Language Processing (Score: 81%).",
            icon: <Award className="text-purple-500" />
        },
        {
            title: "AFE-FFE Scholar & Amazon Scholarship",
            issuer: "Amazon",
            description: "Selected based on academic merit and leadership potential.",
            icon: <Trophy className="text-yellow-500" />
        },
        {
            title: "Infosys Springboard Virtual Internship 7.0",
            issuer: "Infosys",
            description: "Selected for Virtual Internship in Artificial Intelligence Domain.",
            icon: <Cpu className="text-green-500" />
        },
        {
            title: "Global Leadership Program on Systems Thinking",
            issuer: "Foundation for Excellence (FFE)",
            description: "Completed Global Leadership Program focusing on systems thinking and complex problem-solving.",
            icon: <Globe className="text-blue-400" />
        },
        {
            title: "Amazon Future Engineer Bootcamp",
            issuer: "Amazon | 2023",
            description: "Specialization in Java & Data Structures.",
            icon: <Star className="text-blue-500" />
        },
        {
            title: "AWS Academy Graduate",
            issuer: "Udacity",
            description: "Introducing Generative AI with AWS.",
            icon: <Zap className="text-primary" />
        },
        {
            title: "AI Prompt Engineering Mastery",
            issuer: "Naipunyam Program",
            description: "Completed training on advanced prompt engineering techniques.",
            icon: <GraduationCap className="text-orange-500" />
        },
        {
            title: "FLY Scholar Program Certification",
            issuer: "Competitiveness Mindset Institute, USA",
            description: "Awarded by the Competitiveness Mindset Institute.",
            icon: <Award className="text-primary" />
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
