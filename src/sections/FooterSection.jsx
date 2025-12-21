import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=300&fit=crop"
        alt="Data Wave"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #DATATHON2025
          </h1>
        </div>

        {isMobile ? (
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
            className="absolute top-0 object-contain opacity-50"
            alt="Hackathon Coding"
          />
        ) : (
          <video
            src="https://cdn.pixabay.com/video/2020/05/25/40742-423154246_large.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="absolute top-0 object-contain mix-blend-lighten opacity-60"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Domains</p>
            </div>
            <div>
              <p>Timeline</p>
              <p>Prizes</p>
              <p>Team</p>
            </div>
            <div>
              <p>About DataZen</p>
              <p>Contact</p>
              <p>FAQs</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Register Now! Get Updates on Problem Statements,
              Event Details, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2024-25 DataZen - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
