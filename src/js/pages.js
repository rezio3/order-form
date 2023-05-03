import { summaryProduct } from "./summaryProduct";
import { previewsOnPages } from "./previewsOnPages";
import { pagesModifiers } from "./pagesModifiers";

const pagesElements = document.querySelectorAll(".form-page");
const pageButtonBack = document.querySelector("#back-btn");
const pageButtonNext = document.querySelector("#next-btn");

export const pages = {
	activePage: 1,
	changePage: (btn) => {
		if (btn.target.name === "next") {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
			pages.activePage += 1;
			if (pages.activePage === 4) {
				summaryProduct.setSummaryProductPage();
			}
		} else if (btn.target.name === "back" && pages.activePage > 2) {
			pages.activePage -= 1;
		} else {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		}
		pages.changePageDisplay(pages.activePage);
		if (pages.activePage === 3) {
			previewsOnPages.setEffectPreviewImg();
		}
	},
	changePageDisplay: (activePage) => {
		const summaryPreview = document.querySelector(".summary-preview");
		const redNotification = document.querySelector(
			".navigate-section__notification"
		);
		if (activePage === 4) {
			summaryPreview.classList.add("summary-preview--disable");
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
			pagesModifiers.showCheckoutButton();
			pagesModifiers.goToCheckoutButtonSwitch();
		} else if (activePage >= 5) {
			pageButtonNext.classList.add("navigate-buttons__btn--disabled");
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		} else {
			pagesModifiers.showNextButton();
			summaryPreview.classList.remove("summary-preview--disable");
			redNotification.classList.add("navigate-section__notification--disabled");
		}
		pagesElements.forEach((e) => e.classList.remove("form-page--active"));
		pagesElements[activePage - 1].classList.add("form-page--active");
	},
};
