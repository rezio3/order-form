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
	goToCheckoutButtonDisable: () => {
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
};
