import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container">
            <div className="glass-card p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-24" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-sm font-mono text-primary tracking-widest uppercase italic mb-4">Get In Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground">Let's build the <br />next big thing.</h3>
                        <p className="text-muted-foreground leading-relaxed mb-12 max-w-md italic">
                            Currently open to new opportunities in Backend Engineering, Full-Stack Development, and Distributed Systems. Let's discuss how I can add value to your engineering team.
                        </p>

                        <div className="space-y-6">
                            <a href="tel:+917569769986" className="flex items-center gap-4 text-lg text-foreground hover:text-primary transition-colors italic">
                                <div className="p-3 rounded-full bg-secondary border border-border">
                                    <span className="text-sm font-bold text-foreground">+91</span>
                                </div>
                                +91 75697 69986
                            </a>
                            <a href="mailto:khalidathummala38@gmail.com" className="flex items-center gap-4 text-lg text-foreground hover:text-primary transition-colors italic">
                                <div className="p-3 rounded-full bg-secondary border border-border">
                                    <Mail size={20} className="text-foreground" />
                                </div>
                                khalidathummala38@gmail.com
                            </a>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/khalida-thummala/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary border border-border text-foreground hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-1">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/khalida-thummala/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary border border-border text-foreground hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-1">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                <input type="text" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors italic text-foreground" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                <input type="email" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors italic text-foreground" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                            <input type="text" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors italic text-foreground" placeholder="Opportunity for Collaboration" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                            <textarea rows={4} className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none italic text-foreground" placeholder="Your message here..." />
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-indigo-500/20">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <footer className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-muted-foreground text-sm italic">
                    © 2026 Khalida Thummala. Engineered for performance.
                </p>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                    Made with <span className="text-red-500">❤️</span> using React, Tailwind & Framer Motion
                </p>
            </footer>
        </section>
    );
};

export default Contact;
