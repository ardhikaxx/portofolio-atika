"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface DesignItem {
    id: number;
    src: string;
    alt: string;
}

export default function Design() {
    const [showAll, setShowAll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(raf);
    }, []);

    const designImages: DesignItem[] = [
        { id: 1, src: "/assets/post1.png", alt: "Design 1" },
        { id: 2, src: "/assets/post2.png", alt: "Design 2" },
        { id: 3, src: "/assets/post3.png", alt: "Design 3" },
        { id: 4, src: "/assets/post4.png", alt: "Design 4" },
        { id: 5, src: "/assets/post5.png", alt: "Design 5" },
        { id: 6, src: "/assets/post6.png", alt: "Design 6" },
        { id: 7, src: "/assets/post7.png", alt: "Design 7" },
        { id: 8, src: "/assets/post8.png", alt: "Design 8" },
        { id: 9, src: "/assets/post9.png", alt: "Design 9" },
        { id: 10, src: "/assets/post10.png", alt: "Design 10" },
        { id: 11, src: "/assets/post11.png", alt: "Design 11" },
        { id: 12, src: "/assets/post12.png", alt: "Design 12" },
        { id: 13, src: "/assets/post13.png", alt: "Design 13" },
        { id: 14, src: "/assets/post14.png", alt: "Design 14" },
        { id: 15, src: "/assets/post15.png", alt: "Design 15" },
        { id: 16, src: "/assets/post16.png", alt: "Design 16" },
        { id: 17, src: "/assets/post17.png", alt: "Design 17" },
        { id: 18, src: "/assets/post18.png", alt: "Design 18" },
        { id: 19, src: "/assets/post19.png", alt: "Design 19" },
        { id: 20, src: "/assets/post20.png", alt: "Design 20" },
        { id: 21, src: "/assets/post21.png", alt: "Design 21" },
        { id: 22, src: "/assets/post22.png", alt: "Design 22" },
        { id: 23, src: "/assets/post23.png", alt: "Design 23" },
        { id: 24, src: "/assets/post24.png", alt: "Design 24" },
        { id: 25, src: "/assets/post25.png", alt: "Design 25" },
        { id: 26, src: "/assets/post26.png", alt: "Design 26" },
        { id: 27, src: "/assets/post27.png", alt: "Design 27" },
        { id: 28, src: "/assets/post28.png", alt: "Design 28" },
        { id: 29, src: "/assets/post29.png", alt: "Design 29" },
        { id: 30, src: "/assets/post30.png", alt: "Design 30" },
        { id: 31, src: "/assets/post31.png", alt: "Design 31" },
    ];

    const displayedImages = showAll ? designImages : designImages.slice(0, 3);

    return (
        <section
            id="design"
            className="bg-white w-full min-h-screen py-20 relative overflow-hidden px-4"
        >
            <div className="relative z-10 max-w-7xl mx-auto">
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-200 shadow-sm mb-6">
                        <div className="w-3 h-3 bg-[#EFB07D] rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">
                            MY WORK
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Design{" "}
                        <span className="text-[#EFB07D]">
                            Gallery
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A collection of my latest creative works and design projects
                    </p>
                </div>

                <div
                    className={`mb-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedImages.map((design, index) => (
                            <DesignCard
                                key={design.id}
                                design={design}
                                index={index}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className={`text-center transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group relative bg-white/80 backdrop-blur-md text-gray-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        <span className="flex items-center gap-3 relative z-10">
                            {showAll ? "Show Less" : "Show All Designs"}
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-[#EFB07D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <div className="mt-4 text-sm text-gray-500 font-medium">
                        Showing {displayedImages.length} of {designImages.length} designs
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                0%,
                100% {
                    transform: translateY(0px) scale(1);
                }
                50% {
                    transform: translateY(-20px) scale(1.05);
                }
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

function DesignCard({
    design,
    index,
    isVisible,
}: {
    design: DesignItem;
    index: number;
    isVisible: boolean;
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className={`group relative transition-all duration-700 delay-${index * 200
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
            <div className="absolute -inset-4 bg-[#EFB07D]/15 rounded-3xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-gray-200 z-10 transform group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl"></div>
                    )}

                    <Image
                        src={design.src}
                        alt={design.alt}
                        fill
                        className={`object-cover transition-all duration-700 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            } group-hover:scale-110`}
                        onLoad={() => setImageLoaded(true)}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-1">
                                <svg
                                    className="w-6 h-6 text-[#EFB07D]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
