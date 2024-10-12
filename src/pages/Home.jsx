import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the Cryptography App!</h1>
        <p>This app is a collection of classic ciphers and cryptanalysis tools.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>🔐 Classic Ciphers</li>
          <li>🔍 Cryptanalysis Tools</li>
          <li>📊 Visualizations</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
