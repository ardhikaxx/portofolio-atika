"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(raf);
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
        { 
            name: "Canva", 
            icon: "/assets/logo/canva.svg",
            color: "from-[#EFB07D] to-[#EFB07D]" 
        },
        { 
            name: "Ibis Paint", 
            icon: "/assets/logo/ibis-paint.svg",
            color: "from-[#EFB07D] to-[#EFB07D]" 
        },
        { 
            name: "Infinite Design", 
            icon: "/assets/logo/infinite-design.svg",
            color: "from-[#EFB07D] to-[#EFB07D]" 
        },
    ];

    return (
        <section id="about" className="bg-white w-full min-h-screen py-20 relative overflow-hidden px-4">

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-200 shadow-sm mb-6">
                        <div className="w-3 h-3 bg-[#EFB07D] rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">CREATIVE DESIGNER</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-[#EFB07D]">Me</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Passionate designer crafting beautiful digital experiences that tell stories and create impact.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="relative group">
                            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-200">
                                <div className="bg-[#EFB07D]/10 rounded-2xl p-6 text-center">
                                    <div className="w-48 h-48 mx-auto mb-2 bg-[#EFB07D]/20 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                                        <Image
                                            src="/photo.svg"
                                            alt="Atika Wardatul Hasanah"
                                            width={192}
                                            height={192}
                                            className="w-full h-full object-cover rounded-full"
                                            priority
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Atika Wardatul Hasanah</h3>
                                    <p className="text-gray-600 font-medium mb-6">Digital Designer</p>
                                </div>
                            </div>

                            <div className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-lg px-3 rounded-2xl shadow-lg border border-gray-200">
                                <Image
                                    src="/assets/2.svg"
                                    alt="star"
                                    width={90}
                                    height={90}
                                    className="animate-spin-slow"
                                />
                            </div>

                            <div className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-lg border border-gray-200">
                                <Image
                                    src="/assets/1.svg"
                                    alt="star"
                                    width={80}
                                    height={80}
                                    className="animate-spin-slow"
                                />
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                                <div className="w-1 h-8 bg-[#EFB07D] rounded-full"></div>
                                Design Specialties
                                <div className="w-1 h-8 bg-[#EFB07D] rounded-full"></div>
                            </h3>

                            <div className="flex flex-wrap gap-3 justify-start items-center">
                                {designTypes.map((type) => (
                                    <span
                                        key={type}
                                        className="inline-flex items-center px-4 py-2 bg-[#EFB07D]/10 text-[#EFB07D] rounded-full border border-[#EFB07D]/30 text-sm font-medium hover:bg-[#EFB07D]/20 hover:border-[#EFB07D]/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`space-y-8 transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#EFB07D] rounded-full"></div>
                                My Creative Journey
                            </h3>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    Hello! Im <span className="font-bold text-[#EFB07D]">Atika Wardatul Hasanah</span>,
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

                            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#EFB07D]">50+</div>
                                    <div className="text-sm text-gray-600 font-medium">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#EFB07D]">600+</div>
                                    <div className="text-sm text-gray-600 font-medium">Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#EFB07D]">3+</div>
                                    <div className="text-sm text-gray-600 font-medium">Years</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#EFB07D] rounded-full"></div>
                                Tools I Use
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="group bg-white/80 rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#EFB07D]/50 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer"
                                    >
                                        <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md p-2`}>
                                            <Image
                                                src={tool.icon}
                                                alt={tool.name}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="font-semibold text-gray-800 text-sm">{tool.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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