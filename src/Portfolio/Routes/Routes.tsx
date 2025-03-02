import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Blog from "../Blog/Blog";
import Contact from "../contact/contact";
import Projects from "../Projects/Project";
import Links from "../Links/Links";
import SkillOne from "../Resume/ResumeSkillsDetails/SkillOneDetail";
import SkillTwo from "../Resume/ResumeSkillsDetails/SkillTwoDetail";
import SkillThree from "../Resume/ResumeSkillsDetails/SkillThreeDetail";
import SkillFour from "../Resume/ResumeSkillsDetails/SkillFourDetail";
import SkillFive from "../Resume/ResumeSkillsDetails/SkillFiveDetail";
import SkillSix from "../Resume/ResumeSkillsDetails/SkillSixDetail";
import SkillSeven from "../Resume/ResumeSkillsDetails/SkillSevenDetail";
import SkillEight from "../Resume/ResumeSkillsDetails/SkillEightDetail";
import SkillNine from "../Resume/ResumeSkillsDetails/SkillNineDetail";
import All from "../Projects/All";
import WebDesign from "../Projects/web design";
import FullStack from "../Projects/full-stack";
const Routers: React.FC = () => {
	return (
		<>
			<Links />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/projects" element={<Projects />}>
					<Route index element={<All />} />
					<Route path="all" element={<All />} />
					<Route path="web-design" element={<WebDesign />} />
					<Route path="full-stack" element={<FullStack />} />
				</Route>
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/skillone" element={<SkillOne />} />
				<Route path="/skilltwo" element={<SkillTwo />} />
				<Route path="/skillthree" element={<SkillThree />} />
				<Route path="/skillfour" element={<SkillFour />} />
				<Route path="/skillfive" element={<SkillFive />} />
				<Route path="/skillsix" element={<SkillSix />} />
				<Route path="/skillseven" element={<SkillSeven />} />
				<Route path="/skilleight" element={<SkillEight />} />
				<Route path="/skillnine" element={<SkillNine />} />
			</Routes>
		</>
	);
};
export default Routers;
