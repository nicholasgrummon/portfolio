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
        <a href="maker-projects.html">Back to Maker Projects</a>
      </p>
    `;
    return;
  }

  const isDesign = project.category === "design";
  const categoryLabel = isDesign ? "Design Project" : "Maker Project";
  const backHref = isDesign ? "design-projects.html" : "maker-projects.html";
  const backLabel = isDesign ? "Design Projects" : "Maker Projects";

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
