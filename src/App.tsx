const projects = [
  {
    index: '01',
    title: 'Lungisa',
    status: null,
    summary:
      'A property maintenance app for a landlord, the tenants in those flats, and the tradespeople who fix the problems. A tenant reports an issue with a photo. The landlord assigns the matching trade. The provider says they are on the way, then finishes the job with a proof photo.',
    highlights: [
      'Nobody signs themselves up. The landlord invites each tenant to a flat and each provider to a trade, and each person lands on their own screen.',
      'A tenant can send a finished job back with a short "Not fixed" note. The landlord can mark a job urgent, and can edit or remove a person so the next tenant can take that flat.',
      'Privacy is enforced in Postgres with Row Level Security and triggers. A security-check script tests that blocked reads and writes stay blocked. The live app has no public sign-up; the GitHub README explains how to try all three roles locally.',
    ],
    stack: ['React', 'Supabase', 'PostgreSQL', 'TanStack Query', 'Vite'],
    live: 'https://lungisa-nine.vercel.app',
    repo: 'https://github.com/Ndabenhle-Mthonti/Lungisa',
  },
  {
    index: '02',
    title: 'Optometry EMR',
    status: null,
    summary:
      'I built this for an optometry practice that was still keeping patient files on paper. Staff had no reliable way to see who last opened or changed a record, so I replaced the paper process with a digital one.',
    highlights: [
      'Staff log in with JWT auth. There are three roles — admin, optometrist, and receptionist — and the permissions are enforced on the API, not just hidden in the UI.',
      'Every view, create, edit, delete, and restore is written to an audit trail. Deletes are soft, so the history stays intact.',
      'I wrote tests with Jest and Supertest for login and permission checks, and they run on every push through GitHub Actions.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Jest', 'GitHub Actions'],
    live: 'https://optometry-emr.vercel.app',
    repo: 'https://github.com/Ndabenhle-Mthonti/Optometry-EMR',
  },
  {
    index: '03',
    title: 'Airbnb clone',
    status: null,
    summary:
      'A booking platform with a South African theme. I wanted to work through a full listing and reservation flow, from search to a confirmed booking.',
    highlights: [
      'Property listings, city filters, host listing management, and an admin dashboard.',
      'A multi-step form for creating a listing, including photo uploads, and a cost calculator in the booking flow.',
      'The backend is split into routes, controllers, models, and middleware. It is live on Vercel.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer'],
    live: 'https://air-bn-b-clone-sage.vercel.app',
    repo: 'https://github.com/Ndabenhle-Mthonti/AirBnB-clone',
  },
  {
    index: '04',
    title: 'Food delivery app',
    status: 'In progress',
    summary:
      'I am building this in TypeScript. It has three sides: the customer placing an order, the restaurant managing incoming orders, and the rider tracking deliveries.',
    highlights: [
      'Separate dashboards for each role.',
      'Live order tracking with Socket.io.',
      'JWT auth across the React client and the Express API.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    live: null,
    repo: 'https://github.com/Ndabenhle-Mthonti/SwiggyClone-App',
  },
  {
    index: '05',
    title: 'Amazon clone',
    status: null,
    summary:
      'A shopping flow with real payments: browse, cart, checkout, and order history. I used Stripe so the charge actually goes through, not a fake success screen.',
    highlights: [
      'Firebase handles accounts and order storage.',
      'Stripe Payment Intents run through a small Express server so the secret key never sits in the browser.',
    ],
    stack: ['React', 'Firebase', 'Stripe', 'Express'],
    live: null,
    repo: 'https://github.com/Ndabenhle-Mthonti/Amazon-Clone',
  },
]

const skills = [
  {
    title: 'Frontend',
    items: ['TypeScript', 'JavaScript (ES6+)', 'React', 'HTML5 / CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB / Mongoose', 'JWT & RBAC'],
  },
  {
    title: 'Tools',
    items: ['Git / GitHub', 'Jest / Supertest', 'GitHub Actions', 'Vercel / Render', 'Postman'],
  },
]

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to projects
      </a>

      <header className="site-header">
        <div className="wrap nav">
          <a className="logo" href="#top">
            Ndabenhle Mthonti
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#work">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-primary" href="/Ndabenhle-Mthonti-CV.pdf">
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div>
            <p className="kicker">Full-stack developer · South Africa</p>
            <h1>Hi, I&apos;m Ndabenhle.</h1>
            <p className="lede">
              I build web apps with React, TypeScript, and Node.js. Most of my
              projects are full-stack — login, APIs, a database, and a deployed
              frontend. I am looking for a junior or graduate software engineer
              role in Johannesburg, Cape Town, or Durban.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#work">
                View projects
              </a>
              <a className="btn btn-ghost" href="mailto:ndabenhleq361@gmail.com">
                ndabenhleq361@gmail.com
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <img
              className="portrait"
              src="/portrait.jpg"
              alt="Portrait of Ndabenhle Mthonti"
            />
            <div className="aside-meta">
              <p>
                <span>Based</span>
                <strong>South Africa</strong>
              </p>
              <p>
                <span>Stack</span>
                <strong>React · Supabase · Node</strong>
              </p>
              <p>
                <span>Looking for</span>
                <strong>Junior / graduate roles</strong>
              </p>
            </div>
          </aside>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>Projects</h2>
              <p>A few things I have built end to end. Code is on GitHub if you want to look closer.</p>
            </div>

            <div className="projects">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-index" aria-hidden="true">
                    {project.index}
                  </div>
                  <div>
                    <h3>
                      {project.title}
                      {project.status ? <span className="status">{project.status}</span> : null}
                    </h3>
                    <p className="project-copy">{project.summary}</p>
                    <ul className="highlights">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live demo
                        </a>
                      ) : null}
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>What I use</h2>
              <p>React on the frontend, with Node or Supabase behind it, and TypeScript on newer work.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap about-grid">
            <div className="about-copy">
              <h2>About</h2>
              <p>
                I am an AI Engineering student at Zaio Institute of Technology.
                Alongside that I have been building full-stack JavaScript apps —
                not only the UI, but auth, databases, and the API behind them.
              </p>
              <p>
                I care about code I can explain. If a feature needs roles, an
                audit trail, or tests, I would rather put that in from the start
                than pretend the happy path is enough. That is why Lungisa
                decides who can see a job in the database, and why the EMR has
                permission checks on the server.
              </p>
              <p>
                I am looking for a junior full-stack role in Johannesburg, Cape
                Town, or Durban. I want to work in a team, take feedback, and
                get better at the parts of engineering you only learn in
                production.
              </p>
            </div>
            <div className="skill-card">
              <h3>Right now</h3>
              <ul>
                <li>Studying AI Engineering at Zaio</li>
                <li>Lungisa, a property maintenance app, is on GitHub and live</li>
                <li>Open to Johannesburg, Cape Town, and Durban</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <div className="contact">
              <h2>Get in touch</h2>
              <p>
                If you want to talk about a role, a project, or anything on this
                page, email me. I am happy to walk through a repo on a call.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="mailto:ndabenhleq361@gmail.com">
                  Email me
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/Ndabenhle-Mthonti"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a className="btn btn-ghost" href="/Ndabenhle-Mthonti-CV.pdf">
                  Download CV
                </a>
              </div>
              <ul className="contact-list">
                <li>
                  <a href="mailto:ndabenhleq361@gmail.com">ndabenhleq361@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+27710364755">+27 71 036 4755</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ndabenhle-mthonti-952325263"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Ndabenhle Mthonti</span>
          <span>Built by me, with React and TypeScript</span>
        </div>
      </footer>
    </>
  )
}
