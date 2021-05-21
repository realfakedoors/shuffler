import { FC } from "react";

import "./Player.css";

interface Props {
	dog: string;
	hand: Array<string>;
}

const Player: FC<Props> = ({ dog, hand }) => {
	return (
		<span className="player">
			<div className="hand">
				{hand.map((card, i) => {
					return (
						<span key={i} className="card-container">
							<img className="card" alt="Card" src={card} data-testid="card" />
						</span>
					);
				})}
			</div>
			<img className="dog" alt="Dog" src={dog} data-testid="dog" />
		</span>
	);
};

export default Player;
