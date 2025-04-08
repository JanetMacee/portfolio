import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [textarea, setTextArea] = useState("");
	const navigate = useNavigate();
	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm("service_dqzcxhj", "template_drr5kq8", e.target, {
				publicKey: "j7DWKIFkf0emS67DX",
			})
			.then(
				() => {
					alert("SUCCESS!");
					navigate("/about");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<>
			<form
				className="containers shadow-2xl rounded-lg mx-8 relative bottom-8 border-2 pb-10"
				onSubmit={sendEmail}>
				<motion.div className="name mt-9 ml-20 pt-20 text-lg font-bold">
					<motion.input
						initial={{ x: 300, scale: 0.5, opacity: 0 }}
						whileInView={{
							x: 0,
							scale: 1,
							opacity: 1,
							transition: { duration: 1 },
						}}
						whileFocus={{ color: "white", backgroundColor: "GrayText", x: 50 }}
						className="border-2 rounded-lg py-3 pl-3 outline-none w-80"
						type="text"
						required
						name="from_name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full name"
					/>
				</motion.div>
				<div className="email mt-8 ml-20 text-lg font-bold">
					<motion.input
						initial={{ x: 300, scale: 0.5, opacity: 0 }}
						whileInView={{
							x: 0,
							scale: 1,
							opacity: 1,
							transition: { duration: 1.5 },
						}}
						whileFocus={{ color: "white", backgroundColor: "GrayText", x: 50 }}
						className="border-2 rounded-lg py-3 pl-3 outline-none w-80"
						type="email"
						name="user_email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email address"
					/>
				</div>
				<div className="textarea mt-8 ml-20 text-lg font-bold">
					<motion.textarea
						initial={{ x: 300, scale: 0.5, opacity: 0 }}
						whileInView={{
							x: 0,
							scale: 1,
							opacity: 1,
							transition: { duration: 2 },
						}}
						whileFocus={{ color: "white", backgroundColor: "GrayText", x: 50 }}
						cols={30}
						rows={3}
						name="message"
						required
						value={textarea}
						onChange={(e) => setTextArea(e.target.value)}
						className="border-2 rounded-lg py-3 pl-3 outline-none "
						style={{ width: "50%", height: "20vh" }}
						placeholder="Your Message"
					/>
				</div>
				<motion.button
					initial={{ x: -250 }}
					animate={{
						x: 0,
						backgroundColor: "indigo",
						transition: {
							duration: 1,
							delay: 2,
							type: "spring",
							stiffness: 500,
						},
					}}
					whileHover={{
						scale: 0.8,
						backgroundColor: "GrayText",
						color: "white",
						transition: { repeat: Infinity },
					}}
					type="submit"
					className="button border-2 outline-none ml-20 py-3 px-3 rounded-lg mt-8 font-bold">
					Send Message
				</motion.button>
			</form>
		</>
	);
};

export default Contact;
