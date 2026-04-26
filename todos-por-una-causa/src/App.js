import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <section id="inicio" className="section">
        <img src="/donaciones.jpeg" alt="Donaciones" style={{width: "80%", borderRadius: "10px"}} />
        <h2>Bienvenidos</h2> 
        <p>
          “Todos por una misma causa” nace como una iniciativa de un grupo de amigos unidos por la empatía, la gratitud y el deseo genuino de ayudar a quienes más lo necesitan. A partir de la conciencia de las bendiciones compartidas —salud, trabajo, familia y amistad— surge la motivación de transformar esa gratitud en acciones concretas que lleven alegría y apoyo a diferentes familias.
        </p>
        <p>
          Desde su inicio, el grupo se concibe como un espacio organizado, enfocado y comprometido con una causa social clara: brindar ayuda a través de diferentes actividades solidarias como donaciones, mercados, regalos y otras iniciativas que permitan impactar positivamente a la comunidad.
        </p>
        <button className="btn-principal">Conoce más</button>
      </section>

      <section className="section">
  <h2>Misión</h2>
  <p>
    Brindar apoyo a familias vulnerables mediante actividades solidarias
    que generen bienestar y esperanza.
  </p>

  <h2>Visión</h2>
  <p>
    Ser una fundación reconocida por su impacto social y compromiso con la comunidad.
  </p>
</section>

      <section id="actividades" className="section">
        <h2>Actividades</h2>
        <ul>
          <li>Donaciones</li>
          <li>Mercados</li>
          <li>Regalos</li>
        </ul>
      </section>

      <section id="historia" className="section">
  <h2>Nuestra Historia</h2>

  <div className="timeline">

    <div className="evento">
      <img src="/labor2023.jpeg" alt="2023" />
      <h3>2023</h3>
      <p>Nuestra primera labor social</p>
    </div>

    <div className="evento">
      <img src="/labor2024.jpeg" alt="2024" />
      <h3>2024</h3>
      <p>Nuestra segunda labor social</p>
    </div>

    <div className="evento">
      <img src="/labor2025.jpeg" alt="2025" />
      <h3>2025</h3>
      <p>Nuestra tercera labor social</p>
    </div>

    <div className="evento">
      <img src="/perritos2025.jpeg" alt="Perritos" />
      <h3>2025</h3>
      <p>Nuestra primera labor con perritos</p>
    </div>

    <div className="evento">
      <img src="/kit2026.jpeg" alt="Kit escolares" />
      <h3>2026</h3>
      <p>Nuestra primera labor social kit escolares</p>
    </div>

  </div>
</section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Email: contacto@fundacion.com</p>
      </section>

      <section id="donar" className="section donar">
  <h2>Apóyanos</h2>
  <p>
    Tu ayuda puede transformar vidas. Puedes apoyar nuestras actividades
    mediante donaciones, mercados o participación en nuestras jornadas.
  </p>

  <button className="btn-principal">Quiero ayudar</button>
</section>

      <Footer />
    </div>
  );
}

export default App;