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
    title: "Vanderbilt Capstone - Nissan Speaker Installation",
    summary:
      "Designed, built, and tested a cobot cell and end-effector, automating speaker installation in Pathfinder doors.",
    cover: "assets/projects/design/senior-design/cover.jpg",
    gallery: [
      "assets/projects/design/senior-design/gallery/Clamp_actuates.mp4",
      "assets/projects/design/senior-design/gallery/Nutdriver_depress.mp4",
      "assets/projects/design/senior-design/gallery/Nutdrivers_engage.mp4",
      "assets/projects/design/senior-design/gallery/electronics.jpg",
    ],
    sections: [
      {
        heading: "Challenge",
        body: "Nissan sponsored my team of five to design and prototype a method for installing speakers into Pathfinder doors, achieving finger-tightness within a 40s cycle-time.",
      },
      {
        heading: "Approach",
        body: "Design featured a CAM-follower clamping mechanism and three parallel spring-loaded nut-drivers, assembled onto a frame/base attached to a UR10e cobot.",
      },
      {
        heading: "Build",
        body: "Early builds featured laser-cut and 3D-printed proof-of-concepts, leading to a final machined-aluminum end-effector",
      },
      {
        heading: "Test",
        body: "Testing consisted of ANSYS structural validation, timing of cycles, and estimating gripper coefficients of friction/effectiveness.",
      },
      {
        heading: "Outcome",
        body: "Met and exceeded all cycle-time, payload weight, and ROI requirements.",
      },
    ],
  },
  {
    slug: "pc-case",
    category: "design",
    title: "PC Case",
    summary: "My Optiplex PC case neither fit nor looked the new RTX 3060 12G GPU I got for local AI acceleration, so an upgrade was in order.",
    cover: "assets/projects/design/pc-case/cover.jpeg",
    gallery: [
      "assets/projects/design/pc-case/gallery/0_NeedNewCase.JPEG",
      "assets/projects/design/pc-case/gallery/1_FramePieces.JPEG",
      "assets/projects/design/pc-case/gallery/2_PlasmaCutBase.JPEG",
      "assets/projects/design/pc-case/gallery/3_WeldBrace.JPEG",
      "assets/projects/design/pc-case/gallery/4_LaserCutPanels.JPEG",
      "assets/projects/design/pc-case/gallery/5_MillMoboBrackets.JPEG",
      "assets/projects/design/pc-case/gallery/6_HangMobo.JPEG",
      "assets/projects/design/pc-case/gallery/7_LatheStandoffs.JPEG",
      "assets/projects/design/pc-case/gallery/8_Detailing.JPEG",
      "assets/projects/design/pc-case/gallery/9_Assemble.JPEG",
      "assets/projects/design/pc-case/gallery/10_Finish.JPEG",
      "assets/projects/design/pc-case/gallery/11_PowerOn.JPEG",
      "assets/projects/design/pc-case/gallery/12_Old-vs-New.JPEG",
      "assets/projects/design/pc-case/gallery/13_CoverPhoto.JPEG",
    ],
    sections: [
      { heading: "Challenge", body: "Create a stylized, but sturdy and well-ventilated, case to house my PC and upgraded components." },
      { heading: "Approach", body: "Designed in SolidWorks for ease of assembly (no fasteners outside of base for frame), plentiful airflow (FLUENT validation), efficient load transfer (ANSYS study), and - of course - style (cherry featured most prominently)." },
      { heading: "Build", body: "Built with Dynatorch CNC plasma cutter, Boss laser cutter, Bridgeport mill, Whacheon lathe, Lincoln MIG welder, and Powermatic table saw." },
      { heading: "Test", body: "Tested with HFS calipers, my trusty multimeter, and a healthy amount of sudo dmesg and update grub." },
      { heading: "Outcome", body: "Learned how to use ANSYS Fluent/Workbench for quick validation in an end-to-end project" },
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
