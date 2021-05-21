import { FC, Dispatch, SetStateAction } from "react";

import Button from "../Button/Button";

import "./IntroScreen.css";

interface Props {
	setDisplay: Dispatch<
		SetStateAction<{
			show: string;
		}>
	>;
	logo: string;
}

const IntroScreen: FC<Props> = ({ setDisplay, logo }) => {
	return (
		<div className="intro-screen">
			<section className="title">
				<img className="dog-logo" src={logo} alt="Dog Logo" />
				<h1 className="title-text">{"Dogs Playing Cards"}</h1>
			</section>
			<section className="options">
				<span className="option">
					<Button
						buttonText={"Pick A Card"}
						buttonColor={"#336699"}
						clickFunction={() => setDisplay({ show: "pick-a-card" })}
					/>
					<p className="description">
						{"Feeling lucky? Grab a single card from the deck."}
					</p>
				</span>
				<span className="option">
					<Button
						buttonText={"Hand Generator"}
						buttonColor={"#FAA300"}
						clickFunction={() => setDisplay({ show: "hand-generator" })}
					/>
					<p className="description">
						{"A random hand of cards with up to 8 players."}
					</p>
				</span>
			</section>
		</div>
	);
};

export default IntroScreen;
