import "./Wazuh.css";

export default function Wazuh() {
  // Génère automatiquement les 15 images
  const images = Array.from(
    { length: 15 },
    (_, i) => `/screens/wazuh${i + 1}.png`
  );

  return (
    <section className="project-page">
      <h1>Projet Wazuh</h1>

      <h2>Supervision et détection d’intrusions</h2>

      <p>
        Ce projet m’a permis de découvrir et de mettre en place <strong>Wazuh</strong>,
        une solution open source de sécurité utilisée pour la supervision, la détection
        d’intrusions et l’analyse des événements système. L’objectif était de simuler
        une infrastructure réaliste avec plusieurs machines afin d’améliorer la sécurité
        d’un environnement Linux.
      </p>

      <h3>🎯 Objectifs du projet</h3>
      <ul>
        <li>Comprendre les principes du SIEM (Security Information and Event Management)</li>
        <li>Découvrir Wazuh et son fonctionnement</li>
        <li>Mettre en place un système de surveillance et de détection d’attaques</li>
        <li>Simuler un environnement avec plusieurs machines (VM)</li>
      </ul>

      <h3>🧱 Architecture du projet</h3>
      <ul>
        <li><strong>VM serveur Wazuh</strong> : centralisation des logs, analyse et alertes</li>
        <li><strong>VM serveur Web</strong> : machine cible hébergeant un service web</li>
        <li><strong>VM attaquante</strong> : simulation d’attaques (scan, brute force, etc.)</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Installation et configuration du serveur Wazuh</li>
        <li>Déploiement des agents sur les machines Linux</li>
        <li>Configuration des règles de détection et alertes</li>
        <li>Simulation d’attaques depuis la VM attaquante</li>
      </ul>

      <h3>📊 Résultats</h3>
      <p>
        L’infrastructure permet de surveiller en temps réel les événements système,
        de détecter des comportements suspects et de générer des alertes visibles
        dans le dashboard Wazuh.
      </p>

      <h3>📸 Captures d’écran</h3>

      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Wazuh screenshot ${index + 1}`}
          />
        ))}
      </div>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Les bases du SIEM et de la cybersécurité</li>
        <li>Le fonctionnement de Wazuh</li>
        <li>La gestion d’une infrastructure multi-machines</li>
        <li>L’analyse et corrélation d’événements système</li>
      </ul>
    </section>
  );
}
