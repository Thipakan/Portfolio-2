import "./Supervision.css";

const captures = {
  vm1: [
    {
      src: "/supervision-assets/vm1-01-mise-a-jour.png",
      alt: "Mise à jour des paquets Ubuntu sur la VM1 de supervision",
      caption: "Mise à jour du système avant l’installation des services.",
    },
    {
      src: "/supervision-assets/vm1-02-prerequis-docker.png",
      alt: "Installation des prérequis Docker sur la VM1",
      caption: "Installation des paquets nécessaires pour ajouter Docker.",
    },
    {
      src: "/supervision-assets/vm1-03-installation-docker.png",
      alt: "Installation de Docker et Docker Compose sur la VM1",
      caption: "Installation de Docker CE et du plugin Docker Compose.",
    },
    {
      src: "/supervision-assets/vm1-04-docker-compose.png",
      alt: "Configuration du fichier Docker Compose sur la VM1",
      caption: "Création du fichier Docker Compose de la plateforme.",
    },
    {
      src: "/supervision-assets/vm1-05-arborescence.png",
      alt: "Arborescence du projet de supervision sur la VM1",
      caption: "Organisation des dossiers et des fichiers de configuration.",
    },
    {
      src: "/supervision-assets/vm1-06-conteneurs.png",
      alt: "Démarrage des conteneurs de supervision avec Docker Compose",
      caption: "Démarrage et vérification des conteneurs de la VM1.",
    },
    {
      src: "/supervision-assets/vm1-07-targets-prometheus.png",
      alt: "Cibles actives affichées dans Prometheus",
      caption: "Prometheus, Alertmanager et Pushgateway apparaissent en état UP.",
    },
    {
      src: "/supervision-assets/vm1-08-metriques-iot.png",
      alt: "Métriques de température et d’humidité dans Prometheus",
      caption: "Résultat final : les mesures IoT sont visibles dans Prometheus.",
    },
  ],
  vm2: [
    {
      src: "/supervision-assets/vm2-01-creation.png",
      alt: "Création de la deuxième machine virtuelle dans VirtualBox",
      caption: "Création de la VM2 sous Ubuntu pour servir de cible Linux.",
    },
    {
      src: "/supervision-assets/vm2-02-installation-docker.png",
      alt: "Installation de Docker sur la VM2",
      caption: "Préparation de la VM2 pour la supervision système et Docker.",
    },
  ],
  vm3: [
    {
      src: "/supervision-assets/vm3-01-ressources.png",
      alt: "Vérification du disque et de la mémoire de la VM3",
      caption: "Vérification des ressources disponibles sur la VM IoT.",
    },
    {
      src: "/supervision-assets/vm3-02-installation-telegraf.png",
      alt: "Installation et configuration de Telegraf sur la VM3",
      caption: "Installation de Telegraf pour transformer les messages MQTT en métriques.",
    },
  ],
};

function GalerieCaptures({ title, description, images }) {
  return (
    <section className="screenshots-group" aria-label={title}>
      <div className="screenshots-heading">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="screenshots-grid">
        {images.map((image) => (
          <figure className="screenshot-card" key={image.src}>
            <a href={image.src} target="_blank" rel="noreferrer">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </a>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Supervision() {
  return (
    <section className="project-page supervision-page">
      <header className="supervision-header">
        <p className="project-label">Projet infrastructure et monitoring</p>
        <h1>Plateforme de supervision de télémétrie</h1>
        <h2>Prometheus, Grafana, Docker et IoT</h2>

        <p className="project-intro">
          Ce projet m’a permis de construire une plateforme de supervision
          répartie sur trois machines virtuelles. L’objectif était de
          centraliser des métriques système, Docker et IoT afin de pouvoir
          vérifier l’état des services depuis Prometheus.
        </p>
      </header>

      <div className="technologies" aria-label="Technologies utilisées">
        <span>Linux</span>
        <span>Docker Compose</span>
        <span>Prometheus</span>
        <span>Grafana</span>
        <span>MQTT</span>
        <span>Telegraf</span>
        <span>Alertmanager</span>
        <span>Pushgateway</span>
      </div>

      <h3>🎯 Objectif du projet</h3>
      <ul>
        <li>Mettre en place une supervision centralisée sur une VM dédiée</li>
        <li>Collecter des métriques Linux, Docker et IoT avec Prometheus</li>
        <li>Simuler un capteur envoyant une température et une humidité</li>
        <li>Préparer l’affichage des données et la gestion des alertes</li>
      </ul>

      <h3>🧱 Architecture</h3>
      <div className="architecture-grid">
        <article className="architecture-card">
          <h4>VM1 — Supervision</h4>
          <p>
            Prometheus, Grafana, Mosquitto, Alertmanager et Pushgateway sont
            lancés avec Docker Compose.
          </p>
        </article>

        <article className="architecture-card">
          <h4>VM2 — Cible Linux</h4>
          <p>
            Node Exporter et cAdvisor ont été utilisés pour préparer la
            collecte des métriques système et des conteneurs.
          </p>
        </article>

        <article className="architecture-card">
          <h4>VM3 — Simulation IoT</h4>
          <p>
            Un script Python publie des données MQTT. Telegraf les transforme
            ensuite en métriques lisibles par Prometheus.
          </p>
        </article>
      </div>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Création de la pile de supervision avec Docker Compose</li>
        <li>Configuration des cibles à collecter dans Prometheus</li>
        <li>Installation de Mosquitto et création d’un simulateur IoT Python</li>
        <li>Configuration de Telegraf pour lire les messages MQTT</li>
        <li>Exposition des métriques IoT sur le port 9273</li>
        <li>Ajout d’Alertmanager et de Pushgateway à la plateforme</li>
      </ul>

      <h3>📸 Captures du projet</h3>
      <p className="screenshots-intro">
        Ces captures montrent les principales étapes réalisées sur les trois
        machines virtuelles. Il est possible de cliquer sur une image pour
        l’ouvrir en grand.
      </p>

      <GalerieCaptures
        title="VM1 — Supervision centrale"
        description="Installation et validation de la plateforme Prometheus, Docker et IoT."
        images={captures.vm1}
      />

      <GalerieCaptures
        title="VM2 — Cible Linux"
        description="Création de la machine et préparation de la supervision système."
        images={captures.vm2}
      />

      <GalerieCaptures
        title="VM3 — Simulation IoT"
        description="Vérification de la VM et mise en place de Telegraf."
        images={captures.vm3}
      />

      <h3>🔎 Problèmes résolus</h3>
      <ul>
        <li>Correction d’erreurs d’indentation dans le fichier YAML</li>
        <li>Résolution d’un conflit de nom avec un ancien conteneur Prometheus</li>
        <li>Correction de l’option de stockage utilisée par Prometheus</li>
        <li>
          Mise en place d’un réseau Host-Only pour faire communiquer les VM
        </li>
        <li>Diagnostic de la chaîne MQTT jusqu’aux métriques Prometheus</li>
      </ul>

      <div className="result-card">
        <h3>📌 Résultat</h3>
        <p>
          La pile centrale fonctionne et Prometheus collecte ses propres
          métriques ainsi que celles d’Alertmanager, de Pushgateway et de
          Telegraf. Les valeurs de température et d’humidité envoyées par la
          VM IoT sont visibles dans Prometheus.
        </p>
        <p>
          Le prototype est fonctionnel pour la partie centrale et la chaîne
          IoT. La connexion complète de la VM2, le dashboard Grafana final et
          les notifications d’alerte restent des améliorations possibles.
        </p>
      </div>

      <h3>💡 Ce que j’ai appris</h3>
      <ul>
        <li>Comprendre le fonctionnement d’une chaîne de supervision</li>
        <li>Administrer plusieurs services avec Docker Compose</li>
        <li>Configurer la collecte de métriques avec Prometheus</li>
        <li>Utiliser MQTT et Telegraf dans un projet IoT</li>
        <li>Diagnostiquer des problèmes Docker, réseau et configuration</li>
        <li>Distinguer un service installé, démarré, joignable et validé</li>
      </ul>
    </section>
  );
}
