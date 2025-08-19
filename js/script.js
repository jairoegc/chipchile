/**
 * Main script for Fundación Chilena de Microelectrónica website
 * 
 * This file contains the React components that make up the website structure.
 * Following Google JavaScript style guide and best practices.
 */

// Footer component
const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Fundación Chilena de Microelectrónica. Todos los derechos reservados.</p>
  </footer>
);

// Main App component
const App = () => {
  /**
   * Handle contact button click
   * Opens default email client with pre-filled address
   */
  const handleContactClick = () => {
    window.location.href = "mailto:contacto@chipchile.cl";
  };
  
  return (
    <>
      <div className="container">
        <main className="logo-container">
          <img 
            src="assets/images/logo.png" 
            alt="Fundación Chilena de Microelectrónica Logo" 
            className="logo" 
          />
        </main>
        
        <button className="contact-button" onClick={handleContactClick}>
          Contáctanos
        </button>
      </div>
      <Footer />
    </>
  );
};

// Render the React component
ReactDOM.render(<App />, document.getElementById('root'));
