import { NavLink } from "react-router-dom";
import "./Links.css";
const Links: React.FC = () => {
	return (
		<div
			className="navHead shadow-sm rounded-t-xl mx-8 py-5 mr-80
     border-2 absolute z-10
    ">
			<div className="navbar text-center space-x-2 text-lg font-bold">
				<NavLink to="/about" className="nav">
					About
				</NavLink>
				<NavLink to="/resume" className="nav">
					Resume
				</NavLink>
				<NavLink to="/projects" className="nav">
					Projects
				</NavLink>
				<NavLink to="/blog" className="nav">
					Blog
				</NavLink>
				<NavLink to="/contact" className="nav">
					Contact
				</NavLink>
			</div>
		</div>
	);
};
export default Links;
