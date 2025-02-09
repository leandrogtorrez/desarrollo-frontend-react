import React from 'react';
import '../../App.css';

const LandingPage = () => {
  return (
    <div className="module-container">
      <header className="module-header">
        Módulo 7: DESARROLLO FRONTEND CON REACTJS
      </header>

      <section className="module-welcome">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo 
          la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, 
          y el uso de <strong>Redux</strong>.
        </p>
      </section>

      <section className="module-content">
        <h2>Temas Cubiertos</h2>
        <table className="module-table">
          <tbody>
            <tr>
              <td>Componentes funcionales y de clase</td>
              <td>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></td>
              <td>Creación de <strong>custom hooks</strong> como <strong>useForm</strong></td>
            </tr>
            <tr>
              <td>Gestión de variables de estado con <strong>useState</strong></td>
              <td>Gestión de estado global con <strong>Redux</strong></td>
              <td>Integración de <strong>Redux</strong> con <strong>React</strong></td>
            </tr>
            <tr>
              <td>Manejo de <strong>Formularios</strong> en <strong>React</strong></td>
              <td>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="module-resources">
        <h2>Recursos Adicionales</h2>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
      </section>

      <footer className="module-footer">
        © 2025 Módulo 7. USIP.
      </footer>
    </div>
  );
};

export default LandingPage;
