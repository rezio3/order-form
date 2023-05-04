import { finalOrderSummary } from "./finalOrderSummary";
import { product } from "./product";
import { summaryProduct } from "./summaryProduct";

const pageButtonNext = document.querySelector("#next-btn");

export const pagesModifiers = {
	setBlurPowerSetting: (effect) => {
		const blurPowerBlock = document.querySelector(".select-blur-power");
		const blurPower = document.querySelector(
			".select-blur-power__blur-power-number"
		);

		if (effect === "Rozmycie") {
			blurPowerBlock.classList.add("select-blur-power--active");
			product.setBlurPower(blurPower.innerHTML);
		} else {
			product.blurPower = "";
			blurPowerBlock.classList.remove("select-blur-power--active");
		}
	},
	goToCheckoutButtonSwitch: () => {
		const redNotification = document.querySelector(
			".navigate-section__notification"
		);
		const { isPrintLocationApproved, isGraphicsApproved, isEffectApproved } =
			summaryProduct;
		if (isPrintLocationApproved && isGraphicsApproved && isEffectApproved) {
			redNotification.classList.add("navigate-section__notification--disabled");
			pageButtonNext.disabled = false;
		} else {
			redNotification.classList.remove(
				"navigate-section__notification--disabled"
			);
			pageButtonNext.disabled = true;
		}
	},
	showCheckoutButton: () => {
		pageButtonNext.innerHTML =
			"Do kasy <span class='material-symbols-outlined navigate-buttons__arrow'>chevron_right</span>";
	},
	showNextButton: () => {
		pageButtonNext.innerHTML =
			"Dalej <span class='material-symbols-outlined navigate-buttons__arrow'>chevron_right</span>";
	},
	submitOrderButtonSwitch: (btn) => {
		const {
			isPrintLocationApproved,
			isGraphicsApproved,
			isEffectApproved,
			isClientDataApproved,
			isDeliveryApproved,
		} = finalOrderSummary;
		const redNotification = document.querySelector(".final-red-notification");
		if (
			isPrintLocationApproved &&
			isGraphicsApproved &&
			isEffectApproved &&
			isClientDataApproved &&
			isDeliveryApproved
		) {
			btn.disabled = false;
			redNotification.classList.add("final-red-notification--hidden");
		} else {
			redNotification.classList.remove("final-red-notification--hidden");
			btn.disabled = true;
		}
	},
	showGoToFinalCheckoutButton: () => {
		const nextButtonElement = document.querySelector("#next-btn");
		nextButtonElement.name = "go-to-final-checkout";
	},
	hideNavigateButtonAtFinalOrderSummary: (summaryPreview, pageButtonBack) => {
		summaryPreview.classList.add("summary-preview--disable");
		pageButtonNext.classList.add("navigate-buttons__btn--disabled");
		pageButtonBack.classList.add("navigate-buttons__btn--disabled");
	},
};
