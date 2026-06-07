/**
 * Renders a single project's detail page (hero, write-up, gallery)
 * based on the ?slug= query parameter. See project.html.
 * Relies on PLACEHOLDER_IMAGE / useImageWithFallback from grid.js.
 */
(function renderProjectPage() {
  const root = document.querySelector("#project-root");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    root.innerHTML = `
      <p class="project-missing">
        We couldn't find that project.
        <a href="design-projects.html">Back to Design Projects</a> ·
        <a href="software-projects.html">Back to Software Projects</a> ·
        <a href="maker-projects.html">Back to Maker Projects</a>
      </p>
    `;
    return;
  }

  const CATEGORY_INFO = {
    design: { label: "Design Project", gridHref: "design-projects.html", gridLabel: "Design Projects" },
    software: { label: "Software Project", gridHref: "software-projects.html", gridLabel: "Software Projects" },
    maker: { label: "Maker Project", gridHref: "maker-projects.html", gridLabel: "Maker Projects" },
  };
  const { label: categoryLabel, gridHref: backHref, gridLabel: backLabel } = CATEGORY_INFO[project.category];

  document.title = `${project.title} — Engineering Portfolio`;

  // ---- Hero ------------------------------------------------------------
  const hero = document.createElement("section");
  hero.className = "project-hero";

  const heroImage = useImageWithFallback(document.createElement("img"));
  heroImage.className = "project-hero__image";
  heroImage.src = project.cover;
  heroImage.alt = project.title;

  const heroBody = document.createElement("div");
  heroBody.className = "project-hero__body";

  const back = document.createElement("a");
  back.className = "project-back";
  back.href = backHref;
  back.textContent = `← Back to ${backLabel}`;

  const badge = document.createElement("span");
  badge.className = `badge badge--${project.category}`;
  badge.textContent = categoryLabel;

  const title = document.createElement("h1");
  title.className = "project-title";
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.className = "project-summary";
  summary.textContent = project.summary;

  heroBody.append(back, badge, title, summary);

  // Tech stack chips (optional — shown if project.techStack is non-empty)
  if (project.techStack && project.techStack.length > 0) {
    const stack = document.createElement("ul");
    stack.className = "chip-list project-tech-stack";
    project.techStack.forEach((tech) => {
      const chip = document.createElement("li");
      chip.className = "chip";
      chip.textContent = tech;
      stack.appendChild(chip);
    });
    heroBody.appendChild(stack);
  }

  // Repo / demo link buttons (optional — shown if project.links has entries)
  if (project.links && (project.links.repo || project.links.demo)) {
    const linksRow = document.createElement("div");
    linksRow.className = "project-links";

    if (project.links.repo) {
      const repoLink = document.createElement("a");
      repoLink.className = "button button--ghost";
      repoLink.href = project.links.repo;
      repoLink.target = "_blank";
      repoLink.rel = "noopener";
      repoLink.textContent = "View Code ↗";
      linksRow.appendChild(repoLink);
    }

    if (project.links.demo) {
      const demoLink = document.createElement("a");
      demoLink.className = "button button--primary";
      demoLink.href = project.links.demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener";
      demoLink.textContent = "Live Demo ↗";
      linksRow.appendChild(demoLink);
    }

    heroBody.appendChild(linksRow);
  }

  hero.append(heroImage, heroBody);

  // ---- Write-up sections ------------------------------------------------
  const writeup = document.createElement("div");
  writeup.className = "project-writeup";

  project.sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "project-section";

    const heading = document.createElement("h2");
    heading.textContent = section.heading;

    const body = document.createElement("p");
    body.textContent = section.body;

    block.append(heading, body);
    writeup.appendChild(block);
  });

  // ---- Gallery -----------------------------------------------------------
  const gallery = document.createElement("section");
  gallery.className = "project-gallery";

  if (project.gallery && project.gallery.length > 0) {
    const galleryHeading = document.createElement("h2");
    galleryHeading.textContent = "Gallery";

    const grid = document.createElement("div");
    grid.className = "project-gallery__grid";

    project.gallery.forEach((src, index) => {
      const link = document.createElement("a");
      link.className = "project-gallery__item";
      link.href = src;
      link.target = "_blank";
      link.rel = "noopener";

      const img = useImageWithFallback(document.createElement("img"));
      img.src = src;
      img.alt = `${project.title} — photo ${index + 1}`;

      link.appendChild(img);
      grid.appendChild(link);
    });

    gallery.append(galleryHeading, grid);
  }

  root.append(hero, writeup, gallery);
})();
