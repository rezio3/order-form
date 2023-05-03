import { clientForm } from "./clientDataForm";
import { regex } from "./regex";
import { previewsOnPages } from "./previewsOnPages";
import { validateAddressInputs } from "./validateAddressInputs";

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

	setTheSameAddress: () => {
		// ZMNIEJSZYĆ KOD !!!!!
		const streetDevlieryInput = document.querySelector("#delivery-street");
		const buildingDevlieryInput = document.querySelector("#delivery-building");
		const flatDevlieryInput = document.querySelector("#delivery-flat");
		const postalCodeDevlieryInput = document.querySelector(
			"#delivery-postalCode"
		);
		const cityDevlieryInput = document.querySelector("#delivery-city");
		streetDevlieryInput.value = `${clientForm.data.street}`;
		buildingDevlieryInput.value = `${clientForm.data.building}`;
		flatDevlieryInput.value = `${clientForm.data.flat}`;
		postalCodeDevlieryInput.value = `${clientForm.data.postalCode}`;
		cityDevlieryInput.value = `${clientForm.data.city}`;

		delivery.address.street = clientForm.data.street;
		delivery.address.building = clientForm.data.building;
		delivery.address.flat = clientForm.data.flat;
		delivery.address.postalCode = clientForm.data.postalCode;
		delivery.address.city = clientForm.data.city;
		delivery.validateAddressForm();
		streetDevlieryInput.classList.remove("client-data-list__input--red");
		buildingDevlieryInput.classList.remove("client-data-list__input--red");
		flatDevlieryInput.classList.remove("client-data-list__input--red");
		postalCodeDevlieryInput.classList.remove("client-data-list__input--red");
		cityDevlieryInput.classList.remove("client-data-list__input--red");
		streetDevlieryInput.classList.add("client-data-list__input--green");
		buildingDevlieryInput.classList.add("client-data-list__input--green");
		flatDevlieryInput.classList.add("client-data-list__input--green");
		postalCodeDevlieryInput.classList.add("client-data-list__input--green");
		cityDevlieryInput.classList.add("client-data-list__input--green");
	},
};
