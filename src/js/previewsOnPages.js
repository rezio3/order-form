import { updateSummaryPreview } from "./summaryPreview";
import { product } from "./product";
import { clientForm } from "./clientDataForm";

const imgPreview = document.querySelector(".print-location-preview__print-img");
const frontShirt = document.querySelector(
	".print-location-preview__shirt-front"
);
const backShirt = document.querySelector(".print-location-preview__shirt-back");

// object of previews on every page
export const previewsOnPages = {
	setLocationPreviewImg: () => {
		const { printLocation } = product;
		if (printLocation === "Przód") {
			backShirt.innerHTML = "";
			frontShirt.appendChild(imgPreview);
		} else if (printLocation === "Tył") {
			frontShirt.innerHTML = "";
			backShirt.appendChild(imgPreview);
		} else if (printLocation === "Przód i tył") {
			const imgClone = imgPreview.cloneNode(true);
			frontShirt.appendChild(imgPreview);
			backShirt.appendChild(imgClone);
		}
	},
	setEffectPreviewImg: () => {
		const effectPreviewImg = document.querySelector("#effect-preview");
		let effect;
		let blur;
		if (product.effect === "Czarno-białe") {
			blur = "";
			effect = "?grayscale";
		} else if (product.effect === "Rozmycie") {
			blur = `=${product.blurPower}`;
			effect = "?blur";
		} else {
			blur = "";
			effect = "";
		}
		product.effectCode = `${effect + blur}`;
		effectPreviewImg.src = `https://picsum.photos/id/${
			product.graphics
		}/170/170${effect + blur}`;
		updateSummaryPreview(product.effectCode);
	},
	setGraphicsPreview: () => {
		const graphicsImg = document.querySelector(".choose-graphics-img");
		graphicsImg.src = `https://picsum.photos/id/${product.graphics}/170/170`;
	},
};
