import { Link, Outlet } from "react-router-dom";
import "./project.css";
const Projects: React.FC = () => {
	return (
		<>
			<div
				className="project shadow-2xl rounded-lg mx-8 border-2 pb-10 relative"
				style={{}}>
				<div className="subnav flex space-x-3 mt-9 ml-20 pt-20 text-lg font-bold">
					<div className="bg-gray-300 px-5 hover:bg-gray-500 rounded-lg">
						<Link to="all">All</Link>
					</div>
					<div className="bg-gray-300 px-5 hover:bg-gray-500 rounded-lg">
						<Link to="web-design">Web Design</Link>
					</div>
					<div className="bg-gray-300 px-5 hover:bg-gray-500 rounded-lg">
						<Link to="full-stack">Full Stack</Link>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
};
export default Projects;
