import kanapImage from '../assets/p5_image1.png'; 
import kanapImage1 from '../assets/p5_image2.png';

export default function Kanap() {
  return (
    <section className="project-detail">
      <h1>Kanap - Projet JavaScript</h1>
      <p>
        Pour ce projet avions le backend qui est fourni et une partie du frontend.
         Il s'agit d’un site de e-commerce (site qui vend des canapés ) et le projet consiste
          à intégrer complètement le frontend en récupérant les données
         de l'API ( qui contient les informations des canapés), en paramétrant la gestion du panier, 
         stockage local...
      </p>
     <img src={kanapImage} alt="Kanap" width="300" />
     <img src={kanapImage1} alt="Kanap" width="300" style={{ marginLeft: '50px' }} />

    </section>
  );
}
