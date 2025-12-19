import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="center">Contact & Location</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Get in Touch</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            title="Resort Location"
            src="https://www.google.com/maps?q=India&output=embed"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
