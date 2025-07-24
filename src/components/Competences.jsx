// src/components/Competences.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faPhp,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Competences() {
  return (
    <section id="competences">
      <h1>Compétences</h1>
      <div className="competences-liste">

        {/* HTML */}
        <div className="competence">
          <FontAwesomeIcon icon={faHtml5} className="competence-icon" />
          <span>HTML</span>
          <div className="barre-progress">
            <div className="barre-html"></div>
          </div>
        </div>

        {/* CSS */}
        <div className="competence">
          <FontAwesomeIcon icon={faCss3Alt} className="competence-icon" />
          <span>CSS</span>
          <div className="barre-progress">
            <div className="barre-css"></div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="competence">
          <FontAwesomeIcon icon={faJs} className="competence-icon" />
          <span>JavaScript (React)</span>
          <div className="barre-progress">
            <div className="barre-js"></div>
          </div>
        </div>

        {/* Vue.js */}
        <div className="competence">
          <FontAwesomeIcon icon={faVuejs} className="competence-icon" />
          <span>Vue.js</span>
          <div className="barre-progress">
            <div className="barre-js"></div>
          </div>
        </div>

        {/* PHP */}
        <div className="competence">
          <FontAwesomeIcon icon={faPhp} className="competence-icon" />
          <span>PHP (Symfony)</span>
          <div className="barre-progress">
            <div className="barre-php"></div>
          </div>
        </div>

        {/* MySQL */}
        <div className="competence">
          <FontAwesomeIcon icon={faDatabase} className="competence-icon" />
          <span>MySQL</span>
          <div className="barre-progress">
            <div className="barre-mysql"></div>
          </div>
        </div>

        {/* WordPress */}
        <div className="competence">
          <FontAwesomeIcon icon={faWordpress} className="competence-icon" />
          <span>WordPress</span>
          <div className="barre-progress">
            <div className="barre-wordpress"></div>
          </div>
        </div>

        {/* Shopify */}
        <div className="competence">
          <FontAwesomeIcon icon={faShoppingCart} className="competence-icon" />
          <span>Shopify</span>
          <div className="barre-progress">
            <div className="barre-wordpress"></div>
          </div>
        </div>

        {/* PrestaShop */}
        <div className="competence">
          <FontAwesomeIcon icon={faShoppingCart} className="competence-icon" />
          <span>PrestaShop</span>
          <div className="barre-progress">
            <div className="barre-wordpress"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
