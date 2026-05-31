export default function Docker() {
  return (

    <style>.project-page {
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;
  background: #0f172a; /* bleu très sombre */
  color: #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  line-height: 1.6;
}

.project-page h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.project-page h2 {
  font-size: 1.4rem;
  font-weight: 400;
  color: #93c5fd;
  margin-bottom: 30px;
}

.project-page h3 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #60a5fa;
  border-left: 4px solid #3b82f6;
  padding-left: 10px;
}

.project-page p {
  margin-bottom: 15px;
  color: #cbd5e1;
}

.project-page ul {
  list-style: none;
  padding-left: 0;
}

.project-page ul li {
  background: #1e293b;
  margin-bottom: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.project-page ul li:hover {
  background: #334155;
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .project-page {
    padding: 20px;
    margin: 20px;
  }

  .project-page h1 {
    font-size: 2rem;
  }
}</style>
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
