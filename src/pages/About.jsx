export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-ornament about-ornament-top"></div>
      <div className="about-ornament about-ornament-bottom"></div>

      <main className="about-main">
        {/* Hero Section */}
        <div className="about-hero">
          <h2 className="about-hero-title">
            Our Story: A <span className="accent">Commitment</span> to Quality
          </h2>
          <p className="about-hero-subtitle">
            Discover the journey of Global Souk, from a simple idea to a universe of curated services. We are driven by passion, guided by values, and dedicated to you.
          </p>
        </div>

        {/* Mission & History Section */}
        <div className="about-content-grid">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img 
              alt="A collage representing the brand's services, like makeup and eco-friendly products, with floral motifs." 
              className="about-image" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJvAWHwltWl75zgLeYVYWDM7If0CZz9gUrNk18zXp40zv_Fsqbu1jr5o0_6FXY0U7q29K2yDfKl4sbIyHER0_yrJ_tuL2dQBWWgnxwiOvfOV8Q0Ij2xm9bsFCN2Q3FvnY471IwRiJKMONUeZekJXJ4IiIE2_shzVKnS6l17J3ezzPuVGSeh7yHATD3QBVHD9EOtJt-xfKhN1Txm8YKfUu3FIbPlihVc9MMoQCCPjpafLy6G_q5frAVR4BnL94HgWuTx2YJtlDPw"
            />
            <div 
              className="about-image-decoration" 
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRSvtFnVyscTGxFXhjldzr4O_Uh9Wol1Ze3m7aUno_ZTM8PlONtQDKKwoJCWdUKALuh0JL4HB7oVOwCvX-Ci41UbfZkpzxla0LpcxE4vMPAVD8sZaHsgDxtbo7SFBFzAEyxD-NEFzezZUzayF_QM42YD2Miu7N42-NuemaHEWCKoF23zQLf6UnTmSetyFOsRXoaefdiwY7TFrBL5v8WYj3ZnwtVRixyvT1fQkKexdarK48ZiwvQygtNmNVR_pXaYMr4Z74VWaEUQ')`
              }}
            ></div>
          </div>

          <div className="about-text-card">
            <h3 className="about-section-title">Our Mission</h3>
            <p className="about-section-text">
              At Global Souk, our mission is to be the premier gateway to specialized, high-quality services. We believe in simplifying excellence, providing a central hub where customers can confidently access the best in cosmetics and eco-conscious cleaning solutions. We strive to build a universe of trust and quality, ensuring every interaction leads to satisfaction and delight.
            </p>
            <div className="about-divider"></div>
            <h3 className="about-section-title">Our History</h3>
            <p className="about-section-text">
              Founded in 2020, Global Souk began with a vision to connect discerning customers with niche service providers. What started as a small directory has blossomed into a curated platform, home to our own specialized brands: Makeup Souk and Cleaning Souk. Our journey is one of careful curation and a relentless pursuit of what it means to offer the very best.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <section className="about-values-section">
          <h3 className="about-values-title">Our Core Values</h3>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon-wrapper">
                <span className="material-icons about-value-icon">verified</span>
              </div>
              <h4 className="about-value-title">Quality</h4>
              <p className="about-value-description">
                We are uncompromising in our standards, ensuring every product and service meets our benchmark for excellence.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon-wrapper">
                <span className="material-icons about-value-icon">eco</span>
              </div>
              <h4 className="about-value-title">Integrity</h4>
              <p className="about-value-description">
                We operate with transparency and honesty, building lasting relationships based on trust and respect.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon-wrapper">
                <span className="material-icons about-value-icon">auto_awesome</span>
              </div>
              <h4 className="about-value-title">Innovation</h4>
              <p className="about-value-description">
                We constantly seek new ways to delight our customers and improve our offerings in a dynamic world.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
