import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { shubham } from "../assets";

// Service Card Component
type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About Section
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Overview with Image and Text Side-by-Side */}
        <div className="mt-10 flex flex-col-reverse md:flex-`row items-center gap-10">
          {/* Text */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            <h1>Hi, I’m Shubham Goswami, a third-year B.Tech student at DTU and the GDSC Lead at DTU. I’m a passionate Full-Stack Web Developer, skilled in React.js, Next.js, Node.js, and PostgreSQL. I’m currently working as an SDE Intern at Turflo, and have previously interned at Noise, collaborated with startups like Lensroom, and taught Physics at Unacademy. I’m also a national-level karate athlete and a silver medalist in a state math olympiad. I love building impactful tech products and leading innovative projects. Let’s connect and create something amazing!</h1>
          </motion.p>

          {/* Image */}
           <div className="text-white flex flex-col md:flex-row items-center justify-center gap-10 p-5">
      {/* Left: Image */}
      <img
        src={shubham}
        alt="Shubham Goswami"
        className="w-[250px] h-[250px] rounded-xl object-cover shadow-lg"
      />
        </div>
        </div>

        {/* Services */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
