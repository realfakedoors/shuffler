import { FC } from "react";

import "./SelectDropdown.css";

interface Props {
	name: string;
	label: string;
	range: number;
}

const SelectDropdown: FC<Props> = ({ name, label, range }) => {
	const _ = require("lodash");

	return (
		<span className="select-dropdown">
			<label htmlFor={name} className={"label"}>
				{label}
			</label>
			<select name={name} id={name} className="select" data-testid={name}>
				{_.range(1, range).map((i: number) => {
					return (
						<option key={i} value={i}>
							{i}
						</option>
					);
				})}
			</select>
		</span>
	);
};

export default SelectDropdown;
