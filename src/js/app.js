import { product } from "./product";
import { updateSummaryPreview } from "./summaryPreview";
import { pages } from "./pages";
import { previewsOnPages } from "./previewsOnPages";
import { pagesModifiers } from "./pagesModifiers";
import { summaryProduct } from "./summaryProduct";
import { clientForm } from "./clientDataForm";
import { validateForm } from "./validateWholeForm";
import { delivery } from "./deliveryData";
import { validateAddressInputs } from "./validateAddressInputs";
import { finalOrderSummary } from "./finalOrderSummary";
import { createNewOrder } from "./order";
import { loadOrderInfoToThankYouPage } from "./thankYouPage";

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

// edit buttons on pages 4 and 7 - product summary and final summary
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
		if (finalOrderSummary.finalizationOfOrder) {
			pagesModifiers.showGoToFinalCheckoutButton();
		}
		// changing graphics when editing "choose effect" page
		if (item.target.name === "3") {
			console.log(product.graphics);
			previewsOnPages.setEffectPreviewImg();
		}
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
		pagesModifiers.goToCheckoutButtonSwitch();
	});
});

// Client data inputs handler
const clientDataInputs = document.querySelectorAll(".client-data-list__input");
clientDataInputs.forEach((e) => {
	e.addEventListener("input", (item) => {
		clientForm.handleFormInputs(item);
	});
});

// Form submit handler
const submitButton = {
	target: document.querySelector("#next-form-btn"),
};
const form = document.querySelector(".client-data-form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateForm();
	if (clientForm.isFormValid) {
		pages.changePage(submitButton);
	} else {
		// alert button animation at form page
		submitButton.target.classList.add("client-data-form__btn--alert");
		setTimeout(() => {
			submitButton.target.classList.remove("client-data-form__btn--alert");
		}, 500);
	}
});

// delivery method checkboxes
const deliveryCheckboxes = document.querySelectorAll(
	".delivery-wrapper .checkboxes-list__delivery-checkbox"
);
deliveryCheckboxes.forEach((e) => {
	e.addEventListener("change", (item) => {
		const deliveryMethod = item.target.getAttribute("data-delivery");
		delivery.method = deliveryMethod;
		if (deliveryMethod === "Wysyłka") {
			delivery.switchAddressFormIfDelivery("delivery");
		} else {
			delivery.switchAddressFormIfDelivery("pickup");
		}
	});
});

// Delivery address inputs handler
const deliveryAddressInputs = document.querySelectorAll(
	".delivery-form__input"
);
deliveryAddressInputs.forEach((e) => {
	e.addEventListener("input", (item) => {
		validateAddressInputs(item, "delivery address");
	});
});

// Submit delivery address handler
const submitDeliveryButton = {
	target: document.querySelector(".delivery-page__btn"),
};
submitDeliveryButton.target.addEventListener("click", () => {
	delivery.validateAddressForm();
	if (
		delivery.isDeliveryAddressValid ||
		delivery.method === "Odbiór osobisty"
	) {
		pages.changePage(submitDeliveryButton);
		finalOrderSummary.showFinalOrderSummary();
	} else {
		// alert button animation at delivery page
		submitDeliveryButton.target.classList.add("delivery-page__btn--alert");
		setTimeout(() => {
			submitDeliveryButton.target.classList.remove("delivery-page__btn--alert");
		}, 500);
	}
});

// delivery - the same address button
const sameAddressButton = document.querySelector(".same-address-btn");
sameAddressButton.addEventListener("click", delivery.setTheSameAddress);

// handle final approvals
const finalApprovalsCheckboxes = document.querySelectorAll(".final-approval");
finalApprovalsCheckboxes.forEach((e) => {
	e.addEventListener("change", (item) => {
		finalOrderSummary.validateFinalSummaryApprovals(item);
	});
});

// order submit button
const orderSubmitButton = {
	target: document.querySelector(".submit-order-btn"),
};

orderSubmitButton.target.addEventListener("click", () => {
	const order = createNewOrder({
		product,
		clientForm,
		delivery,
		finalOrderSummary,
	});
	console.log(order);
	pages.changePage(orderSubmitButton);
	loadOrderInfoToThankYouPage(order);
});

// Thank you page button - refreshes whole website
const keepBuyingButton = document.querySelector(".keep-buying-btn");
keepBuyingButton.addEventListener("click", () => {
	location.reload();
});
//
