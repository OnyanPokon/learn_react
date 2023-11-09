import Wellcome from "../components/Welcome";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Quote from "../components/Quote";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <>
      <section className="hero-section">
        <Wellcome />
        <Hero />
        <div className="plus-container">
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="none"/>
            <line x1="51" y1="11" x2="51" y2="90" stroke="black" strokeWidth="2"/>
            <line x1="90" y1="51" x2="11" y2="51" stroke="black" strokeWidth="2"/>
          </svg>
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="none"/>
            <line x1="51" y1="11" x2="51" y2="90" stroke="black" strokeWidth="2"/>
            <line x1="90" y1="51" x2="11" y2="51" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
        <motion.img 
          animate={{ x: -100, y: -100, rotate: 100}} 
          transition={{duration: 40, repeat: Infinity, repeatType: "reverse"}} 
          className="cube1" src="/assets/img/cube.png" alt="" />
        <motion.img 
          animate={{ x: 100, y: 100, rotate: 100 }} 
          transition={{duration: 60, repeat: Infinity, repeatType: "reverse" }}  
          className="ruby" src="/assets/img/ruby.png" alt="" />
      </section>
      <section className="quote-section">
        <Quote />
        <motion.img
        animate={{ x: 250, y: 200, rotate: 100 }}
        transition={{duration: 40, repeat: Infinity, repeatType: "reverse"}} 
        className="donut" src="/assets/img/donut.png" alt="" />
      </section>
      <section className="skills-section">
        <Skills />
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="none"/>
          <line x1="51" y1="11" x2="51" y2="90" stroke="black" strokeWidth="2"/>
          <line x1="90" y1="51" x2="11" y2="51" stroke="black" strokeWidth="2"/>
        </svg>
      </section>
    </>
  )
} 

export default Homepage;
