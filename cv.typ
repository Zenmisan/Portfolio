#show heading: set text(font: "Linux Biolinum", weight: "bold")
#set text(font: "Linux Libertine", size: 10pt)
#set page(
  margin: (x: 1.5cm, y: 1.5cm),
)

// --- Colors ---
#let primary-color = rgb("#14213D")
#let secondary-color = rgb("#274C92")

// --- Header ---
#align(center)[
  #text(size: 24pt, weight: "bold", fill: primary-color)[AKIN-DAVID IREYEMI] \
  #text(size: 10pt, fill: gray)[
    Lagos, Nigeria | #link("mailto:Zenmisan@gmail.com")[Zenmisan\@gmail.com] | #link("https://github.com/zenmisan")[github.com/zenmisan] | #link("https://linkedin.com/in/zenmisan")[linkedin.com/in/zenmisan]
  ]
]

#v(0.5cm)

// --- Profile ---
#heading(level: 2)[PROFESSIONAL PROFILE]
#line(length: 100%, stroke: 0.5pt + gray)
Analytical Fullstack Engineer and Industrial Mathematics student at the University of Lagos. Specialist in building deterministic, fault-tolerant systems for high-stakes environments including FinTech and Web3. Passionate about bridging mathematical logic with scalable software architecture to eliminate system failures by design.

#v(0.3cm)

// --- Skills ---
#heading(level: 2)[TECHNICAL MASTERY]
#line(length: 100%, stroke: 0.5pt + gray)
#grid(
  columns: (1fr, 1fr),
  column-gap: 1cm,
  [
    *Languages:* TypeScript, JavaScript, Python, Rust, Solidity \
    *Frontend:* React.js, Next.js, Tailwind CSS, Framer Motion \
    *Backend:* Node.js, Express, FastAPI, PostgreSQL
  ],
  [
    *Specializations:* Web3 Development, Smart Contracts, DeFi \
    *Tools:* Bun Runtime, Git, Docker, Vite, Vercel \
    *Analytical:* Industrial Math, Statistics, Linear Algebra
  ]
)

#v(0.3cm)

// --- Experience ---
#heading(level: 2)[PROFESSIONAL EXPERIENCE]
#line(length: 100%, stroke: 0.5pt + gray)

*Founder & Creative Director* | Zenmi #h(1fr) 2023 -- Present \
- Directed brand identity and technical strategy for diverse client portfolios.
- Engineered custom high-performance web applications using modern React/Node stacks.
- Optimized client user interfaces for maximum engagement and load-time efficiency.

*Fullstack Engineering Journey* | Self-Directed #h(1fr) 2023 -- Present \
- Designed and deployed over 10 projects focusing on scalable architectures.
- Developed an interactive Portfolio with dual-theme switching and complex animations.
- Built multiple decentralized applications (dApps) exploring DeFi protocols.

#v(0.3cm)

// --- Education ---
#heading(level: 2)[EDUCATION]
#line(length: 100%, stroke: 0.5pt + gray)

*B.Sc. Industrial Mathematics* | University of Lagos (UNILAG) #h(1fr) 2024 -- 2028 \
- *Core Focus:* Application of mathematical principles to industrial and financial systems.
- *Coursework:* Statistics, Linear Algebra, Multivariable Calculus, Discrete Mathematics.

#v(0.3cm)

// --- Projects ---
#heading(level: 2)[SELECTED PROJECTS]
#line(length: 100%, stroke: 0.5pt + gray)

*Brazilian Retail Intelligence System (BRIS)* \
- Developed a high-performance analytics dashboard for revenue and logistics visualization.
- Integrated interactive PlotlyJS charts for real-time business intelligence data.

*DataVault* \
- Engineered an enterprise-grade secure storage solution with device-bound passkeys.
- Implemented zero-knowledge AES-256-GCM encryption for client-side data protection.

*Thetans Peer Group System* \
- Designed a peer-to-peer allocation system for academic group registration.
- Focused on high-concurrency handling for student verification and assignment.

#v(0.3cm)

// --- Philosophy ---
#heading(level: 2)[ENGINEERING PHILOSOPHY]
#line(length: 100%, stroke: 0.5pt + gray)
"I view every bug as a failure in architecture. My goal is to move precisely and build things that last, ensuring 99.9% reliability through preventative logic rather than reactive patching."
