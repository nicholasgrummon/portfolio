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
    slug: "pc-case",
    category: "design",
    title: "PC Case",
    summary: "My Optiplex PC case neither fit nor looked the new RTX 3060 12G GPU I got for local AI acceleration, so an upgrade was in order.",
    cover: "assets/projects/design/pc-case/cover.jpeg",
    gallery: [
      "assets/projects/design/pc-case/gallery/Struct_Results.png",
      "assets/projects/design/pc-case/gallery/Fluent_Results.png",
      "assets/projects/design/pc-case/gallery/CAD.png",
      "assets/projects/design/pc-case/gallery/Struct_mesh.png",
      "assets/projects/design/pc-case/gallery/Fluent_setup.png",
      "assets/projects/design/pc-case/gallery/0_NeedNewCase.JPEG",
      "assets/projects/design/pc-case/gallery/1_FramePieces.JPEG",
      "assets/projects/design/pc-case/gallery/2_PlasmaCutBase.JPEG",
      "assets/projects/design/pc-case/gallery/3_WeldBrace.JPEG",
      "assets/projects/design/pc-case/gallery/4_LaserCutPanels.JPEG",
      "assets/projects/design/pc-case/gallery/5_MillMoboBracket.JPEG",
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
    slug: "frc10257",
    category: "design",
    title: "Mentoring FRC Team 10257",
    summary: "Mentored drivebase and bumper fabrication for FRC Team 10257, sharing experience from FRC Worlds 2018.",
    cover: "assets/projects/design/frc10257/cover.JPEG",
    gallery: [
      "assets/projects/design/frc10257/gallery/Cinematic_1.JPEG",
      "assets/projects/design/frc10257/gallery/Match.jpeg",
      "assets/projects/design/frc10257/gallery/Demo.mp4",
      "assets/projects/design/frc10257/gallery/Competition.jpeg",
    ],
    sections: [
      { heading: "Challenge", body: "FRC Rebuilt 2026 Season: Deliver fuel to an elevated hub while navigating field obstacles including a trench and bump." },
      { heading: "Approach", body: "Facilitated student communication and problem solving within CAD and fabrication tasks, to enable a cohesive team experience." },
      { heading: "Build", body: "Provided guidance and feedback on fabrication best-practices in constructing the frame and bumper for the team's robot." },
      { heading: "Test", body: "Led collection of scouting data on opposing teams to provide insights and feedback to the drive team in handling the robot." },
      { heading: "Outcome", body: "Awarded an FRC Regional Creativity plaque for our bumpers, and named a Rising All-Star Team." },
    ],
  },
  {
    slug: "senior-design",
    category: "design",
    title: "Vanderbilt Capstone - Nissan Speaker Installation",
    summary: "Designed, built, and tested a cobot cell and end-effector, automating speaker installation in Pathfinder doors.",
    cover: "assets/projects/design/senior-design/cover.jpg",
    gallery: [
      "assets/projects/design/senior-design/gallery/Full_Cycles.mp4",
      "assets/projects/design/senior-design/gallery/render.png",
      "assets/projects/design/senior-design/gallery/clamp.png",
      "assets/projects/design/senior-design/gallery/Clamp_actuates.mp4",
      "assets/projects/design/senior-design/gallery/Nutdriver_depress.mp4",
      "assets/projects/design/senior-design/gallery/Nutdrivers_engage.mp4",
      "assets/projects/design/senior-design/gallery/electronics.png",
      "assets/projects/design/senior-design/gallery/electronics_assembly.jpg",
      "assets/projects/design/senior-design/gallery/FEA_clamp.png",
      "assets/projects/design/senior-design/gallery/FEA_nutdriver.png",
      "assets/projects/design/senior-design/gallery/cad.png",
    ],
    sections: [
      { heading: "Challenge", body: "Nissan sponsored my team of five to design and prototype a method for installing speakers into Pathfinder doors, achieving finger-tightness within a 40s cycle-time." },
      { heading: "Approach", body: "Design featured a CAM-follower clamping mechanism and three parallel spring-loaded nut-drivers, assembled onto a frame/base attached to a UR10e cobot." },
      { heading: "Build", body: "Early builds featured laser-cut and 3D-printed proof-of-concepts, leading to a final machined-aluminum end-effector" },
      { heading: "Test", body: "Testing consisted of ANSYS structural validation, timing of cycles, and estimating gripper coefficients of friction/effectiveness." },
      { heading: "Outcome", body: "Met and exceeded all cycle-time, payload weight, and ROI requirements." },
    ],
  },
  {
    slug: "t8bb",
    category: "design",
    title: "The Eight Bit Build",
    summary: "Implemented a self-designed machine language and eight bit architecture using logic gates and breadboards.",
    cover: "assets/projects/design/t8bb/cover.JPEG",
    gallery: [
      "assets/projects/design/t8bb/gallery/Cinematic_2.JPEG",
      "assets/projects/design/t8bb/gallery/Cinematic_1.JPEG",
      "assets/projects/design/t8bb/gallery/Demo_Video.MP4",
      "assets/projects/design/t8bb/gallery/Registers_Lit.JPEG",
      "assets/projects/design/t8bb/gallery/controller_logic.png",
    ],
    sections: [
      { heading: "Challenge", body: "After taking Vanderbilt's Digital Systems course I was inspired to build my own CPU." },
      { heading: "Approach", body: "Applied knowledge from classwork to design eight bit architecture and controller logic featuring linking, branching, flags, and more." },
      { heading: "Build", body: "Ordered ICs and necessary components and assembled by individual processor segment." },
      { heading: "Test", body: "Solved floating voltage issues with tie-down resistors and chatter in button presses with schmitt triggers" },
      { heading: "Outcome", body: "Successfully demonstrated computational completeness with adding program, multiplication program, and many others." },
    ],
  },
  {
    slug: "mech-chess",
    category: "design",
    title: "Self-Moving Chess Board",
    summary: "Entered a self-moving chess board into Vanderbilt's Mechatronics Design Faire",
    cover: "assets/projects/design/mech-chess/cover.JPEG",
    gallery: [
      "assets/projects/design/mech-chess/gallery/Playing_Moves.mp4",
      "assets/projects/design/mech-chess/gallery/motors.JPEG",
      "assets/projects/design/mech-chess/gallery/interface.JPEG",
      "assets/projects/design/mech-chess/gallery/Design_Day.JPEG",
    ],
    sections: [
      { heading: "Challenge", body: "Create a functionally significant mechatronic system with at least one microcontroller and one actuator." },
      { heading: "Approach", body: "Researched table-actuators (i.e. CNC), and designed belt driven layout with stepper motors to move electromagnet." },
      { heading: "Build", body: "Used 3D-printed components and hand tools to assemble frame. Acquired magnetic chess set." },
      { heading: "Test", body: "Validated by playing a variety of moves and captures via the Stockfish game engine." },
      { heading: "Outcome", body: "Earned a top-score of five in Vanderbilt's Mechatronic Faire." },
    ],
  },

  /* ============================================================
     SOFTWARE PROJECTS
     Code-focused projects — apps, tools, sites, libraries, etc.
     ============================================================ */
  {
    slug: "ai-anatomy",
    category: "software",
    title: "AI Anatomy",
    summary: "Recreated foundational AI architecture components - including a neural network, a transformer, and a minimal LLM (TODO) - all without ML libraries.",
    cover: "assets/projects/software/ai-anatomy/cover.png",
    gallery: [
      "assets/projects/software/ai-anatomy/gallery/nnn.png",
      "assets/projects/software/ai-anatomy/gallery/back_propagation.png",
      "assets/projects/software/ai-anatomy/gallery/nnn_ANDfunc.png",
      "assets/projects/software/ai-anatomy/gallery/transformer.png",
      "assets/projects/software/ai-anatomy/gallery/transformer_outs.png",
    ],
    techStack: ["Python", "Object-Oriented", "Numpy"],
    links: {
      repo: [ "https://github.com/nicholasgrummon/Arbitrary-Neural-Network", "https://github.com/nicholasgrummon/Transformer" ],
      demo: "todo",
    },
    sections: [
      { heading: "Build", body: "Solved back-propagation equations for training an arbitrary dimensional neural network, leveraged Claude Code to write class structure for a transformer model based on the paper 'Attention is All You Need' (2017), and modified Karpathy's 'minimal LLM' to remove ML dependencies." },
      { heading: "Result", body: "Completed all necessary building blocks composing a modern LLM stack." },
    ],
  },
  {
    slug: "michelle",
    category: "software",
    title: "Agentic Chat/Voice Assistant",
    summary: "Built-out a custom agent harness featuring voice and listening capabilities. Attached a discord bot separately to enable remote terminal access while away from home.",
    cover: "assets/projects/software/michelle/cover.png",
    gallery: [
      "assets/projects/software/michelle/cover.png",
      "assets/projects/software/michelle/gallery/data_transfer.png",
      "assets/projects/software/michelle/gallery/chess_chat.png",
    ],
    techStack: ["Python", "Ollama Harness", "llama3.1:8b, qwen3:14b"],
    links: {
      repo: [ "https://github.com/nicholasgrummon/Michelle", "https://github.com/nicholasgrummon/Discord-Remote-Terminal" ],
      demo: "todo",
    },
    sections: [
      { heading: "Build", body: "Wrapper class for local Ollama models that enables persistent memory, tool access, speaker/microphone access, and context-triggered agent skills." },
      { heading: "Result", body: "A virtual assistant that can respond to verbal and written prompts with real impression in the real world." },
    ],
  },
  {
    slug: "ktybx",
    category: "software",
    title: "KTYBX No-Dependency Chess Engine",
    summary: "Programmed a negamax chess engine in C++ with no external libraries. Developed an applet for the program that plays with a bot account on Lichess.",
    cover: "assets/projects/software/ktybx/cover.png",
    gallery: [
      "assets/projects/software/ktybx/cover.png",
      "assets/projects/software/ktybx/gallery/bot_account.png",
    ],
    techStack: ["C++", "Negamax", "None"],
    links: {
      repo: "https://github.com/nicholasgrummon/KTYBX-Chess-Engine",
      demo: "todo",
    },
    sections: [
      { heading: "Build", body: "Built core negamax algorithm using bitboard representation with additional alpha-beta pruning, iterative deepening, heuristic move ordering, hasing, and many other optimization. Also built-out a terminal-style interface to play with the engine and later a Licess bot interface." },
      { heading: "Result", body: "A strong (1300+ ELO) chess engine using no algorithmic or representational dependencies that improved my own chess to the next level." },
    ],
  },
  {
    slug: "nodal-morphing",
    category: "software",
    title: "Nodal Morphing Tool",
    summary: "Built a matrix solver for morphing node clouds in 3D space, with applications across many FEA and modeling use-cases",
    cover: "assets/projects/software/nodal-morphing/cover.png",
    gallery: [
      "assets/projects/software/nodal-morphing/gallery/initial.jpeg",
      "assets/projects/software/nodal-morphing/gallery/manipulate_datums.png",
      "assets/projects/software/nodal-morphing/gallery/result.png",
    ],
    techStack: ["Python", "ANSYS dat", "Numpy"],
    links: {
      repo: "https://github.com/nicholasgrummon/Nodal-Morphing",
      demo: "todo",
    },
    sections: [
      { heading: "Build", body: "Implemented weighted tri-linear interpolation to morph nodes based on updated datum locations, using ANSYS dat file format." },
      { heading: "Result", body: "Given an input mesh and update locations of specified datums, the script generates a morphed body mesh." },
    ],
  },

  /* ============================================================
     MAKER PROJECTS
     Simpler, build-focused projects (e.g. the lathed chess set).
     ============================================================ */
  {
    slug: "watch-turner",
    category: "maker",
    title: "Watch Turner",
    summary: "[One-line summary for the project card.]",
    cover: "assets/projects/maker/watch-turner/cover.JPEG",
    gallery: [
      "assets/projects/maker/watch-turner/gallery/01.jpg",
      "assets/projects/maker/watch-turner/gallery/02.jpg",
      "assets/projects/maker/watch-turner/gallery/03.jpg",
    ],
    sections: [
      { heading: "Build", body: "[Materials, tools, and techniques used.]" },
      { heading: "Result", body: "[The finished piece, lessons learned, what's next.]" },
    ],
  },
  {
    slug: "compact-tension-specimen",
    category: "maker",
    title: "Compact Tension Specimen",
    summary: "End-milled a compact tension specimen based on ASTM standards and performed complementary ANSYS analysis",
    cover: "assets/projects/maker/compact-tension-specimen/cover.JPEG",
    gallery: [
      "assets/projects/maker/compact-tension-specimen/gallery/Step1.JPEG",
      "assets/projects/maker/compact-tension-specimen/gallery/Step2.JPEG",
      "assets/projects/maker/compact-tension-specimen/gallery/fea.png",
    ],
    sections: [
      { heading: "Build", body: "[Materials, tools, and techniques used.]" },
      { heading: "Result", body: "A touching desk ornament for my role as a fracture mechanics engineer." },
    ],
  },
  {
    slug: "chess-set",
    category: "maker",
    title: "Hand-Crafted Chess Set",
    summary: "Turned a chess set and board in memory of Daniel Naroditsky.",
    cover: "assets/projects/maker/chess-set/cover.JPEG",
    gallery: [
      "assets/projects/maker/chess-set/gallery/Finished1.JPEG",
      "assets/projects/maker/chess-set/gallery/Step1.JPEG",
      "assets/projects/maker/chess-set/gallery/Step2.JPEG",
      "assets/projects/maker/chess-set/gallery/Step3.JPEG",
      "assets/projects/maker/chess-set/gallery/Step4.JPEG",
      "assets/projects/maker/chess-set/gallery/Step5.JPEG",
      "assets/projects/maker/chess-set/gallery/Step6.JPEG",
      "assets/projects/maker/chess-set/gallery/Step7.JPEG",
      "assets/projects/maker/chess-set/gallery/Step8.JPEG",
      "assets/projects/maker/chess-set/gallery/Step9.JPEG",
      "assets/projects/maker/chess-set/gallery/Step10.JPEG",
      "assets/projects/maker/chess-set/gallery/Step11.JPEG",
      "assets/projects/maker/chess-set/gallery/Finished2.JPEG",
    ],
    sections: [
      { heading: "Build", body: "Turned cedar (dark) and maple (light) pieces using a wood lathe. Set the board using epoxy-resin, and cut memorandum-engraving with laser cutter." },
      { heading: "Result", body: "Now I have a proud coffee-table conversation piece that I bring to tournaments and game nights alike." },
    ],
  },
  {
    slug: "baba-yaga",
    category: "maker",
    title: "Baba Yaga Sculpture",
    summary: "Designed a 16ft festive Baba Yaga art installation with a team of six entirely out of compostable materials.",
    cover: "assets/projects/maker/baba-yaga/cover.JPEG",
    gallery: [
      "assets/projects/maker/baba-yaga/gallery/build1.JPEG",
      "assets/projects/maker/baba-yaga/gallery/build2.JPEG",
      "assets/projects/maker/baba-yaga/gallery/build3.JPEG",
      "assets/projects/maker/baba-yaga/gallery/demo1.JPEG",
      "assets/projects/maker/baba-yaga/gallery/demo2.JPG",
    ],
    sections: [
      { heading: "Build", body: "Designed detachable structural legs - implemented via a 4x4 dovetail joint." },
      { heading: "Result", body: "Showcased piece at numerous art festivals and featured in Makerfaire global newsletter." },
    ],
  },
  {
    slug: "bookends",
    category: "maker",
    title: "Bookends",
    summary: "Welded together plasma-cut steel pieces to make bookends.",
    cover: "assets/projects/maker/bookends/cover.JPEG",
    gallery: [
      "assets/projects/maker/bookends/gallery/cutting.JPEG",
      "assets/projects/maker/bookends/gallery/post_cut.JPEG",
      "assets/projects/maker/bookends/gallery/sandblasting.JPEG",
    ],
    sections: [
      { heading: "Build", body: "Plasma cut 22ga plain steel using a Dynatorch CNC machine, then MIG welded piece together and sandblasted to finish." },
      { heading: "Result", body: "Custom bookends to keep my library organized." },
    ],
  },
  {
    slug: "coat-hangar",
    category: "maker",
    title: "Chess Themed Wall Hangar",
    summary: "Made the viral chess coat hangar as a gift for a friend.",
    cover: "assets/projects/maker/coat-hangar/cover.JPEG",
    gallery: [
      "assets/projects/maker/coat-hangar/gallery/Pieces.JPEG",
      "assets/projects/maker/coat-hangar/gallery/Layout.JPEG",
      "assets/projects/maker/coat-hangar/gallery/Finished.JPEG",
    ],
    sections: [
      { heading: "Build", body: "Turned miniature chess pieces on a wood lathe, and attached them on a painted board." },
      { heading: "Result", body: "Decorative wall hangar that holds sentimental value for a friend." },
    ],
  },
  {
    slug: "rocket-stove",
    category: "maker",
    title: "Welded Rocket Stove",
    summary: "Used a MIG Welder to assemble components for a rocket stove.",
    cover: "assets/projects/maker/rocket-stove/cover.JPEG",
    gallery: [
      "assets/projects/maker/rocket-stove/cover.JPEG",
      "assets/projects/maker/rocket-stove/gallery/close-up.JPEG",
      "assets/projects/maker/rocket-stove/gallery/helmet.JPEG",
    ],
    sections: [
      { heading: "Build", body: "Learned proper techniques for spacing, speed, voltage, grounding, etc for using a MIG welder." },
      { heading: "Result", body: "A robust steel-channel stove/oven for campy cooking." },
    ],
  },
  {
    slug: "manual-transmission",
    category: "maker",
    title: "3D-Printed Manual Transmission",
    summary: "Designed and printed a demo five-speed manual transmission.",
    cover: "assets/projects/maker/manual-transmission/cover.JPEG",
    gallery: [
      "assets/projects/maker/manual-transmission/gallery/cad.JPEG",
      "assets/projects/maker/manual-transmission/gallery/stack.JPEG",
      "assets/projects/maker/manual-transmission/gallery/assembly.JPEG",
      "assets/projects/maker/manual-transmission/gallery/assembly1.JPEG",
    ],
    sections: [
      { heading: "Build", body: "Used a Creality Ender 3 Pro to fabricate 25+ parts." },
      { heading: "Result", body: "A fun desk desk ornament with six shiftable gears (including reverse)." },
    ],
  },
];
