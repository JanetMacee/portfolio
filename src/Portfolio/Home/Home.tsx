import Image from "./Header/image";
import Name from "./Header/Name";
import Personal from "./personal-info/personal-info";
import SocialMedia from "./socialmedia/socialmedia";
//import "./Home.css";
const Home: React.FC = () => {
  return (
    <div className="shadow-sm w-auto mx-8 mt-5 py-3 rounded-xl border-2">
      <div className=" flex ml-20 mt-10">
        <div className="profile-image">
          <Image />
        </div>
        <div className="name">
          <Name />
        </div>
      </div>
      <div className="ml-20 mt-5">
        <Personal />
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};
export default Home;
