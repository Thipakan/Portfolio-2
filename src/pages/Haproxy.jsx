import "./Haproxy.css";

export default function Haproxy() {
  return (
    <section className="project-page">
      <h1>Projet HAProxy</h1>

      <h2>Load balancing et haute disponibilité</h2>

      <p>
        Ce projet m’a permis de découvrir HAProxy et son rôle dans la gestion du
        trafic réseau. L’objectif était de mettre en place un système de load
        balancing afin de répartir les requêtes entre plusieurs serveurs et
        améliorer la disponibilité d’une application.
      </p>

      <h3>🎯 Objectif du projet</h3>
      <ul>
        <li>Comprendre le rôle d’un load balancer</li>
        <li>Découvrir le fonctionnement de HAProxy</li>
        <li>Améliorer la disponibilité et la répartition de charge</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Installation et configuration de HAProxy sur Linux</li>
        <li>Définition des serveurs backend</li>
        <li>Configuration des règles de répartition de charge</li>
      </ul>

      <h3>📌 Résultat</h3>
      <p>
        Le trafic est désormais réparti entre plusieurs serveurs, ce qui permet
        d’éviter la surcharge d’une seule machine et d’améliorer la stabilité
        globale du service.
      </p>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Les bases du load balancing</li>
        <li>Le fonctionnement de HAProxy</li>
        <li>La gestion de la haute disponibilité</li>
      </ul>
    </section>
  );
}
