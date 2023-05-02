import { regex } from "./regex";

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
		const { turnGreen, turnRed, removeColor } = clientForm;

		const {
			regexOneLetter,
			regexOneNumber,
			regexOnlyNumbers,
			regexOneDot,
			regexOneAt,
		} = regex;

		// check name, surname, street and city
		// at least one letter
		if (
			id === "client-name" ||
			id === "client-surname" ||
			id === "client-street" ||
			id === "client-city"
		) {
			if (regexOneLetter.test(value)) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}

			// check building number
			// at least one number
		} else if (id === "client-building") {
			if (regexOneNumber.test(value)) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}
			// check flat number
			// at least one number
			// can be empty
		} else if (id === "client-flat") {
			if (regexOneNumber.test(value)) {
				turnGreen(item.target);
			} else if (value === "") {
				removeColor(item.target);
			} else {
				turnRed(item.target);
			}
			// check postal code
			// can't be empty
		} else if (id === "client-postalCode") {
			if (value !== "" && value.length > 4 && regexOneNumber.test(value)) {
				turnGreen(item.target);
			} else {
				turnRed(item.target);
			}
			// check phone number
			// only numbers
			// can't be empty
		} else if (id === "client-phone") {
			if (regexOnlyNumbers.test(value) && value.length > 8) {
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
