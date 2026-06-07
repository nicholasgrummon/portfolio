/**
 * Project data — the single source of truth for both project grids
 * and project detail pages.
 *
 * TO ADD A NEW PROJECT:
 *   1. Create a folder under assets/projects/<design|software|maker>/<your-slug>/
 *      with a cover image and a gallery/ subfolder (see CONTENT_GUIDE.md).
 *   2. Copy one of the objects below, give it a unique `slug`, and fill
 *      in the fields. That's it — it will automatically appear in the
 *      matching grid (design-projects.html, software-projects.html, or
 *      maker-projects.html) and get its own detail page at
 *      project.html?slug=your-slug.
 *
 * FIELD NOTES:
 *   slug       — unique, URL-safe id (lowercase, hyphens). Used in the
 *                project's URL and to match it to its image folder.
 *   category   — "design", "software", or "maker". Controls which grid
 *                it appears in and which badge color/back-link it gets.
 *   title      — shown on the card and as the page heading.
 *   summary    — one or two sentences shown on the card and at the top
 *                of the detail page.
 *   cover      — path to the cover photo. If the file doesn't exist yet,
 *                a placeholder graphic is shown automatically.
 *   gallery    — array of additional photo paths for the detail page.
 *                Leave the array in place even if the files don't exist
 *                yet — placeholders will be shown until you add them.
 *   sections   — the write-up, rendered as heading + paragraph blocks in
 *                order. Design projects traditionally use Challenge →
 *                Approach → Build → Test → Outcome; software and maker
 *                projects use a simpler Build → Result. Feel free to
 *                adjust headings to fit a particular project.
 *   techStack  — OPTIONAL array of strings shown as chips on the detail
 *                page (e.g. ["Python", "React", "PostgreSQL"]). Omit the
 *                field (or leave the array empty) to hide this section.
 *   links      — OPTIONAL { repo, demo } object. Each is a URL string
 *                rendered as a button on the detail page; omit either
 *                key (or the whole object) to hide that button. Useful
 *                for software projects — e.g.
 *                links: { repo: "https://github.com/you/project", demo: "https://your-demo.com" }
 */

const PROJECTS = [
  /* ============================================================
     DESIGN PROJECTS
     Full design > build > test engineering challenges
     (e.g. capstone / senior design, research projects).
     ============================================================ */
  {
    slug: "senior-design",
    category: "design",
    title: "[Senior Design Project Name]",
    summary:
      "[One-line summary for the project card — what the project was, who it was for, and the headline result.]",
    cover: "assets/projects/design/senior-design/cover.jpg",
    gallery: [
      "assets/projects/design/senior-design/gallery/01.jpg",
      "assets/projects/design/senior-design/gallery/02.jpg",
      "assets/projects/design/senior-design/gallery/03.jpg",
    ],
    sections: [
      {
        heading: "Challenge",
        body: "[What problem or design requirement were you given? Who was the customer/sponsor, and what constraints — budget, timeline, specifications — shaped the project?]",
      },
      {
        heading: "Approach",
        body: "[How did you research the problem and generate and evaluate concepts? What tradeoffs led you to the final design direction?]",
      },
      {
        heading: "Build",
        body: "[How did you turn the design into a working prototype? Tools, materials, fabrication methods, and key engineering decisions made along the way.]",
      },
      {
        heading: "Test",
        body: "[How did you validate that the design met its requirements? What did you measure, what equipment/methods did you use, and what did the results show?]",
      },
      {
        heading: "Outcome",
        body: "[What was the final result? What did you learn, and what would you change if you started over?]",
      },
    ],
  },
  {
    slug: "design-project-2",
    category: "design",
    title: "[Design Project 2 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/design/design-project-2/cover.jpg",
    gallery: [
      "assets/projects/design/design-project-2/gallery/01.jpg",
      "assets/projects/design/design-project-2/gallery/02.jpg",
      "assets/projects/design/design-project-2/gallery/03.jpg",
    ],
    sections: [
      { heading: "Challenge", body: "[Describe the problem or requirement.]" },
      { heading: "Approach", body: "[Describe your research and design process.]" },
      { heading: "Build", body: "[Describe how you built/implemented the design.]" },
      { heading: "Test", body: "[Describe how you validated the design.]" },
      { heading: "Outcome", body: "[Describe the result and what you learned.]" },
    ],
  },
  {
    slug: "design-project-3",
    category: "design",
    title: "[Design Project 3 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/design/design-project-3/cover.jpg",
    gallery: [
      "assets/projects/design/design-project-3/gallery/01.jpg",
      "assets/projects/design/design-project-3/gallery/02.jpg",
      "assets/projects/design/design-project-3/gallery/03.jpg",
    ],
    sections: [
      { heading: "Challenge", body: "[Describe the problem or requirement.]" },
      { heading: "Approach", body: "[Describe your research and design process.]" },
      { heading: "Build", body: "[Describe how you built/implemented the design.]" },
      { heading: "Test", body: "[Describe how you validated the design.]" },
      { heading: "Outcome", body: "[Describe the result and what you learned.]" },
    ],
  },
  {
    slug: "design-project-4",
    category: "design",
    title: "[Design Project 4 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/design/design-project-4/cover.jpg",
    gallery: [
      "assets/projects/design/design-project-4/gallery/01.jpg",
      "assets/projects/design/design-project-4/gallery/02.jpg",
      "assets/projects/design/design-project-4/gallery/03.jpg",
    ],
    sections: [
      { heading: "Challenge", body: "[Describe the problem or requirement.]" },
      { heading: "Approach", body: "[Describe your research and design process.]" },
      { heading: "Build", body: "[Describe how you built/implemented the design.]" },
      { heading: "Test", body: "[Describe how you validated the design.]" },
      { heading: "Outcome", body: "[Describe the result and what you learned.]" },
    ],
  },

  /* ============================================================
     SOFTWARE PROJECTS
     Code-focused projects — apps, tools, sites, libraries, etc.
     ============================================================ */
  {
    slug: "software-project-1",
    category: "software",
    title: "[Software Project 1 Name]",
    summary:
      "[One-line summary for the project card — what the project does and why you built it.]",
    cover: "assets/projects/software/software-project-1/cover.jpg",
    gallery: [
      "assets/projects/software/software-project-1/gallery/01.jpg",
      "assets/projects/software/software-project-1/gallery/02.jpg",
      "assets/projects/software/software-project-1/gallery/03.jpg",
    ],
    techStack: ["[Language]", "[Framework]", "[Tool/Library]"],
    links: {
      repo: "https://github.com/[your-username]/[repo-name]",
      demo: "https://[your-demo-url]",
    },
    sections: [
      {
        heading: "Build",
        body: "[What does it do, and how does it work under the hood? Walk through the architecture, key technical decisions, and any interesting problems you solved.]",
      },
      {
        heading: "Result",
        body: "[What's the end result — who uses it, what does it enable, and what did you learn? What would you add or change next?]",
      },
    ],
  },
  {
    slug: "software-project-2",
    category: "software",
    title: "[Software Project 2 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/software/software-project-2/cover.jpg",
    gallery: [
      "assets/projects/software/software-project-2/gallery/01.jpg",
      "assets/projects/software/software-project-2/gallery/02.jpg",
      "assets/projects/software/software-project-2/gallery/03.jpg",
    ],
    techStack: ["[Language]", "[Framework]", "[Tool/Library]"],
    links: {
      repo: "https://github.com/[your-username]/[repo-name]",
      demo: "https://[your-demo-url]",
    },
    sections: [
      { heading: "Build", body: "[Architecture, stack, and key technical decisions.]" },
      { heading: "Result", body: "[The end result, what you learned, what's next.]" },
    ],
  },
  {
    slug: "software-project-3",
    category: "software",
    title: "[Software Project 3 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/software/software-project-3/cover.jpg",
    gallery: [
      "assets/projects/software/software-project-3/gallery/01.jpg",
      "assets/projects/software/software-project-3/gallery/02.jpg",
      "assets/projects/software/software-project-3/gallery/03.jpg",
    ],
    techStack: ["[Language]", "[Framework]", "[Tool/Library]"],
    links: {
      repo: "https://github.com/[your-username]/[repo-name]",
      demo: "https://[your-demo-url]",
    },
    sections: [
      { heading: "Build", body: "[Architecture, stack, and key technical decisions.]" },
      { heading: "Result", body: "[The end result, what you learned, what's next.]" },
    ],
  },
  {
    slug: "software-project-4",
    category: "software",
    title: "[Software Project 4 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/software/software-project-4/cover.jpg",
    gallery: [
      "assets/projects/software/software-project-4/gallery/01.jpg",
      "assets/projects/software/software-project-4/gallery/02.jpg",
      "assets/projects/software/software-project-4/gallery/03.jpg",
    ],
    techStack: ["[Language]", "[Framework]", "[Tool/Library]"],
    links: {
      repo: "https://github.com/[your-username]/[repo-name]",
      demo: "https://[your-demo-url]",
    },
    sections: [
      { heading: "Build", body: "[Architecture, stack, and key technical decisions.]" },
      { heading: "Result", body: "[The end result, what you learned, what's next.]" },
    ],
  },

  /* ============================================================
     MAKER PROJECTS
     Simpler, build-focused projects (e.g. the lathed chess set).
     ============================================================ */
  {
    slug: "chess-set",
    category: "maker",
    title: "[Hand-Lathed Chess Set]",
    summary:
      "[One-line summary for the project card — material, technique, and what makes the piece interesting.]",
    cover: "assets/projects/maker/chess-set/cover.jpg",
    gallery: [
      "assets/projects/maker/chess-set/gallery/01.jpg",
      "assets/projects/maker/chess-set/gallery/02.jpg",
      "assets/projects/maker/chess-set/gallery/03.jpg",
    ],
    sections: [
      {
        heading: "Build",
        body: "[What materials and tools did you use? Walk through the key steps and techniques — e.g. turning, finishing, joinery.]",
      },
      {
        heading: "Result",
        body: "[What's the finished piece like? What did you learn, and what would you try differently next time?]",
      },
    ],
  },
  {
    slug: "maker-project-2",
    category: "maker",
    title: "[Maker Project 2 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/maker/maker-project-2/cover.jpg",
    gallery: [
      "assets/projects/maker/maker-project-2/gallery/01.jpg",
      "assets/projects/maker/maker-project-2/gallery/02.jpg",
      "assets/projects/maker/maker-project-2/gallery/03.jpg",
    ],
    sections: [
      { heading: "Build", body: "[Materials, tools, and techniques used.]" },
      { heading: "Result", body: "[The finished piece, lessons learned, what's next.]" },
    ],
  },
  {
    slug: "maker-project-3",
    category: "maker",
    title: "[Maker Project 3 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/maker/maker-project-3/cover.jpg",
    gallery: [
      "assets/projects/maker/maker-project-3/gallery/01.jpg",
      "assets/projects/maker/maker-project-3/gallery/02.jpg",
      "assets/projects/maker/maker-project-3/gallery/03.jpg",
    ],
    sections: [
      { heading: "Build", body: "[Materials, tools, and techniques used.]" },
      { heading: "Result", body: "[The finished piece, lessons learned, what's next.]" },
    ],
  },
  {
    slug: "maker-project-4",
    category: "maker",
    title: "[Maker Project 4 Name]",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/maker/maker-project-4/cover.jpg",
    gallery: [
      "assets/projects/maker/maker-project-4/gallery/01.jpg",
      "assets/projects/maker/maker-project-4/gallery/02.jpg",
      "assets/projects/maker/maker-project-4/gallery/03.jpg",
    ],
    sections: [
      { heading: "Build", body: "[Materials, tools, and techniques used.]" },
      { heading: "Result", body: "[The finished piece, lessons learned, what's next.]" },
    ],
  },
];
