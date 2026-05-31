import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <div className="haut">
      <Particles
        options={{
          fullScreen: { enable: false }, // Important : limite la taille au div
          background: { color: "#0f2027" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            color: { value: "#00bfff" },
            links: { enable: true, color: "#00bfff", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          zIndex: 0,
        }}
      />
      <h1>Thipakan Sriranjan</h1>
      <h2>Administrateur Systèmes & Réseaux

Ancien développeur web avec 3 ans d'expérience en alternance, actuellement en Mastère Cybersécurité & Réseaux.</h2>
    </div>
  );
}
