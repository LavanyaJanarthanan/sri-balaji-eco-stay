import { motion } from "framer-motion";

export default function BookingModal({ close }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>Book Your Stay</h2>

        <form className="booking-form">
          <div className="form-group">
            <label>Check-in</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Check-out</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Guests</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          <div className="form-group">
            <label>Room Type</label>
            <select>
              <option>Eco Deluxe Room</option>
              <option>Garden View Suite</option>
              <option>Luxury Villa</option>
            </select>
          </div>

          <button type="submit" className="btn-primary full-btn">
            Confirm Booking
          </button>
        </form>

        <button className="close-btn" onClick={close}>
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
