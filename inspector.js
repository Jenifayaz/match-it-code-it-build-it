// Edit the HTML and CSS strings below to change what learners see when inspecting.
const parts = {
  header: {
    name: 'Header and navigation',
    html: `<header class="site-header">
  <strong>MyDigitalWorld</strong>
  <nav>
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
  </nav>
</header>`,
    css: `.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
}
.site-header nav { display: flex; gap: 14px; }
.site-header a { color: white; text-decoration: none; }
.site-header a:hover { color: #c5a9ff; }`
  },
  hero: {
    name: 'Introduction',
    html: `<section id="about" class="hero">
  <h1>Hi, I'm Alex! 👋</h1>
  <p>I'm a T Level Digital student who enjoys coding and gaming.</p>
  <a href="projects.html" class="site-button">View My Projects</a>
</section>`,
    css: `.hero {
  background: #293754;
  padding: 30px 22px;
  border-radius: 12px;
  margin: 15px 0 24px;
}
.site-button {
  display: inline-block;
  background: #8050e5;
  color: white;
  padding: 12px 17px;
  border-radius: 8px;
  text-decoration: none;
}
.site-button:hover { background: #6234bb; }`
  },
  cards: {
    name: 'Interest cards',
    html: `<!-- Add this inside the <head> of your HTML page to load Font Awesome: -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">

<!-- Then add the following inside <body>: -->
<section id="interests">
  <h2>My Interests</h2>
  <div class="cards">
    <div class="interest-card">
      <h3><i class="fa-solid fa-gamepad" aria-hidden="true"></i> Gaming</h3>
      <p>My favourite games</p>
    </div>
    <div class="interest-card">
      <h3><i class="fa-solid fa-code" aria-hidden="true"></i> Coding</h3>
      <p>Web development</p>
    </div>
    <div class="interest-card">
      <h3><i class="fa-solid fa-headphones" aria-hidden="true"></i> Music</h3>
      <p>What I listen to</p>
    </div>
  </div>
</section>`,
    css: `/* Font Awesome icons: adjust their colour, size and spacing */
.interest-card .fa-solid {
  color: #c5a9ff;
  font-size: 1.4rem;
  margin-right: 6px;
  vertical-align: middle;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.interest-card {
  background: #2c3b59;
  padding: 18px 8px;
  border-radius: 10px;
  text-align: center;
}
.interest-card:hover { background: #514184; }
@media (max-width: 480px) {
  .cards { grid-template-columns: 1fr; }
}`
  }
};
const htmlCode = document.querySelector('#html-code');
const cssCode = document.querySelector('#css-code');
function inspect(part) {
  const data = parts[part];
  if (!data) return;
  document.querySelector('#selection').textContent = data.name;
  htmlCode.textContent = data.html;
  cssCode.textContent = data.css;
  document.querySelectorAll('.inspectable').forEach(el => el.classList.toggle('selected', el.dataset.part === part));
  document.querySelectorAll('[data-copy]').forEach(button => button.hidden = false);
}
document.querySelectorAll('.inspectable').forEach(element => {
  element.addEventListener('click', () => inspect(element.dataset.part));
  element.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); inspect(element.dataset.part);
    }
  });
});
document.querySelectorAll('.demo-link').forEach(link => link.addEventListener('click', event => event.preventDefault()));
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const code = button.dataset.copy === 'html' ? htmlCode.textContent : cssCode.textContent;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = 'Copy', 1200);
    } catch {
      button.textContent = 'Select code to copy';
    }
  });
});
