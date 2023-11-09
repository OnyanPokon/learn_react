import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.div initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{duration: 0.5}} className="hero-wrapper">
      <h1>
        FRONT-END<span>WEB DEV \.</span>
      </h1>
      <div className="badge-wrapper">
        <span>
          a portfolio<p>website</p>
        </span>
        <span>
          made by<p>onyankonpon</p>
        </span>
        <span>
          enjoy
        </span>
      </div>
    </motion.div>
  )
}

export default Hero