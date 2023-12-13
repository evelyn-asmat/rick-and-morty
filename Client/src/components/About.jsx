export default function About() {
  return (
    <div className="about neon">
      <header>
        <h1>About Me</h1>
        <p>
          Hello, cyber-space explorers! 👾 I'm <span className="highlight">Evelyn Asmat</span>, a passionate full-stack
          developer. I combine my love for elegant design with the power of technology to build web applications
          that stand out in any corner of the digital multiverse.
        </p>
      </header>

      <main>
        <h2>Stellar Technologies 🌌</h2>
        <p>
            <strong><i className="fa-brands fa-react fa-lg fa-fade"></i> <span className="highlight">React:</span></strong> I use React to bring dynamic and
            user-friendly interfaces to life. From reusable components to
            advanced state management, I dive into the React universe to create
            exceptional user experiences.
            </p>
          <p>
            <strong><i className="fa-brands fa-node-js fa-lg fa-fade"></i><span className="highlight"> Node.js:</span></strong> With Node.js on the backend, I
            build robust and scalable servers. I handle HTTP requests, manage
            databases, and orchestrate the server-side symphony to make
            everything run smoothly.
          </p>
          <p>
            <strong><i class="fa-solid fa-database fa-fade"></i><span className="highlight"> Interdimensional Databases:</span></strong> From MongoDB to MySQL,
            I've explored various databases to store and retrieve data
            efficiently. The choice of the database depends on the universe
            we're heading to!
          </p>
      </main>

      <aside>
        <h2>Connect With Me 🌐</h2>
        <p>Follow me on my social media:</p>
        <p>

            <strong><i class="fa-brands fa-square-github fa-lg fa-fade"></i><span className="highlight"> GitHub:</span></strong>{" "}
            <a href="https://github.com/evelyn-asmat" target="_blank">
              github.com/evelyn-asmat
            </a>
        </p>
        <p>

            <strong><i class="fa-brands fa-linkedin fa-lg fa-fade"></i><span className="highlight"> LinkedIn:</span></strong>{" "}
            <a
              href="https://linkedin.com/in/evelyn-asmat"
              target="_blank"
            >
              linkedin.com/in/evelyn-asmat
            </a>
        </p>

        <h2>Inspirational Quote 🌟</h2>
        <blockquote>
          As the universal code says: <code>console.log("Hello, World!");</code>{" "}
          – Because every project starts with a simple greeting to the world,
          and I'm ready to greet all digital universes!
        </blockquote>
      </aside>
    </div>
  );
}
