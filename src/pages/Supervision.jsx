      <header className="supervision-header">
        <p className="project-label">Projet infrastructure et monitoring</p>
        <h1>Plateforme de supervision de télémétrie</h1>
        <h2>Prometheus, Grafana, Docker et IoT</h2>
      </header>

      /*<p className="project-intro">
          Ce projet m’a permis de construire une plateforme de supervision
          répartie sur trois machines virtuelles. L’objectif était de
          centraliser des métriques système, Docker et IoT afin de pouvoir
          vérifier l’état des services depuis Prometheus.
      </p>*/
                
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

