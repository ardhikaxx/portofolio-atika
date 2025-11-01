"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section className="bg-white w-full min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-10">
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div
                    className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 bg-[#EFB07D] rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">
                            Available for freelance work
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Hai, I&apos;m{" "}
                            <span className="bg-linear-to-r from-[#EFB07D] to-[#EFB07D] bg-clip-text text-transparent">
                                Atika
                            </span>{" "}
                            Wardatul Hasanah
                        </h1>

                        <div className="flex items-center justify-start gap-3">
                            <div className="w-12 h-0.5 bg-[#EFB07D]"></div>
                            <p className="text-lg md:text-xl text-gray-600 font-light">
                                a{" "}
                                <span className="font-semibold text-[#EFB07D]">designer</span>{" "}
                                & creative thinker
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Crafting beautiful digital experiences with attention to detail and
                        passion for innovation. Let&apos;s create something amazing together.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 pt-4">
                        <button className="group relative bg-[#EFB07D] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-[#EFB07D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#EFB07D] hover:text-[#EFB07D] transform hover:-translate-y-1 transition-all duration-300 text-center">
                            <span className="flex items-center gap-2">
                                Download CV
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#EFB07D] rounded-2xl rotate-12 z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#EFB07D] rounded-2xl -rotate-12 z-0"></div>

                        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 shadow-2xl z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl w-full h-96 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/photo.svg"
                                        alt="Atika Wardatul Hasanah"
                                        fill
                                        className="object-cover rounded-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-lg p-3 rounded-2xl shadow-lg z-20 rotate-12">
                            <Image
                                src="/assets/1.svg"
                                alt="star"
                                width={90}
                                height={90}
                                className="animate-spin-slow"
                            />
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg z-20 -rotate-12">
                            <Image
                                src="/assets/3.svg"
                                alt="tape"
                                width={120}
                                height={120}
                                className="animate-spin-slow"
                            />
                        </div>

                        <div className="absolute bottom-8 -right-8 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg z-20 -rotate-6">
                            <Image
                                src="/assets/4.svg"
                                alt="chibi"
                                width={100}
                                height={100}
                                className="animate-spin-slow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                0% {
                    transform: translate(0px, 0px) scale(1);
                }
                33% {
                    transform: translate(30px, -50px) scale(1.1);
                }
                66% {
                    transform: translate(-20px, 20px) scale(0.9);
                }
                100% {
                    transform: translate(0px, 0px) scale(1);
                }
                }
                .animate-blob {
                animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                animation-delay: 2s;
                }
                .animation-delay-4000 {
                animation-delay: 4s;
                }
                @keyframes spin-slow {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
                }
                .animate-spin-slow {
                animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
}