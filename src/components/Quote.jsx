import { motion } from "framer-motion"

function Quote() {
  return (
    <motion.div
    initial={{ y: 50}}
    whileInView={{ y: 0 }}
    transition={{ duration: 0.2,  }}
    className="quote-wrapper">
      <div className="arrow-placeholder">
        <motion.svg 
        whileInView={{rotate: -90}}
        transition={{duration: 0.5}}  width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M87.8284 52.8284C89.3905 51.2663 89.3905 48.7337 87.8284 47.1716L62.3726 21.7157C60.8105 20.1536 58.2778 20.1536 56.7157 21.7157C55.1536 23.2778 55.1536 25.8105 56.7157 27.3726L79.3431 50L56.7157 72.6274C55.1536 74.1895 55.1536 76.7222 56.7157 78.2843C58.2778 79.8464 60.8105 79.8464 62.3726 78.2843L87.8284 52.8284ZM16 54L85 54L85 46L16 46L16 54Z" fill="black"/>
        </motion.svg>
      </div>
      <motion.div
      initial={{ filter: "blur(20px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{duration: 0.5}}
      className="quote-placeholder">
        <p className="quote">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laudantium, in omnis quod perferendis ea sapiente reprehenderit eaque amet dolor minima. Recusandae ipsam expedita architecto nobis amet numquam esse. Eligendi qui sequi recusandae voluptate. Veritatis, impedit adipisci? Adipisci exercitationem laudantium quaerat quam, in voluptate quia iure unde vel, nesciunt suscipit!</p>
        <p className="someone-famous">lorem [ <span>lorem</span> adalah <span>lorem</span> ]</p>
      </motion.div>
    </motion.div>
  )
}

export default Quote