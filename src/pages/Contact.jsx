export default function Contact() {
  return (
    <div className="contact-page-container">
      <main className="contact-main">
        {/* Hero Section */}
        <div className="contact-hero">
          <h2 className="contact-hero-title">
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="contact-hero-subtitle">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-decoration contact-form-decoration-top"></div>
            <div className="contact-form-decoration contact-form-decoration-bottom"></div>
            <h3 className="contact-form-title">Send Us a Message</h3>
            <form action="#" className="contact-form">
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="name">Full Name</label>
                <input 
                  className="contact-form-input" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  type="text"
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="email">Email Address</label>
                <input 
                  className="contact-form-input" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  type="email"
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="message">Message</label>
                <textarea 
                  className="contact-form-input contact-form-textarea" 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  rows="6"
                ></textarea>
              </div>
              <div className="contact-form-field">
                <button className="contact-form-button" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon-wrapper">
                <span className="material-icons contact-info-icon">schedule</span>
              </div>
              <div className="contact-info-content">
                <h4 className="contact-info-title">Business Hours</h4>
                <p className="contact-info-text">Monday - Friday: 9am - 5pm</p>
                <p className="contact-info-text">Saturday: 10am - 3pm</p>
                <p className="contact-info-text contact-info-text-muted">Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-wrapper">
                <span className="material-icons contact-info-icon">location_on</span>
              </div>
              <div className="contact-info-content">
                <h4 className="contact-info-title">Our Location</h4>
                <p className="contact-info-text">123 Verdant Avenue, Suite 100</p>
                <p className="contact-info-text">Metropolis, 12345</p>
              </div>
            </div>

            <div className="contact-info-card">
              <h4 className="contact-info-title contact-info-title-standalone">Follow Us</h4>
              <div className="contact-social-links">
                <a className="contact-social-link" href="#" aria-label="Facebook">
                  <svg aria-hidden="true" className="contact-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                  </svg>
                </a>
                <a className="contact-social-link" href="#" aria-label="Twitter">
                  <svg aria-hidden="true" className="contact-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a className="contact-social-link" href="#" aria-label="Instagram">
                  <svg aria-hidden="true" className="contact-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.011 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.531 2.011 9.885 2 12.315 2zM12 7.028a4.972 4.972 0 100 9.944 4.972 4.972 0 000-9.944zM12 15.11a3.11 3.11 0 110-6.22 3.11 3.11 0 010 6.22zM16.965 6.572a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <div className="contact-map-glow"></div>
          <div className="contact-map-wrapper">
            <img 
              alt="Map showing the location of Global Souk" 
              className="contact-map-image" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsAdzFKam4HyMMrw3HtpYR-aCLJf-pgHe26xGoHHl-24js5M9BTIbEXinVxkrNPp7t91YHiFqjN2cncS6eKbLHOjbC108PalOVfI4_Gop735jWOYKBA9_lN0LMOcze-NTRA9NK03-GPHWaTwktt0RI3H5xDaPQ6qoWilZMBNY4o3gpwfg5osohn2KmoA4SLl8I--ubAhn1Co9wNs_tJNa1xlShHsea_qgtXAkeGMNthKSmzsHhE5JO_pdri8kCWKaK829YBEEdxg"
            />
            <div className="contact-map-overlay"></div>
            <div className="contact-map-marker">
              <div className="contact-map-pulse"></div>
              <div className="contact-map-pin"></div>
              <p className="contact-map-text">We Are Here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
