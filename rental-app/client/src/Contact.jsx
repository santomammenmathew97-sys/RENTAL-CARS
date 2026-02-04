import "./contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    alert("Thank you for contacting us! We will get back to you shortly.");
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>
          Have questions or need support?  
          Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
