import { FC, Dispatch, SetStateAction, useState } from "react";

import Player from "../Player/Player";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import Button from "../Button/Button";

import "./HandGenerator.css";

interface Props {
	setDisplay: Dispatch<
		SetStateAction<{
			show: string;
		}>
	>;
	allCards: Array<string>;
	allDogs: Array<string>;
}

interface DogWithCards {
	avatar: string;
	hand: Array<string>;
}

const HandGenerator: FC<Props> = ({ setDisplay, allCards, allDogs }) => {
	const [dogsWithCards, setDogsWithCards] = useState<{ dogs: DogWithCards[] }>({
		dogs: [],
	});

	const _ = require("lodash");

	function dealNewHand() {
		// Generate an array of randomized dog objects with random cards.
		const numberOfDogs = parseInt(
			(document.getElementById("number-of-dogs") as HTMLSelectElement).value
		);
		const handSize = parseInt(
			(document.getElementById("hand-size") as HTMLSelectElement).value
		);

		const randomDogs = _.sampleSize(allDogs, numberOfDogs);
		const dealtCards = _.sampleSize(allCards, handSize * numberOfDogs);
		const randomHands = _.chunk(dealtCards, handSize);
		const dealtHands = randomDogs.map((dogIcon: string, i: number) => {
			return {
				avatar: dogIcon,
				hand: randomHands[i],
			};
		});

		setDogsWithCards({ dogs: dealtHands });
	}

	return (
		<div className="hand-generator">
			<section className="dogs-with-cards">
				{dogsWithCards.dogs.map((dog: DogWithCards, i: number) => {
					return <Player key={i} dog={dog.avatar} hand={dog.hand} />;
				})}
			</section>
			<section className="controls">
				<SelectDropdown name={"number-of-dogs"} label={"Dogs"} range={9} />
				<SelectDropdown name={"hand-size"} label={"Hand Size"} range={8} />
				<Button
					buttonText={"Deal"}
					buttonColor={"#FAA300"}
					clickFunction={() => dealNewHand()}
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

export default HandGenerator;
