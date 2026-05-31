import { Link } from "react-router-dom";
import ohmyfood from "../assets/logo-ohmyfood.png";
import kanap from "../assets/logo-kanap.png";
import mediatek from "../assets/logo-mediatek.png";
import kasa from "../assets/logo-kasa.png";
import pdfLogo from "../assets/logo-pdf.png";
import cvFile from "../assets/cv-thipakan.pdf";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <h2>Voici quelques exemples de projets professionnels réalisés</h2>

      <div className="projets">

        {/* 🔵 Réseaux */}
        <article className="projet">
          <Link to="/docker">
            <p>Docker - Conteneurisation d’applications</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/haproxy">
            <p>HAProxy - Load balancing & haute disponibilité</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/wazuh">
            <p>Wazuh - Supervision et sécurité SIEM</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/packet-tracer">
            <p>Cisco Packet Tracer - Simulation réseau</p>
          </Link>
        </article>

        {/* 🟢 Dev */}
        <article className="projet">
          <a
            href="https://thipakan.github.io/Projet-3/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ohmyfood} alt="Projet OhMyFood" />
          </a>
          <p>Site mobile-first avec animations CSS</p>
        </article>

        <article className="projet">
          <Link to="/kanap">
            <img src={kanap} alt="Projet Kanap" />
          </Link>
          <p>Site e-commerce avec intégration JS / API</p>
        </article>

        <article className="projet">
          <Link to="/mediatek">
            <img src={mediatek} alt="Projet Mediatek" />
          </Link>
          <p>Évolution d’une application Symfony / MySQL</p>
        </article>

        <article className="projet">
          <Link to="/kasa">
            <img src={kasa} alt="Projet Kasa" />
          </Link>
          <p>Développement SPA avec React et React Router</p>
        </article>

      </div>

      <div className="resume-download">
        <h3>Téléchargez mon CV :</h3>
        <a href={cvFile} target="_blank" rel="noreferrer">
          <img className="pdf-logo" src={pdfLogo} alt="Télécharger le CV PDF" />
        </a>
      </div>
    </section>
  );
}
