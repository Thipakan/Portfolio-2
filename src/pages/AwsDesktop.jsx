import "./AwsDesktop.css";

export default function AwsDesktop() {
  // 5 images uniquement
  const images = Array.from(
    { length: 5 },
    (_, i) => `/screens/aws-desktop/aws-desktop${i + 1}.png`
  );

  return (
    <section className="project-page">
      <h1>Bureau Linux distant sur AWS EC2</h1>

      <h2>Environnement cloud avec accès bureau via navigateur</h2>

      <p>
        Ce projet consiste à déployer un environnement de bureau Linux complet sur une instance
        <strong> AWS EC2</strong>, accessible à distance via un navigateur web. L’objectif était de
        comprendre la mise en place d’un environnement graphique dans le cloud et de le rendre
        accessible sans client lourd.
      </p>

      <h3>🎯 Objectifs du projet</h3>
      <ul>
        <li>Déployer une machine virtuelle sur AWS EC2</li>
        <li>Installer un environnement graphique Linux (XFCE)</li>
        <li>Configurer un accès distant via VNC</li>
        <li>Mettre en place un accès web avec noVNC</li>
        <li>Comprendre les problématiques réseau cloud (ports, sécurité)</li>
      </ul>

      <h3>🧱 Architecture</h3>
      <ul>
        <li><strong>EC2 Debian 13</strong> : serveur principal</li>
        <li><strong>XFCE</strong> : environnement graphique léger</li>
        <li><strong>TightVNC</strong> : serveur de bureau distant</li>
        <li><strong>noVNC + websockify</strong> : accès via navigateur</li>
        <li><strong>Security Group AWS</strong> : gestion des ports (22, 5901, 6080)</li>
      </ul>

      <h3>🛠️ Mise en place</h3>
      <ul>
        <li>Création et configuration de l’instance EC2</li>
        <li>Installation de XFCE et des outils VNC</li>
        <li>Configuration du serveur VNC (:1)</li>
        <li>Mise en place de noVNC pour l’accès web</li>
        <li>Résolution des problèmes réseau et ports AWS</li>
      </ul>

      <h3>📊 Résultat</h3>
      <p>
        Le système permet d’accéder à un bureau Linux complet directement depuis un navigateur web,
        sans logiciel client. L’environnement est fonctionnel et utilisable à distance.
      </p>

      <h3>📸 Captures d’écran</h3>

      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`AWS Desktop screenshot ${index + 1}`}
          />
        ))}
      </div>

      <h3>💡 Compétences acquises</h3>
      <ul>
        <li>Administration Linux sur cloud (Debian EC2)</li>
        <li>Configuration réseau AWS (Security Groups, ports)</li>
        <li>Installation et gestion d’environnement graphique Linux</li>
        <li>Mise en place de services VNC et accès distant</li>
        <li>Débogage de problèmes système et réseau</li>
      </ul>
    </section>
  );
}
