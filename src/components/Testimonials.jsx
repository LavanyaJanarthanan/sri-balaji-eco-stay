import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Arun Kumar",
      role: "Chennai",
      review:
        "A peaceful eco stay surrounded by nature. The rooms were clean and the service was excellent.",
    },
    {
      name: "Priya Sharma",
      role: "Bangalore",
      review:
        "Loved the ambience and eco-friendly concept. Perfect place to relax and recharge.",
    },
    {
      name: "Rahul Verma",
      role: "Hyderabad",
      review:
        "Beautiful location, delicious food and warm hospitality. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials">
      <h2 className="center">What Our Guests Say</h2>

      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-avatar">
              {item.name.charAt(0)}
            </div>

            <p className="testimonial-text">“{item.review}”</p>

            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
