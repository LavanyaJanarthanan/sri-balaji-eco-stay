import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingModal from "./components/BookingModal";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





function App() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Navbar />
      <Hero openBooking={() => setShowBooking(true)} />

      {showBooking && (
        <BookingModal close={() => setShowBooking(false)} />
      )}

      <About />
      <Rooms />
      <Amenities/>
      <Gallery />
      <Testimonials />
      <Contact/>
      <Footer />

    </>
  );
}

export default App;
