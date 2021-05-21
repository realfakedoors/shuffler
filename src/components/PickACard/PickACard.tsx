import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";

import Button from "../Button/Button";
import Player from "../Player/Player";

import "./PickACard.css";

interface Props {
	setDisplay: Dispatch<
		SetStateAction<{
			show: string;
		}>
	>;
	allCards: Array<string>;
	allDogs: Array<string>;
}

const PickACard: FC<Props> = ({ setDisplay, allCards, allDogs }) => {
	const [pickedCard, setPickedCard] = useState<{ card: string }>({ card: "" });
	const [randomDog, setRandomDog] = useState<{ dog: string }>({ dog: "" });

	const collection = require("lodash/collection");

	useEffect(() => {
		shuffleAndPick();
		// eslint-disable-next-line
	}, []);

	function shuffleAndPick() {
		setPickedCard({ card: collection.sample(allCards) });
		setRandomDog({ dog: collection.sample(allDogs) });
	}

	return (
		<div className="pick-a-card">
			<Player dog={randomDog.dog} hand={[pickedCard.card]} />
			<section className="controls">
				<Button
					buttonText={"Pick Another Card?"}
					buttonColor={"#336699"}
					clickFunction={() => shuffleAndPick()}
				/>
				<Button
					buttonText={"Back"}
					buttonColor={"#9B3D12"}
					clickFunction={() => setDisplay({ show: "intro-screen" })}
				/>
			</section>
		</div>
	);
};

export default PickACard;
