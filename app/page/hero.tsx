"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
    }, []);

    return (
        <section className="bg-linear-to-br from-[#f8f1e9] via-[#f5ebe4] to-[#e8dfd1] w-full min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-10">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">Available for freelance work</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Hai, I am{" "}
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Atika
                            </span>{" "}
                            Wardatul Hasanah
                        </h1>

                        {/* Sub Headline */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-px bg-linear-to-r from-purple-500 to-transparent"></div>
                            <p className="text-xl md:text-2xl text-gray-600 font-light">
                                a <span className="font-semibold text-purple-600">designer</span> & creative thinker
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Crafting beautiful digital experiences with attention to detail and passion for innovation.
                        Lets create something amazing together.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 pt-4">
                        <button className="group relative bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:text-purple-700 transform hover:-translate-y-1 transition-all duration-300 text-center">
                            <span className="flex items-center gap-2">
                                Download CV
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-linear-to-br from-purple-400 to-pink-400 rounded-2xl rotate-12 z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-yellow-400 to-orange-400 rounded-2xl -rotate-12 z-0"></div>

                        <div className="relative bg-white rounded-3xl p-4 shadow-2xl z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl w-full h-96 flex items-center justify-center overflow-hidden">
                                <div className="text-center text-gray-400">
                                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p>Foto Ayang disini</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg z-20 rotate-12">
                            <Image
                                src="/assets/1.svg"
                                alt="star"
                                width={90}
                                height={90}
                                className="animate-spin-slow"
                            />
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20 -rotate-12">
                            <Image
                                src="/assets/3.svg"
                                alt="tape"
                                width={120}
                                height={120}
                                className="animate-spin-slow"
                            />
                        </div>

                        <div className="absolute bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg z-20 -rotate-6">
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </section>
    );
}