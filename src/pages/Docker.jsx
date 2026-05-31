import "./Docker.css";

export default function Docker() {
  return (
    <section className="project-page">
      <h1>Projet Docker</h1>

      <h2>Conteneurisation d’applications</h2>

      <p>
        Ce projet m’a permis de découvrir et de mettre en pratique la
        conteneurisation avec Docker. L’objectif était de comprendre comment
        isoler une application et simplifier son déploiement sur différents
        environnements.
      </p>

      <h3>🎯 Objectif du projet</h3>
      <ul>
        <li>Comprendre le fonctionnement de Docker et des conteneurs</li>
        <li>Mettre en place des environnements isolés pour les applications</li>
        <li>Faciliter le déploiement et garantir la portabilité</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Création d’un Dockerfile pour construire l’image de l’application</li>
        <li>Utilisation de Docker Compose pour orchestrer plusieurs services</li>
        <li>Mise en place d’un environnement de développement isolé</li>
      </ul>

      <h3>📌 Résultat</h3>
      <p>
        L’application peut être lancée simplement avec quelques commandes,
        dans un environnement stable et reproductible, sans dépendance à la
        machine hôte.
      </p>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Les bases de la conteneurisation d’applications</li>
        <li>La gestion d’environnements Linux avec Docker</li>
        <li>La mise en place de déploiements plus simples et reproductibles</li>
      </ul>
    </section>
  );
}
