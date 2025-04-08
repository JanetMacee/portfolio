import React from "/image/reactsvg.svg";
import Html from "/image/htmlsvg.svg";
import Javascript from "/image/javascriptsvg.svg";
import Node from "/image/nodesvg.svg";
import Express from "/image/expresssvg.svg";
import Mongodb from "/image/mongodbsvg.svg";
import Next from "/image/nextjspng.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import "./Resume.css";
const Resume: React.FC = () => {
	//styles for image
	const ImageStyle = {
		width: "50%",
		height: "20vh",
		display: "block",
		margin: "0 auto",
		maxWidth: "100%",
		maxHeight: "100%",
	};
	const navigate = useNavigate();
	return (
		<>
			<div className="Resume-container shadow-2xl rounded-lg mx-8 relative bottom-8 border-2 pb-10">
				<motion.div
					className="education mt-9 ml-20 pt-20 text-lg"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{
						y: 0,
						scale: 1,
						opacity: 1,
						transition: {
							duration: 2,
							delay: 0.5,
						},
					}}>
					<h2 className="text-2xl underline">
						<strong>Education</strong>
					</h2>
					<p className="font-bold text-lg ml-5">Ghana Senior High</p>
					<p className="text-yellow-400 font-bold ml-5">2019-2022</p>
					<p className="ml-5">General Science</p>
				</motion.div>
				<motion.div
					className="experience ml-20 pt-10 text-lg"
					initial={{ opacity: 0, y: 100, scaleY: 0.5 }}
					whileInView={{
						y: 0,
						scaleY: 1,
						opacity: 1,
						transition: {
							duration: 1,
							delay: 1,
						},
					}}>
					<h2 className="text-2xl underline">
						<strong>Experience</strong>
					</h2>
					<h3 className="font-bold text-lg ml-5">
						Freelance Developer & Technical Writer
					</h3>
					<p className="text-yellow-400 font-bold ml-5">
						Freelancer |Dec 2023-Present| Remote
					</p>
					<ul>
						<li className="ml-5">
							Developed custom websites and web applications for clients using
							React.js, Node.js, and Tailwindcss,
							<br />
							ensuring responsive design and optimal performance.
						</li>
					</ul>
				</motion.div>
				<motion.div
					className="skills ml-20 pt-20"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 2,
							delay: 1.5,
						},
					}}>
					<h2 className="text-2xl underline">
						<strong>My Skills</strong>
					</h2>
					<p className="m-5">Front-End Skills</p>
					<div className="skill space-x-2 cursor-pointer uppercase text-center font-bold">
						<motion.div
							onClick={() => navigate("/skillone")}
							className="react shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={React} alt="react-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">React</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skilltwo")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Html} alt="html-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Html</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skillthree")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={React} alt="ts-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Typescript</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skillfour")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Javascript} alt="js-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Javascript</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skillfive")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={React} alt="tailwind-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Tailwindcss</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skillsix")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Next} alt="next.js-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Next.Js</p>
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					className="skills ml-20 mb-10"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 2,
							delay: 2,
						},
					}}>
					<p className="m-5">Back-End Skills</p>
					<div className="skill flex space-x-3 uppercase font-bold text-center">
						<motion.div
							onClick={() => navigate("/skillseven")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Node} alt="node.js-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Node.Js</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skilleight")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Express} alt="express-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">Express</p>
						</motion.div>
						<motion.div
							onClick={() => navigate("/skillnine")}
							className="shadow-lg border-2"
							whileHover={{ scaleX: 1.1 }}>
							<img src={Mongodb} alt="mongodb-image" style={ImageStyle} />
							<p className="opacity-50 mb-3">MongoDB</p>
						</motion.div>
					</div>
				</motion.div>
				<a
					href="/resume"
					download="Resume"
					className="mt-10 ml-80 border-2 p-2 bg-blue-500 hover:bg-blue-700">
					Download
				</a>
			</div>
		</>
	);
};
export default Resume;
