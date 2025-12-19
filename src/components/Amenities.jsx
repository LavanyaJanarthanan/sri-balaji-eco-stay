import { motion } from "framer-motion";
import natureImg from "../assets/images/nature.jpg";
import poolImg from "../assets/images/pool.jpg";
import diningImg from "../assets/images/dining.jpg";
import yogaImg from "../assets/images/yoga.jpg";
import campfireImg from "../assets/images/campfire.jpg";
import cyclingImg from "../assets/images/cycling.jpg";

export default function Amenities() {
  const amenities = [
    { img: natureImg, title: "Nature Walks", desc: "Guided walks through lush greenery" },
    { img: poolImg, title: "Swimming Pool", desc: "Refreshing eco-friendly pool" },
    { img: diningImg, title: "Organic Dining", desc: "Fresh, locally sourced meals" },
    { img: yogaImg, title: "Yoga & Meditation", desc: "Rejuvenate mind and body" },
    { img: campfireImg, title: "Campfire Nights", desc: "Evenings under the stars" },
    { img: cyclingImg, title: "Cycling Trails", desc: "Explore nature on wheels" }
  ];

  return (
    <section id="amenities">
      <h2 className="center">Amenities & Experiences</h2>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <motion.div
            className="amenity-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="amenity-icon">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
