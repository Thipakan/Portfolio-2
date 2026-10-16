import "./Supervision.css";

import vm1MiseAJour from "../assets/vm1-01-mise-a-jour.png";
import vm1PrerequisDocker from "../assets/vm1-02-prerequis-docker.png";
import vm1InstallationDocker from "../assets/vm1-03-installation-docker.png";
import vm1DockerCompose from "../assets/vm1-04-docker-compose.png";
import vm1Arborescence from "../assets/vm1-05-arborescence.png";
import vm1Conteneurs from "../assets/vm1-06-conteneurs.png";
import vm1TargetsPrometheus from "../assets/vm1-07-targets-prometheus.png";
import vm1MetriquesIot from "../assets/vm1-08-metriques-iot.png";
import vm2Creation from "../assets/vm2-01-creation.png";
import vm2InstallationDocker from "../assets/vm2-02-installation-docker.png";
import vm3Ressources from "../assets/vm3-01-ressources.png";
import vm3InstallationTelegraf from "../assets/vm3-02-installation-telegraf.png";

<img
  src={vm1MiseAJour}
  alt="Test VM1"
  style={{ width: "100%" }}
/>

const captures = {
  vm1: [
    {
      src: vm1MiseAJour,
      alt: "Mise à jour des paquets Ubuntu sur la VM1 de supervision",
      caption: "Mise à jour du système avant l’installation des services.",
    },
    {
      src: vm1PrerequisDocker,
      alt: "Installation des prérequis Docker sur la VM1",
      caption: "Installation des paquets nécessaires pour ajouter Docker.",
    },
    {
      src: vm1InstallationDocker,
      alt: "Installation de Docker et Docker Compose sur la VM1",
      caption: "Installation de Docker CE et du plugin Docker Compose.",
    },
    {
      src: vm1DockerCompose,
      alt: "Configuration du fichier Docker Compose sur la VM1",
      caption: "Création du fichier Docker Compose de la plateforme.",
    },
    {
      src: vm1Arborescence,
      alt: "Arborescence du projet de supervision sur la VM1",
      caption: "Organisation des dossiers et des fichiers de configuration.",
    },
    {
      src: vm1Conteneurs,
      alt: "Démarrage des conteneurs de supervision avec Docker Compose",
      caption: "Démarrage et vérification des conteneurs de la VM1.",
    },
    {
      src: vm1TargetsPrometheus,
      alt: "Cibles actives affichées dans Prometheus",
      caption: "Prometheus, Alertmanager et Pushgateway apparaissent en état UP.",
    },
    {
      src: vm1MetriquesIot,
      alt: "Métriques de température et d’humidité dans Prometheus",
      caption: "Résultat final : les mesures IoT sont visibles dans Prometheus.",
    },
  ],
  vm2: [
    {
      src: vm2Creation,
      alt: "Création de la deuxième machine virtuelle dans VirtualBox",
      caption: "Création de la VM2 sous Ubuntu pour servir de cible Linux.",
    },
    {
      src: vm2InstallationDocker,
      alt: "Installation de Docker sur la VM2",
      caption: "Préparation de la VM2 pour la supervision système et Docker.",
    },
  ],
  vm3: [
    {
      src: vm3Ressources,
      alt: "Vérification du disque et de la mémoire de la VM3",
      caption: "Vérification des ressources disponibles sur la VM IoT.",
    },
    {
      src: vm3InstallationTelegraf,
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

