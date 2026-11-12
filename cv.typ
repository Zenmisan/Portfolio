#show heading: set text(font: "Linux Biolinum", weight: "bold")
#set text(font: "Linux Libertine", size: 9.8pt)
#set page(
  margin: (x: 1.3cm, top: 1.2cm, bottom: 1.2cm),
)

// --- Colors ---
#let primary-color = rgb("#14213D")
#let secondary-color = rgb("#274C92")
#let text-muted = luma(120)

// --- Header ---
#align(center)[
  #text(size: 21pt, weight: "bold", fill: primary-color)[AKIN-DAVID IREYEMI] \
  #text(size: 9.5pt, fill: text-muted)[
    Lagos, Nigeria | #link("mailto:zenmisan@gmail.com")[zenmisan\@gmail.com] | #link("https://github.com/zenmisan")[github.com/zenmisan] | #link("https://linkedin.com/in/zenmisan")[linkedin.com/in/zenmisan] | #link("https://x.com/zenmisan")[x.com/zenmisan]
  ]
]

#v(0.25cm)

// --- Profile ---
#heading(level: 2)[PROFESSIONAL SUMMARY]
#line(length: 100%, stroke: 0.5pt + text-muted)
Self-taught Full-Stack Software Engineer with a primary concentration in backend systems, APIs, and databases, currently studying Industrial Mathematics at the University of Lagos. Passionate about understanding core system internals, writing clean and maintainable code, and applying analytical rigor to software architecture.

#v(0.22cm)

// --- Education ---
#heading(level: 2)[EDUCATION]
#line(length: 100%, stroke: 0.5pt + text-muted)

*B.Sc. Industrial Mathematics* | University of Lagos (UNILAG) #h(1fr) 2024 | 2028 (Expected) \
- *Core Focus:* Applied mathematical logic, statistics, and computational systems analysis.
- *Coursework:* Linear Algebra, Probability & Statistics, Multivariable Calculus, Discrete Mathematics, Differential Equations.

#v(0.22cm)

// --- Skills ---
#heading(level: 2)[TECHNICAL SKILLS]
#line(length: 100%, stroke: 0.5pt + text-muted)
#grid(
  columns: (1fr, 1fr),
  column-gutter: 0.8cm,
  [
    *Languages:* Python, TypeScript, JavaScript, Rust, Go, Kotlin, Swift, C\#, C++, Java, SQL, Solidity \
    *Backend & APIs:* FastAPI, Node.js, Express, PostgreSQL, REST APIs, WebSockets, GraphQL \
    *Frontend & UI:* React, Flutter, Next.js, Vite, QML, Tailwind CSS, HTML5, CSS3
  ],
  [
    *Tools & DevOps:* Docker, Linux, systemd, Git, CI/CD, Bun, Supabase, PowerShell \
    *Analytical & Math:* Industrial Math, Linear Algebra, Statistics, Calculus, NumPy, Pandas, MATLAB, LaTeX
  ]
)

#v(0.22cm)

// --- Projects ---
#heading(level: 2)[PROJECTS]
#line(length: 100%, stroke: 0.5pt + text-muted)

*NetLedger* | Process-Lineage Bandwidth Ledger (Linux & macOS) #h(1fr) 2024 | Present \
- Designed an upward process-lineage network bandwidth monitor for Omarchy Linux (Quickshell QML) & macOS Menu Bar (Swift).
- Built low-overhead daemons (`netledgerd` on systemd & `macnetledgerd` on launchd) recording atomic packet deltas to SQLite in WAL mode.
- Engineered dual-tier time-series rollups (5-min & 1-hour) and macOS cellular hotspot tracking resilient to lid sleep.
- *Tech Stack:* Python, Swift, QML, SQLite, systemd, launchd, Linux, macOS. #link("https://github.com/Zenmisan/NetLedger")[github.com/Zenmisan/NetLedger] | #link("https://github.com/Zenmisan/MacNetLedger")[github.com/Zenmisan/MacNetLedger]

#v(0.18cm)

*Cycles* | Offline-First P2P Task Sync Platform #h(1fr) 2024 | Present \
- Engineered an offline-first task manager synchronizing across devices with zero server, cloud, or account dependency.
- Implemented a 4-tier proximity transport hierarchy utilizing Wi-Fi Direct, local LAN mDNS, and BLE GATT framing.
- Deterministically resolved concurrent multi-device state using Automerge CRDTs paired with reactive SQLite storage.
- *Tech Stack:* Flutter, Rust, Go, Automerge CRDT, SQLite, BLE, Wi-Fi Direct. #link("https://z-cycles.web.app")[z-cycles.web.app] | #link("https://github.com/Zenmisan/Cycle")[github.com/Zenmisan/Cycle]

#v(0.18cm)

*manga-dl* | Multi-Platform Reading Ecosystem #h(1fr) 2024 | Present \
- Architected reading ecosystem spanning Web PWA, native Android (Kotlin/Compose), and Windows (WinUI 3/C\# + C++20).
- Engineered a Tachiyomi-compatible extension engine with 500+ sources, 4 reading modes, and WebSocket download queue.
- Deployed FastAPI backend for scraping proxies and Supabase for cross-device library and reading progress synchronization.
- *Tech Stack:* React, TypeScript, Kotlin, C\#, C++20, Python, FastAPI, Supabase, SQLite. #link("https://manga-dl.web.app")[manga-dl.web.app] | #link("https://github.com/Zenmisan/manga-dl")[github.com/Zenmisan/manga-dl]

#v(0.18cm)

*Stytch* | WhatsApp Automation Bot & Developer Dashboard #h(1fr) 2024 | Present \
- Built an event-driven WhatsApp bot and developer dashboard using TypeScript and Bun over the Baileys protocol.
- Developed real-time WebSocket log streaming, QR pairing interface, and dynamic SQLite-backed command management.
- *Tech Stack:* TypeScript, Bun, React, WebSocket, Baileys, SQLite, Docker, Tailwind CSS. #link("https://stytch.web.app")[stytch.web.app] | #link("https://github.com/Zenmisan/stytch")[github.com/Zenmisan/stytch]
