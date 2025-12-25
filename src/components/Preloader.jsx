import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
    const [isComplete, setIsComplete] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsComplete(true);
                setTimeout(() => onComplete(), 300);
            },
        });

        // Smooth fade in logo
        tl.from(".preloader-logo", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
        })
            // Animate progress bar
            .to(
                ".preloader-bar",
                {
                    scaleX: 1,
                    duration: 1.8,
                    ease: "power2.inOut",
                },
                "-=0.5"
            )
            // Fade out everything
            .to(".preloader-content", {
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
            })
            .to(
                ".preloader-container",
                {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in",
                },
                "-=0.2"
            );
    }, []);

    if (isComplete) return null;

    return (
        <div className="preloader-container bg-black">
            {/* Center Content */}
            <div className="preloader-content">
                <img
                    src="/image.png"
                    alt="Logo"
                    className="preloader-logo"
                />
                <div className="preloader-bar-container">
                    <div className="preloader-bar"></div>
                </div>
                <p className="text-white/60 text-sm font-paragraph mt-6 tracking-wider uppercase">
                    Loading Experience
                </p>
            </div>
        </div>
    );
};

export default Preloader;
