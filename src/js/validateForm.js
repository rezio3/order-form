import { clientForm } from "./clientDataForm";
import { regex } from "./regex";

export const validateForm = () => {
	const {
		name,
		surname,
		street,
		building,
		flat,
		postalCode,
		city,
		phone,
		email,
	} = clientForm.data;

	// red highlight to all empty inputs after submit
	for (const key in clientForm.data) {
		const value = clientForm.data[key];
		if (value === "" && key !== "flat") {
			switch (value) {
				case "":
					clientForm.turnRed(document.querySelector(`#client-${key}`));
					break;
			}
		}
	}

	// set isFormValid, break loop and leave whole function if some input is empty
	for (const key in clientForm.data) {
		const value = clientForm.data[key];

		if (value !== "" || key === "flat") {
			clientForm.isFormValid = true;
		} else {
			clientForm.isFormValid = false;
			return;
		}
	}

	const {
		regexOneLetter,
		regexOneNumber,
		regexOnlyNumbers,
		regexOneDot,
		regexOneAt,
	} = regex;

	// specific checking of inputs
	if (
		regexOneLetter.test(name) &&
		regexOneLetter.test(surname) &&
		regexOneLetter.test(street) &&
		regexOneLetter.test(city)
	) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
	if (regexOneNumber.test(building)) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
	if (regexOneNumber.test(flat) || flat === "") {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
	if (regexOneNumber.test(postalCode) && postalCode.length > 4) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
	if (regexOnlyNumbers.test(phone) && phone.length > 8) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
	if (regexOneAt.test(email) && regexOneDot.test(email)) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
};
