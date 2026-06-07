/**
 * Renders project cards into a grid container, filtered by category.
 * Used by design-projects.html and maker-projects.html — see the
 * <script> tag at the bottom of each page.
 */
const PLACEHOLDER_IMAGE = "assets/placeholders/photo-placeholder.svg";

function useImageWithFallback(img) {
  img.loading = "lazy";
  img.addEventListener("error", function onError() {
    img.removeEventListener("error", onError);
    img.src = PLACEHOLDER_IMAGE;
    img.classList.add("is-placeholder");
  });
  return img;
}

function renderProjectGrid(category, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const projects = PROJECTS.filter((project) => project.category === category);

  projects.forEach((project) => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `project.html?slug=${encodeURIComponent(project.slug)}`;

    const cover = useImageWithFallback(document.createElement("img"));
    cover.className = "project-card__cover";
    cover.src = project.cover;
    cover.alt = project.title;

    const body = document.createElement("div");
    body.className = "project-card__body";

    const title = document.createElement("h3");
    title.className = "project-card__title";
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.className = "project-card__summary";
    summary.textContent = project.summary;

    body.appendChild(title);
    body.appendChild(summary);
    card.appendChild(cover);
    card.appendChild(body);
    container.appendChild(card);
  });

  if (projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "project-missing";
    empty.textContent = "No projects in this category yet — add one in js/projects-data.js.";
    container.appendChild(empty);
  }
}

/**
 * Renders one clickable "bar" per project category on the landing page —
 * each shows a collage of that category's cover photos and links through
 * to its grid page. Add a fourth category here (key/title/description/href)
 * if you ever introduce a new one in projects-data.js.
 */
const PROJECT_CATEGORIES = [
  {
    key: "design",
    title: "Design Projects",
    description: "Full design → build → test engineering challenges, including capstone and senior design work.",
    href: "design-projects.html",
  },
  {
    key: "software",
    title: "Software Projects",
    description: "Code-focused builds — apps, tools, sites, and libraries — with source and live-demo links.",
    href: "software-projects.html",
  },
  {
    key: "maker",
    title: "Maker Projects",
    description: "Simpler, build-oriented projects made for the love of hands-on craft and fabrication.",
    href: "maker-projects.html",
  },
];

const SHOWCASE_COLLAGE_SIZE = 4;

function renderCategoryShowcase(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  PROJECT_CATEGORIES.forEach((category) => {
    const projects = PROJECTS.filter((project) => project.category === category.key);
    if (projects.length === 0) return;

    const bar = document.createElement("a");
    bar.className = "category-bar";
    bar.href = category.href;

    const collage = document.createElement("div");
    collage.className = "category-bar__collage";
    projects.slice(0, SHOWCASE_COLLAGE_SIZE).forEach((project) => {
      const cover = useImageWithFallback(document.createElement("img"));
      cover.src = project.cover;
      cover.alt = project.title;
      collage.appendChild(cover);
    });

    const body = document.createElement("div");
    body.className = "category-bar__body";

    const title = document.createElement("h3");
    title.textContent = category.title;

    const description = document.createElement("p");
    description.textContent = category.description;

    const cta = document.createElement("span");
    cta.className = "category-bar__cta";
    cta.textContent = `Browse ${category.title} →`;

    body.append(title, description, cta);
    bar.append(collage, body);
    container.appendChild(bar);
  });
}
