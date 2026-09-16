#show heading: set text(font: "Linux Biolinum", weight: "bold")
#set text(font: "Linux Libertine", size: 10.5pt)
#set page(
  margin: (x: 1.5cm, y: 1.5cm),
)

// --- Colors ---
#let primary-color = rgb("#14213D")
#let secondary-color = rgb("#274C92")
#let text-muted = luma(120)

// --- Header ---
#align(center)[
  #text(size: 22pt, weight: "bold", fill: primary-color)[AKIN-DAVID IREYEMI] \
  #text(size: 10pt, fill: text-muted)[
    Lagos, Nigeria | #link("mailto:zenmisan@gmail.com")[zenmisan\@gmail.com] | #link("https://github.com/zenmisan")[github.com/zenmisan] | #link("https://linkedin.com/in/zenmisan")[linkedin.com/in/zenmisan] | #link("https://x.com/zenmisan")[x.com/zenmisan]
  ]
]

#v(0.4cm)

// --- Profile ---
#heading(level: 2)[PROFESSIONAL SUMMARY]
#line(length: 100%, stroke: 0.5pt + text-muted)
Self-taught Full-Stack Software Engineer with a primary concentration in backend systems, APIs, and databases, currently studying Industrial Mathematics at the University of Lagos. Passionate about understanding core system internals, writing clean and maintainable code, and applying analytical rigor to software architecture.

#v(0.3cm)

// --- Education ---
#heading(level: 2)[EDUCATION]
#line(length: 100%, stroke: 0.5pt + text-muted)

*B.Sc. Industrial Mathematics* | University of Lagos (UNILAG) #h(1fr) 2024 | 2028 (Expected) \
- *Core Focus:* Applied mathematical logic, statistics, and computational systems analysis.
- *Coursework:* Linear Algebra, Probability & Statistics, Multivariable Calculus, Discrete Mathematics, Differential Equations.

#v(0.3cm)

// --- Skills ---
#heading(level: 2)[TECHNICAL SKILLS]
#line(length: 100%, stroke: 0.5pt + text-muted)
#grid(
  columns: (1fr, 1fr),
  column-gutter: 1cm,
  [
    *Languages:* Python, TypeScript, JavaScript, Rust, C++, Java, SQL, Solidity \
    *Backend & APIs:* FastAPI, Node.js, Express, PostgreSQL, REST APIs, WebSockets, GraphQL \
    *Frontend:* React, Next.js, Vite, Tailwind CSS, HTML5, CSS3
  ],
  [
    *Tools & DevOps:* Docker, Linux, Git, CI/CD, Bun, PowerShell \
    *Analytical & Math:* Industrial Math, Linear Algebra, Statistics, Calculus, NumPy, Pandas, MATLAB, LaTeX
  ]
)

#v(0.3cm)

// --- Projects ---
#heading(level: 2)[PROJECTS]
#line(length: 100%, stroke: 0.5pt + text-muted)

*manga-dl* | Web Application & Media Platform #h(1fr) 2024 | Present \
- Developed an automated scraping and chapter delivery engine with rate-limiting and error handling.
- Built a responsive client-side web interface optimized for seamless mobile and desktop reading.
- Integrated with Firebase for reliable hosting and deployment.
- *Tech Stack:* Python, TypeScript, React, Firebase, Tailwind CSS. #link("https://manga-dl.web.app")[manga-dl.web.app] | #link("https://github.com/zenmisan/manga-dl")[github.com/zenmisan/manga-dl]
