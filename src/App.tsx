import { FC, useState } from "react";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import PickACard from "./components/PickACard/PickACard";
import HandGenerator from "./components/HandGenerator/HandGenerator";

import dogLogo from "./assets/dog_images/dog9.svg";
import allCards from "./assets/allCards";
import allDogs from "./assets/allDogs";
import "./assets/reset.css";
import "./assets/App.css";

const App: FC = () => {
	const [display, setDisplay] = useState<{ show: string }>({
		show: "intro-screen",
	});

	const currentDisplay = () => {
		switch (display.show) {
			case "intro-screen":
				return <IntroScreen setDisplay={setDisplay} logo={dogLogo} />;
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

	return <div className="app-container">{currentDisplay()}</div>;
};

export default App;
