import { motion } from "motion/react";
const Name: React.FC = () => {
  return (
    <>
      <motion.h1
        className="text-2xl font-bold"
        initial={{ y: -100 }}
        animate={{
          y: 0,
          transition: { delay: 2, type: "spring", stiffness: 250 },
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        whileHover={{scale:1.1,color:"#f8e112",originX:0}}
      >
        Macee Khalid
      </motion.h1>
      <motion.p
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            delay: 2.8,
          },
        }}
      >
        Frontend Developer
      </motion.p>
    </>
  );
};
export default Name;
