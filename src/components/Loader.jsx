import React, { useState, useEffect } from "react";

export default function Loader() {
  const [text, setText] = useState("");
  const fullText = `console.log("Bienvenue sur mon portfolio...");`;
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 500); // petit délai avant fin
      }
    }, 50); // vitesse de frappe

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`loader-screen ${isDone ? "fade-out" : ""}`}
      style={{
        backgroundColor: "#0f2027",
        color: "#00bfff",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        fontSize: "1.5rem",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: "opacity 0.8s ease",
        opacity: isDone ? 0 : 1,
        pointerEvents: isDone ? "none" : "all",
      }}
    >
      <code>
        {text}
        <span className="blinking">|</span>
      </code>

      <style>{`
        .blinking {
          animation: blink 1s steps(2, start) infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .fade-out {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
