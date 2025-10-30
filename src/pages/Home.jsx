export default function Home() {
  return (
    <div className="app-container">
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h2 className="hero-title">
            A Universe of <span className="accent">Essential</span> Services
          </h2>
          <p className="hero-subtitle">
            Delve into our curated collections. Each portal is a gateway to a specialized world of quality and care.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="feature-sections">
          {/* Artistry in Bloom */}
          <section className="feature-section group">
            <div className="feature-image-wrapper order-2 md-order-1">
              <div className="feature-image-glow"></div>
              <img 
                alt="Elaborate floral and makeup collage" 
                className="feature-image" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJvAWHwltWl75zgLeYVYWDM7If0CZz9gUrNk18zXp40zv_Fsqbu1jr5o0_6FXY0U7q29K2yDfKl4sbIyHER0_yrJ_tuL2dQBWWgnxwiOvfOV8Q0Ij2xm9bsFCN2Q3FvnY471IwRiJKMONUeZekJXJ4IiIE2_shzVKnS6l17J3ezzPuVGSeh7yHATD3QBVHD9EOtJt-xfKhN1Txm8YKfUu3FIbPlihVc9MMoQCCPjpafLy6G_q5frAVR4BnL94HgWuTx2YJtlDPw"
              />
              <div 
                className="feature-decoration bg-1" 
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRSvtFnVyscTGxFXhjldzr4O_Uh9Wol1Ze3m7aUno_ZTM8PlONtQDKKwoJCWdUKALuh0JL4HB7oVOwCvX-Ci41UbfZkpzxla0LpcxE4vMPAVD8sZaHsgDxtbo7SFBFzAEyxD-NEFzezZUzayF_QM42YD2Miu7N42-NuemaHEWCKoF23zQLf6UnTmSetyFOsRXoaefdiwY7TFrBL5v8WYj3ZnwtVRixyvT1fQkKexdarK48ZiwvQygtNmNVR_pXaYMr4Z74VWaEUQ')`
                }}
              ></div>
            </div>
            <div className="feature-copy-wrapper order-1 md-order-2">
              <h3 className="feature-title">
                Artistry in <span className="accent">Bloom</span>
              </h3>
              <p className="feature-description">
                Enter our world of cosmetics, where every product is a brushstroke in your masterpiece. Discover collections that celebrate bold expression and timeless elegance.
              </p>
              <a className="feature-cta group-cta" href="#">
                <span className="cta-text">Visit Makeup Souk</span>
                <span className="material-icons arrow-icon">east</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works-header">
          <h3 className="how-it-works-title">How It Works</h3>
          <p className="how-it-works-subtitle">A seamless journey to our specialized services.</p>
        </div>
        <div className="how-it-works-grid">
          <div className="how-card">
            <div className="how-icon-wrapper">
              <span className="material-icons how-icon">explore</span>
            </div>
            <h4 className="how-card-title">1. Discover</h4>
            <p className="how-card-description">Browse our distinct product categories designed for your specific needs.</p>
          </div>
          <div className="how-card">
            <div className="how-icon-wrapper">
              <span className="material-icons how-icon">exit_to_app</span>
            </div>
            <h4 className="how-card-title">2. Select & Redirect</h4>
            <p className="how-card-description">Click the arrow to be seamlessly transported to the dedicated external site for that category.</p>
          </div>
          <div className="how-card">
            <div className="how-icon-wrapper">
              <span className="material-icons how-icon">shopping_cart</span>
            </div>
            <h4 className="how-card-title">3. Experience</h4>
            <p className="how-card-description">Enjoy a specialized shopping experience tailored to your chosen service.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
