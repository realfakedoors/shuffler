import { FC, useState } from "react";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import PickACard from "./components/PickACard/PickACard";
import HandGenerator from "./components/HandGenerator/HandGenerator";

import allCards from "./assets/allCards";
import allDogs from "./assets/allDogs";
import "./assets/reset.css";
import "./assets/App.css";

const App: FC = () => {
	const [display, setDisplay] = useState<{ show: string }>({
		show: "pick-a-card",
	});

	const showDisplay = () => {
		switch (display.show) {
			case "intro-screen":
				return <IntroScreen setDisplay={setDisplay} />;
			case "pick-a-card":
				return (
					<PickACard
						setDisplay={setDisplay}
						allCards={allCards}
						allDogs={allDogs}
					/>
				);
			case "hand-generator":
				return (
					<HandGenerator
						setDisplay={setDisplay}
						allCards={allCards}
						allDogs={allDogs}
					/>
				);
			default:
				return;
		}
	};

	return <div className="app-container">{showDisplay()}</div>;
};

export default App;
