import { updateSummaryPreview } from "./summaryPreview";
import { previewsOnPages } from "./previewsOnPages";

const prices = {
	frontOrBack: 10,
	frontAndBack: 20,
	grayscaleEffect: 2,
	blurEffect: 3,
};

export const product = {
	type: "T-shirt",
	printLocation: "Przód",
	effect: "Brak",
	price: 10,
	graphics: 110,
	blurPower: "",
	setPrintLocation: (location) => {
		product.printLocation = location;
		product.setPrice();
		updateSummaryPreview();
	},
	setGraphics: (e) => {
		product.graphics += e.target.name === "right" ? 1 : -1;
		previewsOnPages.setGraphicsPreview();
		updateSummaryPreview();
	},

	setEffect: (effect) => {
		product.effect = effect;
		product.setPrice();
		updateSummaryPreview();
	},

	setBlurPower: (powerUpdate) => {
		if (product.effect === "Rozmycie") {
			product.blurPower = powerUpdate;
		} else {
			product.blurPower = "";
		}
		previewsOnPages.setEffectPreviewImg();
	},

	setPrice: () => {
		product.price =
			product.printLocation === "Przód i tył"
				? prices.frontAndBack
				: prices.frontOrBack;
		if (product.effect === "Czarno-białe") {
			product.price += prices.grayscaleEffect;
		} else if (product.effect === "Rozmycie") {
			product.price += prices.blurEffect;
		}
	},
};
