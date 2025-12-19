import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

export default function Hero({ openBooking }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>SRI BALAJI ECO STAY</h1>
        <p>Reconnect with Nature. Relax in Luxury.</p>

        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.1 }}
          onClick={openBooking}
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}
