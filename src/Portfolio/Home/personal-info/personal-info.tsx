import Email from "/image/email.png";
import Phone from "/image/icon4.png";
import Location from "/image/icon2.png";
import { motion } from "motion/react";
const Personal: React.FC = () => {
  return (
    <>
      <div className="personal-info">
        <motion.div
          className="email flex space-x-2"
          initial={{ y: 70, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 3,
            },
          }}
          whileHover={{ scale: 1.1, color: "indigo", originX: 0 }}
        >
          <div>
            <img
              src={Email}
              alt="email-image"
              className="w-20  border-2 border-yellow-400 px-2 rounded-xl"
            />
          </div>
          <div>
            <p>
              <strong>Email</strong>
            </p>
            <a href="mailto:janetannanmark@gmail.com">
              janetannanmark@gamil.com
            </a>
          </div>
        </motion.div>
        <motion.div
          className="phone flex mt-2 space-x-2"
          initial={{ y: 70, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 3.8,
            },
          }}
          whileHover={{ scale: 1.1, originX: 0, color: "indigo" }}
        >
          <div>
            <img
              src={Phone}
              alt="phone-image"
              className="border-2 border-yellow-400 w-20 rounded-xl"
            />
          </div>
          <div>
            <p>
              <strong>Phone</strong>
            </p>
            <a href="tel:0200410725">0200410725</a>
          </div>
        </motion.div>
        <motion.div
          className="location flex space-x-2 mt-2"
          initial={{ y: 70, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 4.5,
            },
          }}
          whileHover={{ scale: 1.1, originX: 0, color: "indigo" }}
        >
          <div>
            <img
              src={Location}
              alt="location-image"
              className="w-20 border-2 border-yellow-400 rounded-xl"
            />
          </div>
          <div>
            <p>
              <strong>Location</strong>
            </p>
            <p>Kasoa</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Personal;
