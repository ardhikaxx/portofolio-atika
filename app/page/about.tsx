"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
    }, []);

    const designTypes = [
        "Poster Design",
        "Instagram Feed",
        "Banner Design",
        "Product Design",
        "Social Media",
        "Brand Identity",
        "Digital Illustration",
        "Marketing Materials"
    ];

    const tools = [
        { name: "Canva", icon: "🎨", color: "from-orange-400 to-pink-400" },
        { name: "Ibis Paint", icon: "🖌️", color: "from-blue-400 to-purple-400" },
        { name: "Figma", icon: "🔹", color: "from-purple-400 to-pink-400" },
    ];

    return (
        <section id="about" className="bg-linear-to-br from-[#fef7f0] via-[#fcf4ed] to-[#f8f1e9] w-full min-h-screen py-20 relative overflow-hidden px-4">

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 shadow-sm mb-6">
                        <div className="w-3 h-3 bg-linear-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">CREATIVE DESIGNER</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="bg-linear-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Passionate designer crafting beautiful digital experiences that tell stories and create impact.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="relative group">
                            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
                                <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-12 text-center">
                                    <div className="w-48 h-48 mx-auto mb-6 bg-linear-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center shadow-inner">
                                        <div className="text-4xl">👩‍💻</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Atika Wardatul Hasanah</h3>
                                    <p className="text-gray-600 font-medium">Digital Designer</p>
                                </div>
                            </div>

                            <div className="absolute -top-3 -right-3 bg-white/10 backdrop-blur-lg px-3 rounded-2xl shadow-lg border border-white/30">
                                <Image
                                    src="/assets/2.svg"
                                    alt="star"
                                    width={90}
                                    height={90}
                                    className="animate-spin-slow"
                                />
                            </div>

                            <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-lg p-3 rounded-2xl shadow-lg border border-white/30">
                                <Image
                                    src="/assets/1.svg"
                                    alt="star"
                                    width={90}
                                    height={90}
                                    className="animate-spin-slow"
                                />
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                                <div className="w-1 h-8 bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></div>
                                Design Specialties
                                <div className="w-1 h-8 bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            </h3>

                            <div className="flex flex-wrap gap-3 justify-start items-center">
                                {designTypes.map((type) => (
                                    <span
                                        key={type}
                                        className="inline-flex items-center px-4 py-2 bg-linear-to-br from-purple-500/10 to-pink-500/10 text-purple-700 rounded-full border border-purple-200/50 text-sm font-medium hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-300/70 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`space-y-8 transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                                My Creative Journey
                            </h3>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    Hello! Im <span className="font-bold text-purple-600">Atika Wardatul Hasanah</span>,
                                    a digital designer passionate about creating visually stunning and meaningful designs.
                                </p>

                                <p>
                                    With expertise in various design tools and platforms, I specialize in creating
                                    engaging social media content, eye-catching posters, and professional branding
                                    materials that help brands stand out in the digital space.
                                </p>

                                <p>
                                    I believe in the power of design to communicate, inspire, and transform ideas
                                    into memorable visual experiences that resonate with audiences.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200/50">
                                <div className="text-center">
                                    <div className="text-2xl font-bold bg-linear-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
                                    <div className="text-sm text-gray-600 font-medium">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold bg-linear-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">40+</div>
                                    <div className="text-sm text-gray-600 font-medium">Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold bg-linear-to-br from-orange-600 to-red-600 bg-clip-text text-transparent">3+</div>
                                    <div className="text-sm text-gray-600 font-medium">Years</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-linear-to-b from-green-500 to-emerald-500 rounded-full"></div>
                                Tools I Use
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="group bg-white/80 rounded-2xl p-4 shadow-lg border border-gray-100/50 hover:shadow-xl hover:border-purple-200/70 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer"
                                    >
                                        <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-linear-to-br ${tool.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                            {tool.icon}
                                        </div>
                                        <div className="font-semibold text-gray-800 text-sm">{tool.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes float {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-20px) scale(1.05); }
                }
                .animate-float {
                animation: float 6s ease-in-out infinite;
                }
                .animation-delay-2000 {
                animation-delay: 2s;
                }
                .animation-delay-4000 {
                animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}