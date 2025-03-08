import ResumeSkillsDetails from "./ResumeSkillsDetails.json";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./ResumeSkillsDetails.css";
const SkillSeven: React.FC = () => {
	const { name, description } = ResumeSkillsDetails[6];
	const navigate = useNavigate();
	return (
		<>
			<div className="Resume text-center m-40 font-bold ">
				<h1 className="underline text-2xl opacity-70">{name}</h1>
				<h1 className="">{description}</h1>
				<motion.button
					type="button"
					onClick={() => navigate("/skillsix")}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						backgroundColor: "indigo",
						transition: {
							duration: 1,
							delay: 2,
						},
					}}
					whileHover={{
						scale: 0.8,
						backgroundColor: "GrayText",
						color: "white",
						transition: { repeat: Infinity },
					}}
					className="btn border-2 outline-none ml-15 py-3 px-3 rounded-lg mt-8 font-bold">
					Previous
				</motion.button>
			</div>
		</>
	);
};
export default SkillSeven;
