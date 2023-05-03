import { clientForm } from "./clientDataForm";
import { regex } from "./regex";
import { previewsOnPages } from "./previewsOnPages";

export const delivery = {
	method: "Odbiór osobisty",
	address: {
		street: "",
		building: "",
		flat: "",
		postalCode: "",
		city: "",
	},
	isDeliveryAddressValid: true,

	switchAddressFormIfDelivery: (option) => {
		const deliveryForm = document.querySelector(".delivery-form");
		const theSameAddressCheckbox = document.querySelector(
			".checkboxes-list__item--smaller"
		);
		const notificationSpan = document.querySelector(
			".delivery-page__notification"
		);
		if (option === "delivery") {
			deliveryForm.classList.add("delivery-form--visible");
			theSameAddressCheckbox.classList.remove("checkboxes-list__item--hidden");
			notificationSpan.classList.remove("delivery-page__notification--hidden");
			previewsOnPages.displayDeliveryAddressAtDeliveryPage(false);
			delivery.isDeliveryAddressValid = false;
		} else if (option === "pickup") {
			deliveryForm.classList.remove("delivery-form--visible");
			theSameAddressCheckbox.classList.add("checkboxes-list__item--hidden");
			notificationSpan.classList.add("delivery-page__notification--hidden");
			previewsOnPages.displayDeliveryAddressAtDeliveryPage(false);
			delivery.isDeliveryAddressValid = true;
		} else if (option === "delivery-same-address") {
			deliveryForm.classList.remove("delivery-form--visible");
			notificationSpan.classList.add("delivery-page__notification--hidden");
			delivery.isDeliveryAddressValid = true;
			previewsOnPages.displayDeliveryAddressAtDeliveryPage(true);
		}
	},
	validateAddressForm: () => {
		const { street, building, flat, postalCode, city } = delivery.address;
		// red highlight to all empty inputs after submit
		for (const key in delivery.address) {
			const value = delivery.address[key];
			if (value === "" && key !== "flat") {
				switch (value) {
					case "":
						clientForm.turnRed(document.querySelector(`#delivery-${key}`));
						break;
				}
			}
		}

		// set isFormValid, break loop and leave whole function if some input is empty
		for (const key in delivery.address) {
			const value = delivery.address[key];

			if (value !== "" || key === "flat") {
				delivery.isDeliveryAddressValid = true;
			} else {
				delivery.isDeliveryAddressValid = false;
				return;
			}
		}

		const { regexOneLetter, regexOneNumber } = regex;

		if (regexOneLetter.test(street) && regexOneLetter.test(city)) {
			delivery.isDeliveryAddressValid = true;
		} else {
			delivery.isDeliveryAddressValid = false;
			return;
		}
		if (regexOneNumber.test(building)) {
			delivery.isDeliveryAddressValid = true;
		} else {
			delivery.isDeliveryAddressValid = false;
			return;
		}
		if (regexOneNumber.test(flat) || flat === "") {
			delivery.isDeliveryAddressValid = true;
		} else {
			delivery.isDeliveryAddressValid = false;
			return;
		}
		if (regexOneNumber.test(postalCode) && postalCode.length > 4) {
			delivery.isDeliveryAddressValid = true;
		} else {
			delivery.isDeliveryAddressValid = false;
			return;
		}
	},
};
