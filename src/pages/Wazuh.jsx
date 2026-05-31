import "./Wazuh.css";

export default function Wazuh() {
  return (
    <section className="project-page">
      <h1>Projet Wazuh</h1>

      <h2>Supervision et détection d’intrusions</h2>

      <p>
        Ce projet m’a permis de découvrir Wazuh, une solution de sécurité open
        source utilisée pour la supervision, la détection d’intrusions et
        l’analyse des événements système. L’objectif était de mettre en place
        une infrastructure de monitoring pour améliorer la sécurité d’un
        environnement Linux.
      </p>

      <h3>🎯 Objectif du projet</h3>
      <ul>
        <li>Comprendre les principes du SIEM (Security Information and Event Management)</li>
        <li>Découvrir l’outil Wazuh et ses fonctionnalités</li>
        <li>Mettre en place une surveillance des machines Linux</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Installation du serveur Wazuh</li>
        <li>Déploiement d’agents sur des machines Linux</li>
        <li>Configuration des règles de détection et des alertes</li>
      </ul>

      <h3>📌 Résultat</h3>
      <p>
        L’infrastructure permet désormais de surveiller les événements système
        en temps réel, de détecter des comportements suspects et de générer
        des alertes de sécurité.
      </p>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Les bases de la cybersécurité et du SIEM</li>
        <li>Le fonctionnement de Wazuh</li>
        <li>La surveillance et l’analyse d’événements système</li>
      </ul>
    </section>
  );
}
