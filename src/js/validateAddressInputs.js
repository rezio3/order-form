import { regex } from "./regex";
import { clientForm } from "./clientDataForm";
import { delivery } from "./deliveryData";

export const validateAddressInputs = (item) => {
	delivery.address[item.target.name] = item.target.value;
	const { id, value } = item.target;
	const { turnGreen, turnRed, removeColor } = clientForm;

	const { regexOneLetter, regexOneNumber } = regex;

	// check street and city
	// at least one letter
	if (
		id === "client-street" ||
		id === "client-city" ||
		id === "delivery-street" ||
		id === "delivery-city"
	) {
		if (regexOneLetter.test(value)) {
			turnGreen(item.target);
		} else {
			turnRed(item.target);
		}
		// check building number
		// at least one number
	} else if (id === "client-building" || id === "delivery-building") {
		if (regexOneNumber.test(value)) {
			turnGreen(item.target);
		} else {
			turnRed(item.target);
		}
		// check flat number
		// at least one number
		// can be empty
	} else if (id === "client-flat" || id === "delivery-flat") {
		if (regexOneNumber.test(value)) {
			turnGreen(item.target);
		} else if (value === "") {
			removeColor(item.target);
		} else {
			turnRed(item.target);
		}
		// check postal code
		// can't be empty
	} else if (id === "client-postalCode" || id === "delivery-postalCode") {
		if (value !== "" && value.length > 4 && regexOneNumber.test(value)) {
			turnGreen(item.target);
		} else {
			turnRed(item.target);
		}
	}
};
