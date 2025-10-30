export default function Contact() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Get In Touch</h1>
        <p>We look forward to hearing from you.</p>
      </header>
      <section className="two-col">
        <form className="card form">
          <label>
            Full Name
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="How can we help you?"></textarea>
          </label>
          <button type="button">Send Message</button>
        </form>
        <div className="stack">
          <div className="card"><strong>Business Hours</strong><br/>Mon–Fri: 9–5</div>
          <div className="card"><strong>Our Location</strong><br/>123 Verdant Ave, Suite 100</div>
          <div className="card"><strong>Follow Us</strong><br/>🌐</div>
        </div>
      </section>
    </main>
  )
}


