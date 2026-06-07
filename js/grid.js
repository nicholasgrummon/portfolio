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
