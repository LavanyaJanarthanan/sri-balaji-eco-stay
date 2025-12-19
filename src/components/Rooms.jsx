import { motion } from "framer-motion";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";

export default function Rooms() {
  const rooms = [
    {
      name: "Eco Deluxe Room",
      price: "₹3,500 / night",
      image: room1,
      features: "Nature View • Free Wi-Fi • Breakfast Included"
    },
    {
      name: "Garden View Suite",
      price: "₹5,000 / night",
      image: room2,
      features: "Private Balcony • King Bed • Scenic View"
    },
    {
      name: "Luxury Villa",
      price: "₹7,500 / night",
      image: room3,
      features: "Private Villa • Premium Amenities • Maximum Privacy"
    }
  ];

  return (
    <section id="rooms">
      <h2 className="center">Rooms & Suites</h2>

      <div className="room-grid">
        {rooms.map((room, index) => (
          <motion.div
            className="room-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="price">{room.price}</p>
              <p>{room.features}</p>
              <button className="btn-primary small-btn">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
