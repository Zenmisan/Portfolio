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
    *Languages:* Python, TypeScript, JavaScript, Rust, Go, Kotlin, C\#, C++, Java, SQL, Solidity \
    *Backend & APIs:* FastAPI, Node.js, Express, PostgreSQL, REST APIs, WebSockets, GraphQL \
    *Frontend & Mobile:* React, Flutter, Next.js, Vite, Tailwind CSS, HTML5, CSS3
  ],
  [
    *Tools & DevOps:* Docker, Linux, Git, CI/CD, Bun, Supabase, PowerShell \
    *Analytical & Math:* Industrial Math, Linear Algebra, Statistics, Calculus, NumPy, Pandas, MATLAB, LaTeX
  ]
)

#v(0.3cm)

// --- Projects ---
#heading(level: 2)[PROJECTS]
#line(length: 100%, stroke: 0.5pt + text-muted)

*Cycles* | Offline-First P2P Task Sync Platform #h(1fr) 2024 | Present \
- Engineered an offline-first task manager synchronizing across devices with zero server, cloud, or account dependency.
- Implemented a 4-tier proximity transport hierarchy utilizing Wi-Fi Direct, local LAN mDNS, and BLE GATT framing.
- Deterministically resolved concurrent multi-device state using Automerge CRDTs paired with reactive SQLite storage.
- *Tech Stack:* Flutter, Rust, Go, Automerge CRDT, SQLite, BLE, Wi-Fi Direct. #link("https://z-cycles.web.app")[z-cycles.web.app] | #link("https://github.com/Zenmisan/Cycle")[github.com/Zenmisan/Cycle]

#v(0.2cm)

*manga-dl* | Multi-Platform Reading Ecosystem #h(1fr) 2024 | Present \
- Architected reading ecosystem spanning Web PWA, native Android (Kotlin/Compose), and Windows (WinUI 3/C\# + C++20).
- Engineered a Tachiyomi-compatible extension engine with 500+ sources, 4 reading modes, and WebSocket download queue.
- Deployed FastAPI backend for scraping proxies and Supabase for cross-device library and reading progress synchronization.
- *Tech Stack:* React, TypeScript, Kotlin, C\#, C++20, Python, FastAPI, Supabase, SQLite. #link("https://manga-dl.web.app")[manga-dl.web.app] | #link("https://github.com/Zenmisan/manga-dl")[github.com/Zenmisan/manga-dl]

#v(0.2cm)

*Stytch* | WhatsApp Automation Bot & Developer Dashboard #h(1fr) 2024 | Present \
- Built an event-driven WhatsApp bot and developer dashboard using TypeScript and Bun over the Baileys protocol.
- Developed real-time WebSocket log streaming, QR pairing interface, and dynamic SQLite-backed command management.
- *Tech Stack:* TypeScript, Bun, React, WebSocket, Baileys, SQLite, Docker, Tailwind CSS. #link("https://stytch.web.app")[stytch.web.app] | #link("https://github.com/Zenmisan/stytch")[github.com/Zenmisan/stytch]
