import Instagram from "/image/instagramsvg.svg";
import Twitter from "/image/twitter.png";
import Facebook from "/image/fb.png";
const SocialMedia: React.FC = () => {
	return (
		<>
			<div className="flex justify-center space-x-2">
				<div>
					<a
						href="http://www.instagram.com/macee_khalid"
						target="_blank"
						rel="noopener noreferrer">
						<img src={Instagram} alt="instagram" className="w-20 h-20"></img>
					</a>
				</div>
				<div>
					<a
						href="http://www.facebook.com/macee khalid"
						target="_blank"
						rel="noopener noreferre">
						<img src={Facebook} alt="facebook-image" className="w-20 h-20" />
					</a>
				</div>
				<div>
					<a
						href="http://www.x.com/macee_khalid"
						target="_blank"
						rel="noopener noreferrer">
						<img src={Twitter} alt="twitter-image" className="w-20 h-20" />
					</a>
				</div>
			</div>
		</>
	);
};
export default SocialMedia;
