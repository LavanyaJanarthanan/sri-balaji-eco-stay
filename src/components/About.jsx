import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Sri Balaji Eco Stay</h2>
          <p>
            Sri Balaji Eco Stay is a serene retreat designed to bring you closer
            to nature while offering premium comfort. Surrounded by lush
            greenery, our resort blends eco-friendly living with modern luxury.
          </p>
          <p>
            Whether you seek relaxation, wellness, or a peaceful escape, our
            resort provides an unforgettable experience rooted in sustainability
            and elegance.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutImg} alt="About Resort" />
        </motion.div>
      </div>
    </section>
  );
}
