import { skills } from "../data/data"
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
    initial={{ filter: "blur(20px)", y: 50 }}
    whileInView={{ filter: "blur(0px)", y: 0 }}
    transition={{duration: 0.5}} 
    className="skills-wrapper">
      {skills.map((item) => {
        return(
          <div key={item.id} className="skill">
            <div className="skill-id">
              <p>0{item.id}</p>
            </div>
            <hr />
            <div className="skill-headline">
              <p>Aku mampu membuat sesuatu yang luar biasa dengan <span>{item.skilltool}</span></p>
            </div>
            <div className="skill-name">
              <p>[ {item.skillname} ]</p>
            </div>
            <div className="skill-desc">
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
      
    </motion.div>
  )
}

export default Skills