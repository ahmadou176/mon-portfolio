
import "./App.css";

const competences = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "Git",
];

const projets = [
  {
    numero: "01",
    titre: "Plateforme de rendez-vous médicaux",
    description:
      "Une plateforme web permettant aux patients de rechercher des médecins, de choisir une spécialité et de prendre rendez-vous au Sénégal.",
    technologies: ["React", "Django", "PostgreSQL"],
    lien: "",
  },
  {
    numero: "02",
    titre: "Gaindé Eats",
    description:
      "Une application de gestion des clients, des restaurants, des produits, des commandes et des statistiques commerciales.",
    technologies: ["Python", "Streamlit", "PostgreSQL"],
    lien: "",
  },
];

function App() {
  const annee = new Date().getFullYear();

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a className="logo" href="#accueil" aria-label="Accueil">
          Ahmadou<span>.</span>
        </a>

        
<nav>
  <a href="#accueil">Ahmadou</a>
  <a href="#apropos">À propos</a>
  <a href="#competences">Compétences</a>
  <a href="#projets">Projets</a>
  <a href="#contact">Contact</a>
</nav>

      </header>

      <main>
        {/* ACCUEIL */}
        <section className="hero" id="accueil">
          <div className="hero-content">
            <p className="intro">BONJOUR, JE SUIS</p>

            <h1>Ahmadou Fall</h1>

            <h2>Développeur Web Junior</h2>

            <p className="description">
              Étudiant en informatique, je m’intéresse à la création
              d’applications web modernes, à la programmation et aux
              bases de données. Je développe des solutions numériques
              adaptées aux besoins des utilisateurs.
            </p>

            <div className="buttons">
              <a className="btn" href="#projets">
                Découvrir mes projets
              </a>

              <a className="btn btn-outline" href="#contact">
                Me contacter
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="code-icon" aria-label="Code informatique">
            {"</>"}
          </div>
        </section>

        {/* À PROPOS */}
        <section className="section" id="apropos">
          <p className="label">MON PARCOURS</p>

          <h2>À propos de moi</h2>

          <p>
            Je suis étudiant en informatique et je m’intéresse
            particulièrement au développement web, à la conception
            de bases de données et à la réalisation d’applications.
            À travers mes projets, je cherche à renforcer mes
            compétences techniques et à résoudre des problèmes
            concrets grâce au numérique.
          </p>
        </section>

        {/* COMPÉTENCES */}
        <section className="section" id="competences">
          <p className="label">MES CONNAISSANCES</p>

          <h2>Mes compétences</h2>

          <p>
            Voici les technologies que j’utilise ou que j’étudie
            dans le cadre de ma formation et de mes projets.
          </p>

          <div className="skills">
            {competences.map((competence) => (
              <span className="skill" key={competence}>
                {competence}
              </span>
            ))}
          </div>
        </section>

        {/* PROJETS */}
        <section className="section" id="projets">
          <p className="label">MES RÉALISATIONS</p>

          <h2>Mes projets</h2>

          <p>
            Quelques exemples de projets informatiques sur lesquels
            je travaille.
          </p>

          <div className="projects">
            {projets.map((projet) => (
              <article className="project-card" key={projet.numero}>
                <span className="project-type">
                  PROJET {projet.numero}
                </span>

                <h3>{projet.titre}</h3>

                <p>{projet.description}</p>

                <div className="technology-list">
                  {projet.technologies.map((technologie) => (
                    <span className="technology" key={technologie}>
                      {technologie}
                    </span>
                  ))}
                </div>

                {projet.lien && (
                  <a
                    className="project-link"
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <p className="label">CONTACT</p>

          <h2>Travaillons ensemble</h2>

          <p>
            Tu as une idée de projet, une proposition de collaboration
            ou une opportunité professionnelle ? N’hésite pas à me
            contacter par e-mail.
          </p>

          
<a href="mailto:tonadresse@email.com">
  Envoyer un e-mail
</a>


          <p className="github">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mon profil GitHub ↗
            </a>
          </p>
        </section>
      </main>

      {/* PIED DE PAGE */}
      <footer>
        <p>
          © {annee} Ahmadou Fall — Portfolio personnel.
        </p>
      </footer>
    </div>
  );
}

export default App;
