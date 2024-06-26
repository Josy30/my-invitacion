import "./Home.scss";
import portrait from "../Assets/portrait.jpeg";
import Music from "../Assets/music.mp3";
import HeaderText from "../components/HeaderText/headerText";

import Icon from "../components/icon";
import ReactAudioPlayer from "react-audio-player";

import CarouselImages from "../components/Carousel/carousel";
import DateCountdown from "../components/DateCountdown/DateCountdown";
import CeremonyMap from "../components/CeremonyMap/CeremonyMap";
import Gifts from "../components/Gifts/Gifts";
import DressCode from "../components/DressCode/DressCode";
import Invitation from "../components/Invitation/Invitation";
import Form from "../components/Form/Form";
import EndImage from "../components/EndImage/EndImage";
import SvgComponent from "../components/Icon2";

const Home = () => {
	return (
		<div className="App">
			<div className="App-header">
				<div className="sub-Header">
					<div className="header-section">
						<div className="icon">
							<Icon />
						</div>
						<h1 className="header-name">Arseni & Joselyn</h1>

						<ReactAudioPlayer
							autoPlay={true}
							src={Music}
							loop={true}
							controls
							className="audio-player"
						/>
					</div>
				</div>
				<div className="background">
					<img
						className="portrait"
						src={portrait}></img>
				</div>
				<HeaderText
					text={
						"Ya lo tenemos todo… El traje, la tarta, la decoración, las flores y la comida, pero aun nos falta algo super importante, vuestra presencia en nuestra boda"
					}
				/>
				<CarouselImages />
				<DateCountdown />
				<HeaderText title={"Con la bendición de nuestros padres"} />
				<CeremonyMap />
				<Gifts gifts={true} />
				<DressCode />
				<Invitation />
				<Form />
				<EndImage />
				<Gifts gifts={false} />
			</div>
		</div>
	);
};

export default Home;
