import Allitems from "./Allitems";

const FullStack: React.FC = () => {
	const fullStack1 = Allitems[0];
	const fullStack2 = Allitems[1];
	const fullStack3 = Allitems[3];
	return (
		<>
			<div className="shadow-2xl rounded-lg mx-8 relative8 border-2 pb-10">
				<div className="mt-1 ml-10 pt-20 text-lg flex justify-center items-center space-x-3">
					<div
						className="shadow-lg border-2 px-4 py-3 rounded-lg"
						style={{ width: "20%" }}>
						<h3 className="uppercase font-bold opacity-70 text-center">
							{fullStack1.name}
						</h3>
						<img
							src={fullStack1.image}
							alt={fullStack1.name}
							style={{ width: "100%", height: "30vh", padding: "20px" }}
						/>
						<div className="flex space-x-2">
							<p
								className="bg-gray-300 px-1 rounded-lg font-bold"
								style={{ width: "35.9%" }}>
								React.js
							</p>
							<p
								className="bg-gray-300 px-2 rounded-lg font-bold"
								style={{ width: "55.9%" }}>
								Tailwindcss
							</p>
						</div>
						<a
							href={fullStack1.github}
							target="_blank"
							rel="noopener noreferrel"
							className="bg-blue-300 hover:bg-blue-700 px-2 rounded-lg font-bold mt-2">
							GitHub
						</a>
					</div>
					<div
						className="shadow-lg border-2 px-4 py-3 rounded-lg"
						style={{ width: "20%" }}>
						<h3 className="uppercase font-bold opacity-70 text-center">
							{fullStack2.name}
						</h3>
						<img
							src={fullStack2.image}
							alt={fullStack2.name}
							style={{ width: "100%", height: "30vh", padding: "20px" }}
						/>
						<div className="flex space-x-2">
							<p
								className="bg-gray-300 px-1 rounded-lg font-bold"
								style={{ width: "35.9%" }}>
								React.js
							</p>
							<p
								className="bg-gray-300 px-2 rounded-lg font-bold"
								style={{ width: "55.9%" }}>
								Tailwindcss
							</p>
						</div>
						<a
							href={fullStack2.github}
							target="_blank"
							rel="noopener noreferrel"
							className="bg-blue-300 hover:bg-blue-700 px-2 rounded-lg font-bold mt-2">
							GitHub
						</a>
					</div>
					<div
						className="shadow-lg border-2 px-4 py-3 rounded-lg"
						style={{ width: "20%" }}>
						<h3 className="uppercase font-bold opacity-70 text-center">
							{fullStack3.name}
						</h3>
						<img
							src={fullStack3.image}
							alt={fullStack3.name}
							style={{ width: "100%", height: "30vh", padding: "20px" }}
						/>
						<div className="flex space-x-2">
							<p
								className="bg-gray-300 px-1 rounded-lg font-bold"
								style={{ width: "35.9%" }}>
								React.js
							</p>
							<p
								className="bg-gray-300 px-2 rounded-lg font-bold"
								style={{ width: "55.9%" }}>
								Tailwindcss
							</p>
						</div>
						<a
							href={fullStack3.github}
							target="_blank"
							rel="noopener noreferrel"
							className="bg-blue-300 hover:bg-blue-700 px-2 rounded-lg font-bold mt-2">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default FullStack;
