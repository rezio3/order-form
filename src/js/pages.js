import { summaryProduct } from "./summaryProduct";
import { previewsOnPages } from "./previewsOnPages";
import { pagesModifiers } from "./pagesModifiers";
import { finalOrderSummary } from "./finalOrderSummary";

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
		} else if (btn.target.name === "back" && pages.activePage === 2) {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		} else if (btn.target.name === "go-to-final-checkout") {
			pages.activePage = 7;
			finalOrderSummary.showFinalOrderSummary();
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
		console.log(activePage);
		console.log(finalOrderSummary.finalizationOfOrder);
		// in case when user reach finalization order
		// and go back to edit product settings
		if (activePage < 4 && finalOrderSummary.finalizationOfOrder) {
			pageButtonNext.classList.remove("navigate-buttons__btn--disabled");
			summaryPreview.classList.remove("summary-preview--disable");
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		} else if (activePage === 7) {
			// remove summary preview box and navigate buttons after editing
			const summaryPreview = document.querySelector(".summary-preview");
			pagesModifiers.hideNavigateButtonAtFinalOrderSummary(
				summaryPreview,
				pageButtonBack
			);

			// other modifiers when finalization order is not reached yet
		} else if (activePage === 4) {
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
