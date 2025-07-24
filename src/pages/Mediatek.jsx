import MediatekImage from '../assets/logo-mediatek.png'; 


export default function Mediatek() {
  return (
    <section className="project-detail">
      <h1>MediaTek - Projet Symfony</h1>
      <p>
        Pour ce projet nous avons travaillé sur Symfony et Mysql. Le site s'appelle MediatekFormations ( un réseau qui regre=oupe l'ensemble des médiatèques de Vienne)
        Nous avons fait évoluer l'application existante en ajoutant des fonctionnalités et des tables dans la base de données (cours, niveaux, espace admin), en Symfony, MySQL, WAMP.
      </p>
      <img src={MediatekImage} alt="Kanap" width="300" />
    </section>
  );
}
