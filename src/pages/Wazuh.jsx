import "./Wazuh.css";

export default function Wazuh() {
  return (
    <section className="project-page">
      <h1>Projet Wazuh</h1>

      <h2>Supervision et détection d’intrusions</h2>

      <p>
        Ce projet m’a permis de découvrir et de mettre en place <strong>Wazuh</strong>, une solution
        open source de sécurité utilisée pour la supervision, la détection d’intrusions et l’analyse
        des événements système. L’objectif était de simuler une infrastructure réaliste afin
        d’améliorer la sécurité d’un environnement Linux.
      </p>

      <h3>🎯 Objectifs du projet</h3>
      <ul>
        <li>Comprendre les principes du SIEM (Security Information and Event Management)</li>
        <li>Découvrir Wazuh et son fonctionnement</li>
        <li>Mettre en place un système de surveillance et de détection d’attaques</li>
        <li>Simuler un environnement réaliste avec plusieurs machines</li>
      </ul>

      <h3>🧱 Architecture du projet</h3>
      <ul>
        <li><strong>VM serveur Wazuh</strong> : centralisation des logs, analyse et alertes</li>
        <li><strong>VM serveur Web</strong> : machine cible hébergeant un service web</li>
        <li><strong>VM attaquante</strong> : simulation d’attaques (scan, tentatives d’accès, etc.)</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Installation et configuration du serveur Wazuh</li>
        <li>Déploiement des agents sur les machines Linux</li>
        <li>Configuration des règles de détection et des alertes de sécurité</li>
        <li>Simulation d’attaques depuis la machine attaquante</li>
      </ul>

      <h3>📊 Résultats</h3>
      <p>
        L’infrastructure permet désormais de surveiller en temps réel les événements système,
        de détecter des comportements suspects (scan réseau, connexions suspectes, etc.)
        et de générer des alertes de sécurité visibles dans le tableau de bord Wazuh.
      </p>

      <h3>📸 Captures d’écran</h3>
      <p>
        Les captures d’écran du projet (dashboard Wazuh, alertes, simulation d’attaque)
        seront ajoutées ici prochainement pour illustrer le fonctionnement complet de l’infrastructure.
      </p>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Les bases du SIEM et de la cybersécurité</li>
        <li>Le fonctionnement interne de Wazuh</li>
        <li>La gestion d’une infrastructure multi-machines</li>
        <li>L’analyse et la corrélation d’événements système</li>
      </ul>
    </section>
  );
}
