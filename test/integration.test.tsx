import React from "react";
import {
	render,
	screen,
	fireEvent,
	getByText,
	waitFor,
	cleanup,
} from "@testing-library/react";

import App from "../src/App";

describe("Dogs Playing Cards", () => {
	afterEach(() => {
		cleanup;
	});

	test("Pick a single card", async () => {
		const { findByText, queryAllByTestId } = render(<App />);

		expect(await findByText("Dogs Playing Cards"));

		// Only show one dog and one card at any given time.
		fireEvent.click(await findByText("Pick A Card"));
		expect(await queryAllByTestId("card").length).toEqual(1);
		expect(await queryAllByTestId("dog").length).toEqual(1);
		fireEvent.click(await findByText("Pick Another Card?"));
		expect(await queryAllByTestId("card").length).toEqual(1);
		expect(await queryAllByTestId("dog").length).toEqual(1);

		fireEvent.click(await findByText("Back"));
		expect(await findByText("Dogs Playing Cards"));
	});

	test("Generate a hand of cards with up to 8 players", async () => {
		const { findByText, findByTestId, queryAllByTestId } = render(<App />);

		expect(await findByText("Dogs Playing Cards"));

		fireEvent.click(await findByText("Hand Generator"));

		// 1 dog, 2 cards = 2 total cards.
		fireEvent.change(await findByTestId("hand-size"), { target: { value: 2 } });
		fireEvent.click(await findByText("Deal"));
		expect(await queryAllByTestId("dog").length).toEqual(1);
		expect(await queryAllByTestId("card").length).toEqual(2);

		// 2 dogs, 3 cards each = 6 total cards.
		fireEvent.change(await findByTestId("number-of-dogs"), {
			target: { value: 2 },
		});
		fireEvent.change(await findByTestId("hand-size"), { target: { value: 3 } });
		fireEvent.click(await findByText("Deal"));
		expect(await queryAllByTestId("dog").length).toEqual(2);
		expect(await queryAllByTestId("card").length).toEqual(6);

		// 5 dogs, 7 cards each = 35 total cards.
		fireEvent.change(await findByTestId("number-of-dogs"), {
			target: { value: 5 },
		});
		fireEvent.change(await findByTestId("hand-size"), { target: { value: 7 } });
		fireEvent.click(await findByText("Deal"));
		expect(await queryAllByTestId("dog").length).toEqual(5);
		expect(await queryAllByTestId("card").length).toEqual(35);

		// 8 dogs, 1 card each = 8 total cards.
		fireEvent.change(await findByTestId("number-of-dogs"), {
			target: { value: 8 },
		});
		fireEvent.change(await findByTestId("hand-size"), { target: { value: 1 } });
		fireEvent.click(await findByText("Deal"));
		expect(await queryAllByTestId("dog").length).toEqual(8);
		expect(await queryAllByTestId("card").length).toEqual(8);

		fireEvent.click(await findByText("Back"));
		expect(await findByText("Dogs Playing Cards"));
	});
});
