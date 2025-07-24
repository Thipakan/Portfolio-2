import photoProfil from '../assets/photo.jpg';

export default function Presentation() {
  return (
    <section id="presentation">
      <h1>Présentation</h1>
      <div className="presentation1">
        <div className="photo">
          <img src={photoProfil} alt="Photo de Thipakan Sriranjan, développeur web" />
        </div>
        <div className="presentation-text">
          <p>
            Bonjour, je m’appelle <strong>Thipakan Sriranjan</strong>. Après une formation de développeur junior chez
            OpenClassrooms, j’ai obtenu un <strong>BTS SIO SLAM</strong> via le CNED, puis poursuivi avec un
            <strong> bachelor en développement web</strong> à l’école IRIS.
          </p>
          <p>
            Actuellement en <strong>1ère année de Mastère Cybersécurité et Réseaux</strong>, je me spécialise dans la
            sécurité des applications web et la gestion des infrastructures réseaux. Mon objectif est de créer des
            solutions fiables, performantes et sécurisées.
          </p>
        </div>
      </div>
    </section>
  );
}
