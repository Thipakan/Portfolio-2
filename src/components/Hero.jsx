import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <section className="hero">
      <Particles
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f2027" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 100 },
            },
          },
          particles: {
            color: { value: "#00bfff" },
            links: {
              enable: true,
              color: "#00bfff",
              distance: 150,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
        className="particles"
      />

      <div className="hero-content">
        <h1>Thipakan Sriranjan</h1>

        <h2>Administrateur Systèmes & Réseaux</h2>

        <p className="subtitle">
          Étudiant en Mastère Cybersécurité & Réseaux, passionné par la
          sécurisation des infrastructures et l’administration système. J’ai
          travaillé sur des projets liés au cloud, à la conteneurisation et à
          la supervision d’environnements Linux.
        </p>
      </div>
    </section>
  );
}
