import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Lock } from 'lucide-react';

const TechnicalDepth = () => {
    const deepDives = [
        {
            title: "API Design Philosophy",
            icon: <Globe className="text-primary" />,
            content: "I treat APIs as contracts. My design process prioritizes idempotency for critical mutations, consistent error schemas following RFC 7807, and versioning strategies that ensure backward compatibility without ballooning technical debt."
        },
        {
            title: "Authentication Architecture",
            icon: <Lock className="text-primary" />,
            content: "In production apps like MemoryLane, I implement stateless JWT-based authentication with refresh token rotation. I secure routes using middleware-level RBAC (Role-Based Access Control) and ensure all PII is handled with appropriate encryption at rest."
        },
        {
            title: "Thinking about Scalability",
            icon: <Cpu className="text-primary" />,
            content: "When building systems, I look for bottlenecks in the data layer first. I leverage indexing, connection pooling, and caching (Redis/InMemory) to reduce latency. I prefer horizontal scaling and stateless services to handle elastic loads."
        },
        {
            title: "System Design Patterns",
            icon: <Code2 className="text-primary" />,
            content: "I design with the CAP theorem in mind, choosing consistency or availability based on the business use case. I utilize design patterns like Factory and Singleton in Java to maintain clean, scalable, and testable codebase."
        }
    ];

    return (
        <section className="section-container bg-primary/5 rounded-3xl my-24 border border-primary/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -mr-48 -mt-48 rounded-full" />

            <div className="relative z-10">
                <div className="mb-16">
                    <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic mb-4">Engineering Depth</h2>
                    <h3 className="text-4xl font-bold">How I Solve Problems</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {deepDives.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-6"
                        >
                            <div className="mt-1 p-3 rounded-xl bg-background border border-white/10 h-max">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-muted-foreground leading-relaxed text-sm italic">
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalDepth;
