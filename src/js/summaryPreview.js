import { product } from "./product";

export const updateSummaryPreview = (effectURLcode) => {
	const { printLocation, effect, price, blurPower } = product;
	const summaryLocationSpan = document.querySelector(
		".summary-preview__location"
	);
	const summaryEffectSpan = document.querySelector(".summary-preview__effect");
	const summaryCostSpan = document.querySelector(".summary-preview__cost");
	const printPreview = document.querySelector(".print-location-preview");
	const copyOfPrintPreview = printPreview.cloneNode(true);

	const blur = effect === "Rozmycie" ? ` ${blurPower}` : "";

	summaryLocationSpan.innerHTML = printLocation;
	summaryEffectSpan.innerHTML = effect + blur;
	summaryCostSpan.innerHTML = `${price} PLN`;

	// set print in summary preview
	const summaryPrintPreview = document.querySelector(".print-summary-preview");
	const summaryToRemove = document.querySelector(
		".print-summary-preview .print-location-preview"
	);

	if (summaryToRemove !== null) {
		summaryPrintPreview.removeChild(summaryToRemove);
	}
	summaryPrintPreview.appendChild(copyOfPrintPreview);

	// set chosen graphics
	const chosenGraphics = summaryPrintPreview.querySelectorAll("img");
	const effectData = effectURLcode !== undefined ? effectURLcode : "";
	chosenGraphics.forEach((e) => {
		e.src = `https://picsum.photos/id/${product.graphics}/170/170${effectData}`;
	});
};
