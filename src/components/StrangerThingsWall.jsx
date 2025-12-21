import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StrangerThingsWall = ({ message = "DATATHON" }) => {
  const lettersRef = useRef([]);
  const lightsRef = useRef([]);
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const messageLetters = message.toUpperCase().replace(/\s/g, "").split("");

  useGSAP(() => {
    // Random flickering for all lights
    lightsRef.current.forEach((light) => {
      if (light) {
        gsap.to(light, {
          opacity: () => Math.random() > 0.3 ? 1 : 0.4,
          scale: () => Math.random() > 0.5 ? 1.1 : 0.9,
          duration: 0.15,
          repeat: -1,
          repeatDelay: () => Math.random() * 2,
        });
      }
    });

    // Blink only DATATHON letters in sequence
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    
    messageLetters.forEach((letter) => {
      const letterIndex = alphabet.indexOf(letter);
      if (letterIndex !== -1) {
        tl.to(lettersRef.current[letterIndex], {
          color: "#ff0000",
          textShadow: "0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000",
          scale: 1.15,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(lettersRef.current[letterIndex], {
          color: "#8b4513",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          scale: 1,
          duration: 0.3,
        }, "+=0.1");
      }
    });
  });

  return (
    <div className="stranger-wall">
      {/* String Lights */}
      <div className="lights-strand">
        {alphabet.map((letter, index) => {
          const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#a8e6cf", "#ff8b94", "#c7ceea"];
          const color = colors[index % colors.length];
          return (
            <div
              key={`light-${index}`}
              ref={(el) => (lightsRef.current[index] = el)}
              className="string-light"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
              }}
            />
          );
        })}
      </div>

      {/* Alphabet Wall */}
      <div className="alphabet-grid">
        {alphabet.map((letter, index) => (
          <span
            key={letter}
            ref={(el) => (lettersRef.current[index] = el)}
            className="painted-letter"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StrangerThingsWall;
