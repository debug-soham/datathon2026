import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {/* Blue Background from image2.svg */}
        <img 
          src="/image2.svg" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          alt="blue background"
        />
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop"
                className="absolute bottom-40 size-full object-cover"
                alt="AI Neural Network"
              />
            )}
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
              alt="Hackathon Setup"
            />
          </>
        ) : (
          <video
            src="https://cdn.pixabay.com/video/2023/03/23/155431-811934088_large.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <img 
            src="/image.png" 
            alt="Hero Image" 
            className="md:max-w-2xl max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
