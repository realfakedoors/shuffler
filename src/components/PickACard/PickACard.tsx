import { FC, Dispatch, SetStateAction } from "react";

import Button from "../Button/Button";

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
	return (
		<div className="pick-a-card">
			<div className="buttons">
				<Button
					buttonText={"Pick Another Card?"}
					buttonColor={"#336699"}
					clickFunction={() => null}
				/>
				<Button
					buttonText={"Back"}
					buttonColor={"#9B3D12"}
					clickFunction={() => setDisplay({ show: "intro-screen" })}
				/>
			</div>
		</div>
	);
};

export default PickACard;
