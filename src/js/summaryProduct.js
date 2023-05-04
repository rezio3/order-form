import { product } from "./product";

// object of product summary on page 4 including choices' approvals
export const summaryProduct = {
	isPrintLocationApproved: false,
	isGraphicsApproved: false,
	isEffectApproved: false,

	setSummaryProductPage: () => {
		// set t-shirt img
		const printPreview = document.querySelector(".print-location-preview");
		const copyOfPrintPreview = printPreview.cloneNode(true);
		copyOfPrintPreview.classList.add("shirt-preview-summary-product");
		const tshirtSummaryImg = document.querySelector(".t-shirt-summary-view");
		const previewToRemove = tshirtSummaryImg.querySelector(
			".shirt-preview-summary-product"
		);

		if (previewToRemove !== null) {
			tshirtSummaryImg.removeChild(previewToRemove);
		}
		tshirtSummaryImg.appendChild(copyOfPrintPreview);

		// set particular graphics on t-shirt
		const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
		const effectData = product.effectCode;
		chosenGraphics.forEach((e) => {
			e.src = `https://picsum.photos/id/${product.graphics}/50/50${effectData}`;
		});

		// set chosen print location
		const printLocationSpan = document.querySelector(
			".summary-setting-and-approval__print-location"
		);
		printLocationSpan.innerHTML = product.printLocation;

		// set chosen graphics
		const graphicsSummaryImg = document.querySelector(
			"#summary-product-graphics"
		);
		graphicsSummaryImg.src = `https://picsum.photos/id/${product.graphics}/170/170${product.effectCode}`;
		// set chosen effect
		const effectSpan = document.querySelector(
			".summary-setting-and-approval__effect"
		);
		effectSpan.innerHTML = product.effect + " " + product.blurPower;
		// set prices
		const printLocationPriceSpan = document.querySelector(
			".summary-setting-and-approval__print-location-price"
		);
		const effectPriceSpan = document.querySelector(
			".summary-setting-and-approval__effect-price"
		);
		const wholePriceSpan = document.querySelector(
			".summary-product-details__price"
		);
		const printLocationPrice =
			product.printLocation === "Przód i tył" ? 20 : 10;
		printLocationPriceSpan.innerHTML = `${printLocationPrice},00 PLN`;
		let effectPrice;
		if (product.effect === "Brak") {
			effectPrice = 0;
		} else if (product.effect === "Czarno-białe") {
			effectPrice = 2;
		} else if (product.effect === "Rozmycie") {
			effectPrice = 3;
		}
		effectPriceSpan.innerHTML = `${effectPrice},00 PLN`;
		const wholePrice = printLocationPrice + effectPrice;
		wholePriceSpan.innerHTML = `${wholePrice},00 PLN`;
	},
	validateProductSummaryCheckboxes: (item) => {
		summaryProduct.isPrintLocationApproved =
			item.target.id === "summary-print-location"
				? item.target.checked
				: summaryProduct.isPrintLocationApproved;
		summaryProduct.isGraphicsApproved =
			item.target.id === "summary-graphics"
				? item.target.checked
				: summaryProduct.isGraphicsApproved;
		summaryProduct.isEffectApproved =
			item.target.id === "summary-effect"
				? item.target.checked
				: summaryProduct.isEffectApproved;
	},
};
