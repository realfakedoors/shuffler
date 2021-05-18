import { FC, Dispatch, SetStateAction } from "react";

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

const HandGenerator: FC<Props> = ({ setDisplay, allCards, allDogs }) => {
	return (
		<div className="hand-generator">
			<div className="buttons">
				<Button
					buttonText={"Another Hand?"}
					buttonColor={"#FAA300"}
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

export default HandGenerator;
