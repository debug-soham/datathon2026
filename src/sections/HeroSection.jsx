import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    // Smooth fade-in animation on page load
    gsap.from(".hero-image", {
      opacity: 0,
      scale: 1.05,
      duration: 2,
      ease: "power2.out",
      delay: 0.2,
    });

    // Fade in hero overlay content
    gsap.from(".hero-overlay-content", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8,
    });

    // Parallax scroll effect
    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      yPercent: 20,
      ease: "none",
    });

    // Fade out content on scroll
    gsap.to(".hero-overlay-content", {
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "50% top",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      ease: "none",
    });

    // Scale container on scroll
    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
      scale: 0.9,
      borderRadius: "24px",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-black">
      <div className="hero-container">
        {/* Hero Background Image */}
        <img
          src="/Decoding the Data-upside Down..png"
          className="hero-image absolute inset-0 w-full h-full object-cover"
          alt="Decoding the Data - Upside Down"
        />
      </div>
    </section>
  );
};

export default HeroSection;
