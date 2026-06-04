import { Link } from "react-router-dom";

import ohmyfood from "../assets/logo-ohmyfood.png";
import kanap from "../assets/logo-kanap.png";
import mediatek from "../assets/logo-mediatek.png";
import kasa from "../assets/logo-kasa.png";
import pdfLogo from "../assets/logo-pdf.png";
import cvFile from "../assets/cv-thipakan.pdf";

// 🧠 Réseaux / infra logos
import docker from "../assets/logo_docker.png";
import haproxy from "../assets/logo_haproxy.png";
import wazuh from "../assets/logo_wazuh.png";
import awsdesktop from "../assets/logo_aws.png";
import packetTracer from "../assets/logo_packet_tracer.png";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <h2>Voici quelques exemples de projets professionnels réalisés</h2>

      {/* 🔵 RÉSEAUX / INFRASTRUCTURE */}
      <h3>Réseaux & Infrastructure</h3>
      <div className="projets">

        <article className="projet">
          <Link to="/docker">
            <img src={docker} alt="Docker" />
            <p>Docker - Conteneurisation d’applications</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/haproxy">
            <img src={haproxy} alt="HAProxy" />
            <p>HAProxy - Load balancing & haute disponibilité</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/wazuh">
            <img src={wazuh} alt="Wazuh" />
            <p>Wazuh - Supervision et sécurité SIEM</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/packettracer">
            <img src={packetTracer} alt="Packet Tracer" />
            <p>Cisco Packet Tracer - Simulation réseau</p>
          </Link>
        </article>

      </div>

      {/* 🟢 DÉVELOPPEMENT WEB */}
      <h3>Développement Web</h3>
      <div className="projets">

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
            <p>Site e-commerce avec intégration JS / API</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/mediatek">
            <img src={mediatek} alt="Projet Mediatek" />
            <p>Évolution d’une application Symfony / MySQL</p>
          </Link>
        </article>

        <article className="projet">
          <Link to="/kasa">
            <img src={kasa} alt="Projet Kasa" />
            <p>Développement SPA avec React et React Router</p>
          </Link>
        </article>

      </div>

      {/* CV */}
      <div className="resume-download">
        <h3>Téléchargez mon CV :</h3>
        <a href={cvFile} target="_blank" rel="noreferrer">
          <img className="pdf-logo" src={pdfLogo} alt="Télécharger le CV PDF" />
        </a>
      </div>
    </section>
  );
}
