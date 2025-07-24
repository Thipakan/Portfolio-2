import KasaImage1 from '../assets/kasa home.png';

export default function Kasa() {
  return (
    <section className="project-detail">
      <h1>Kasa - Projet Front-End</h1>
      <p>
        Ce projet se nomme "Kasa".
        Kasa est une application web de location de logements, développée en React dans le cadre
         de la formation OpenClassrooms. Le projet consiste à créer la partie front-end
          à partir des maquettes Figma,.

         Nous avons travillé entièrement avec React et nous avosn utilisé ses fonctionnalités pour le site :
           composants fonctionnels,
            structure modulaire, utilisation des props et du state, aucune bibliothèque externe,
             et absence d’erreurs dans la console. Les fonctionnalités incluent une galerie d’images 
             avec navigation circulaire et un système de Collapse interactif.
              L'application est initialisée via Create React App, avec Sass en option. Chaque route correspond à une page, et une page 404 s’affiche pour
               toute URL invalide.
      </p>
      <img src={KasaImage1} alt="Kanap" width="300" />
    </section>
  );
}
