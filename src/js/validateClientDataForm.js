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
		regexOnlyNumbersAndMinus,
		regexOneDot,
		regexOneAt,
	} = regex;

	if (
		regexOneLetter.test(name) &&
		regexOneLetter.test(surname) &&
		regexOneLetter.test(street) &&
		regexOneLetter.test(city) &&
		regexOneNumber.test(building) &&
		(regexOneNumber.test(flat) || flat === "") &&
		regexOneNumber.test(postalCode) &&
		postalCode.length > 4 &&
		regexOnlyNumbersAndMinus.test(phone) &&
		phone.length > 8 &&
		regexOneAt.test(email) &&
		regexOneDot.test(email)
	) {
		clientForm.isFormValid = true;
	} else {
		clientForm.isFormValid = false;
		return;
	}
};
