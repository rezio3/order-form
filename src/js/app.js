import { product } from "./product";
import { updateSummaryPreview } from "./summaryPreview";
import { pages } from "./pages";
import { previewsOnPages } from "./previewsOnPages";
import { pagesModifiers } from "./pagesModifiers";
import { summaryProduct } from "./summaryProduct";

updateSummaryPreview();

// Page nav buttons
const pageButtonNext = document.querySelector("#next-btn");
const pageButtonBack = document.querySelector("#back-btn");

pageButtonBack.addEventListener("click", pages.changePage);
pageButtonNext.addEventListener("click", pages.changePage);

// Graphics selection arrow-buttons on page 2
const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");

chooseGraphicsBtnLeft.addEventListener("click", product.setGraphics);
chooseGraphicsBtnRight.addEventListener("click", product.setGraphics);

// Blur buttons
const blurChangeButtons = document.querySelectorAll(
	".select-blur-power__blur-power-button"
);
const powerNumberSpan = document.querySelector(
	".select-blur-power__blur-power-number"
);
blurChangeButtons.forEach((e) => {
	e.addEventListener("click", (item) => {
		let blurPowerNumber = Number(product.blurPower);
		if (item.target.innerHTML === "-" && blurPowerNumber > 1) {
			blurPowerNumber -= 1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		} else if (item.target.innerHTML === "+" && blurPowerNumber < 10) {
			blurPowerNumber += 1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		}
		product.setBlurPower(blurPowerNumber);
	});
});

// choose print location inputs on page 1
const inputsChooseLocation = document.querySelectorAll(
	".choose-print-location .checkboxes-list__checkbox"
);
inputsChooseLocation.forEach((e) => {
	e.addEventListener("change", (item) => {
		const location = item.target.getAttribute("data-location");
		product.setPrintLocation(location);
		previewsOnPages.setLocationPreviewImg();
		updateSummaryPreview();
	});
});

// choose effect inputs on page 3
const inputsChooseEffect = document.querySelectorAll(
	".choose-effect .checkboxes-list__checkbox"
);
inputsChooseEffect.forEach((e) => {
	e.addEventListener("change", (item) => {
		const effect = item.target.getAttribute("data-effect");
		product.setEffect(effect);
		previewsOnPages.setEffectPreviewImg();
		pagesModifiers.setBlurPowerSetting(effect);
	});
});

// edit buttons on page 4 - product summary
const editButtons = document.querySelectorAll(
	".summary-setting-and-approval__edit-btn"
);
editButtons.forEach((e) => {
	e.addEventListener("click", (item) => {
		pageButtonNext.disabled = false;
		pages.activePage = Number(item.target.name);
		if (pages.activePage !== 1) {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
		}
		pages.changePageDisplay(pages.activePage);
	});
});

// approval product settings on page 4
const approveCheckboxes = document.querySelectorAll(
	".summary-setting-and-approval__checkbox"
);
approveCheckboxes.forEach((e) => {
	e.addEventListener("change", (item) => {
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
		pagesModifiers.goToCheckoutButtonDisable();
	});
});
