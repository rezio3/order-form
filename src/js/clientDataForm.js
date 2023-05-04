import { regex } from "./regex";
import { validateAddressInputs } from "./validateDeliveryAddressInputs";

export const clientForm = {
	data: {
		name: "",
		surname: "",
		street: "",
		building: "",
		flat: "",
		postalCode: "",
		city: "",
		phone: "",
		email: "",
	},
	isFormValid: false,

	handleFormInputs: (item) => {
		clientForm.data[item.target.name] = item.target.value;

		const { id, value } = item.target;
		const { turnGreen, turnRed } = clientForm;

		const {
			regexOneLetter,
			regexOnlyNumbersAndMinus,
			regexOneDot,
			regexOneAt,
		} = regex;

		// check name and surname
		// at least one letter
		if (id === "client-name" || id === "client-surname") {
			if (regexOneLetter.test(value)) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}

			// check phone number
			// only numbers and "-"
			// can't be empty
		} else if (id === "client-phone") {
			if (regexOnlyNumbersAndMinus.test(value) && value.length > 8) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}
			// check email
			// must contain "@" and "."
		} else if (id === "client-email") {
			if (regexOneAt.test(value) && regexOneDot.test(value)) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}
		} else {
			validateAddressInputs(item, "client address");
		}
	},
	turnGreen: (item) => {
		item.classList.remove("client-data-list__input--red");
		item.classList.add("client-data-list__input--green");
	},
	turnRed: (item) => {
		item.classList.remove("client-data-list__input--green");
		item.classList.add("client-data-list__input--red");
	},
	removeColor: (item) => {
		item.classList.remove("client-data-list__input--green");
		item.classList.remove("client-data-list__input--red");
	},
};
