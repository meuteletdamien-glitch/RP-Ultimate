import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="logo">RP<span>ULTIMATE</span></div>

    <nav>
      <a href="#accueil">Accueil</a>
      <a href="#bibliotheque">Bibliothèque</a>
      <a href="#creation">Créer un scénario</a>
      <a href="#mes-rp">Mes RP</a>
    </nav>

    <button class="login-button">Connexion</button>
  </header>

  <main id="accueil">
    <section class="hero">
      <p class="eyebrow">TON IMAGINATION, TON UNIVERS</p>

      <h1>Entre dans une nouvelle<br>
      dimension du <span>Roleplay.</span></h1>

      <p class="description">
        Crée tes propres univers, découvre des scénarios
        et donne vie à tes histoires grâce à l'intelligence artificielle.
      </p>

      <div class="hero-buttons">
        <a href="#bibliotheque" class="primary-button">
          Découvrir les scénarios
        </a>
        <a href="#creation" class="secondary-button">
          Créer mon univers
        </a>
      </div>
    </section>

    <section class="features">
      <article>
        <div class="feature-icon">📚</div>
        <h2>Bibliothèque</h2>
        <p>Découvre des univers et des scénarios créés par la communauté.</p>
      </article>

      <article>
        <div class="feature-icon">✍️</div>
        <h2>Création</h2>
        <p>Imagine tes propres mondes, personnages et histoires.</p>
      </article>

      <article>
        <div class="feature-icon">🤖</div>
        <h2>Intelligence artificielle</h2>
        <p>Donne vie à tes personnages et plonge dans tes aventures.</p>
      </article>
    </section>
    
<section class="library" id="bibliotheque">
  <div class="library-heading">
    <p class="eyebrow">EXPLORE DE NOUVEAUX UNIVERS</p>
    <h2>La Bibliothèque</h2>
    <p>Découvre des scénarios imaginés par la communauté.</p>
  </div>

  <input
    type="search"
    class="search-bar"
    placeholder="Rechercher un scénario..."
  >

  <div class="categories">
    <button>Tous</button>
    <button>Fantastique</button>
    <button>Science-fiction</button>
    <button>Action</button>
    <button>Survie</button>
    <button>Vie quotidienne</button>
  </div>

  <div class="scenario-grid">
    <article class="scenario-card">
      <span class="scenario-category">Fantastique</span>
      <h3>Le Royaume oublié</h3>
      <p>Un royaume mystérieux, des créatures anciennes et une aventure à écrire.</p>
      <button>Découvrir</button>
    </article>

    <article class="scenario-card">
      <span class="scenario-category">Science-fiction</span>
      <h3>Nouvelle frontière</h3>
      <p>L'humanité explore les confins de l'univers et découvre l'inconnu.</p>
      <button>Découvrir</button>
    </article>

    <article class="scenario-card">
      <span class="scenario-category">Survie</span>
      <h3>Dernier refuge</h3>
      <p>Dans un monde dévasté, chaque décision peut changer votre destin.</p>
      <button>Découvrir</button>
    </article>
  </div>
</section>

  </main>

  <footer>
    RP-ULTIMATE © 2026 — Tous droits réservés.
  </footer>
`
