import { clientForm } from "./clientDataForm";
import { regex } from "./regex";

const theSameAddressButton = document.querySelector(
	".checkboxes-list__item--smaller"
);

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

		const notificationSpan = document.querySelector(
			".delivery-page__notification"
		);
		if (option === "delivery") {
			deliveryForm.classList.add("delivery-form--visible");
			theSameAddressButton.classList.remove("checkboxes-list__item--hidden");
			notificationSpan.classList.remove("delivery-page__notification--hidden");
			delivery.isDeliveryAddressValid = false;
		} else if (option === "pickup") {
			deliveryForm.classList.remove("delivery-form--visible");
			theSameAddressButton.classList.add("checkboxes-list__item--hidden");
			notificationSpan.classList.add("delivery-page__notification--hidden");
			delivery.isDeliveryAddressValid = true;
		}
	},
	validateAddressForm: () => {
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

		const { street, building, flat, postalCode, city } = delivery.address;
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

		if (
			regexOneLetter.test(street) &&
			regexOneLetter.test(city) &&
			regexOneNumber.test(building) &&
			(regexOneNumber.test(flat) || flat === "") &&
			regexOneNumber.test(postalCode) &&
			postalCode.length > 4
		) {
			delivery.isDeliveryAddressValid = true;
		} else {
			delivery.isDeliveryAddressValid = false;
			return;
		}
	},

	setTheSameAddress: () => {
		const deliveryAddressInputs = {
			street: document.querySelector("#delivery-street"),
			building: document.querySelector("#delivery-building"),
			flat: document.querySelector("#delivery-flat"),
			postalCode: document.querySelector("#delivery-postalCode"),
			city: document.querySelector("#delivery-city"),
		};

		deliveryAddressInputs.street.value = `${clientForm.data.street}`;
		deliveryAddressInputs.building.value = `${clientForm.data.building}`;
		deliveryAddressInputs.flat.value = `${clientForm.data.flat}`;
		deliveryAddressInputs.postalCode.value = `${clientForm.data.postalCode}`;
		deliveryAddressInputs.city.value = `${clientForm.data.city}`;

		for (const key in delivery.address) {
			delivery.address[key] = clientForm.data[key];
		}

		delivery.validateAddressForm();

		for (const key in deliveryAddressInputs) {
			deliveryAddressInputs[key].classList.remove(
				"client-data-list__input--red"
			);
			deliveryAddressInputs[key].classList.add(
				"client-data-list__input--green"
			);
		}
	},
};
