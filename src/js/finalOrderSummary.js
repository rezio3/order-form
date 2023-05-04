import { clientForm } from "./clientDataForm";
import { delivery } from "./deliveryData";
import { product } from "./product";
import { pagesModifiers } from "./pagesModifiers";

export const finalOrderSummary = {
	finalizationOfOrder: false,
	isPrintLocationApproved: true,
	isGraphicsApproved: true,
	isEffectApproved: true,
	isClientDataApproved: false,
	isDeliveryApproved: false,

	showFinalOrderSummary: () => {
		// set t-shirt view at final summary
		const printPreview = document.querySelector(".print-location-preview");
		const copyOfPrintPreview = printPreview.cloneNode(true);
		copyOfPrintPreview.classList.add("shirt-preview-summary-product");
		const tshirtSummaryImg = document.querySelector(
			".t-shirt-final-summary-view"
		);
		const previewToRemove = tshirtSummaryImg.querySelector(
			".shirt-preview-summary-product"
		);
		if (previewToRemove !== null) {
			tshirtSummaryImg.removeChild(previewToRemove);
		}
		tshirtSummaryImg.appendChild(copyOfPrintPreview);

		// set particular graphics on t-shirt at final summary
		const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
		const effectData = product.effectCode;
		chosenGraphics.forEach((e) => {
			e.src = `https://picsum.photos/id/${product.graphics}/50/50${effectData}`;
		});

		// set print location at final summary
		const printLocationFinalSummary = document.querySelector(
			".final-summary-setting-and-approval__print-location"
		);
		printLocationFinalSummary.innerHTML = `${product.printLocation}`;

		// set chosen graphics at final summary
		const graphicsSummaryImg = document.querySelector(
			"#final-summary-product-graphics"
		);
		graphicsSummaryImg.src = `https://picsum.photos/id/${product.graphics}/170/170${product.effectCode}`;

		// set chosen effect at final summary
		const effectSpan = document.querySelector(
			".final-summary-setting-and-approval__effect"
		);
		effectSpan.innerHTML = product.effect + " " + product.blurPower;

		// set prices
		const printLocationPriceSpan = document.querySelector(
			".final-summary-setting-and-approval__print-location-price"
		);
		const effectPriceSpan = document.querySelector(
			".final-summary-setting-and-approval__effect-price"
		);
		const printLocationPrice =
			product.printLocation === "Przód i tył" ? 20 : 10;
		printLocationPriceSpan.innerHTML = `${printLocationPrice},00 PLN`;
		let effectPrice;
		if (product.effect === "Brak") {
			effectPrice = 0;
		} else if (product.effect === "Czarno-białe") {
			effectPrice = 2;
		} else if (product.effect === "Rozmycie") {
			effectPrice = 3;
		}
		effectPriceSpan.innerHTML = `${effectPrice},00 PLN`;

		// show client's data
		// name and surname
		const clientsNameSpan = document.querySelector(
			".final-summary-client-data-container__client-name"
		);
		clientsNameSpan.innerHTML = `${clientForm.data.name} ${clientForm.data.surname}`;
		// street, building and flat number
		const clientsAddres1Span = document.querySelector(
			".final-summary-client-data-container__client-address1"
		);
		const slash = clientForm.data.flat === "" ? "" : "/";
		clientsAddres1Span.innerHTML = `${clientForm.data.street} ${clientForm.data.building}${slash}${clientForm.data.flat}`;
		// postal code and city
		const clientsAddress2Span = document.querySelector(
			".final-summary-client-data-container__client-addres2"
		);
		clientsAddress2Span.innerHTML = `${clientForm.data.postalCode} ${clientForm.data.city}`;
		// phone number
		const clientsContactPhoneSpan = document.querySelector(
			".final-summary-client-data-container__client-contact1"
		);
		clientsContactPhoneSpan.innerHTML = `tel: ${clientForm.data.phone}`;
		// email
		const clientsContactEmailSpan = document.querySelector(
			".final-summary-client-data-container__client-contact2"
		);
		clientsContactEmailSpan.innerHTML = `email: ${clientForm.data.email}`;

		// set delivery method at final summary
		const deliveryMethodSpan = document.querySelector(
			".final-summary-delivery__method-span"
		);
		deliveryMethodSpan.innerHTML = `${delivery.method}`;

		// set delivery price at final summary
		const deliveryPriceSpan = document.querySelector(
			".final-summary-setting-and-approval__delivery-price"
		);
		let deliveryPrice = delivery.method === "Wysyłka" ? 5 : 0;
		deliveryPriceSpan.innerHTML = `${deliveryPrice},00 PLN`;

		// hide address delivery if pick up method is chosen
		const deliveryAddressElement = document.querySelector(
			".final-summary-delivery-address"
		);
		if (delivery.method === "Odbiór osobisty") {
			deliveryAddressElement.classList.add(
				"final-summary-delivery-address--hidden"
			);
		} else {
			deliveryAddressElement.classList.remove(
				"final-summary-delivery-address--hidden"
			);
			// show delivery address
			const deliveryAddress1Span = document.querySelector(
				".final-summary-delivery-address__address1"
			);
			const deliveryAddress2Span = document.querySelector(
				".final-summary-delivery-address__address2"
			);
			const slash = delivery.address.flat === "" ? "" : "/";
			deliveryAddress1Span.innerHTML = `${delivery.address.street} ${delivery.address.building}${slash}${delivery.address.flat}`;
			deliveryAddress2Span.innerHTML = `${delivery.address.postalCode} ${delivery.address.city}`;
		}
		// set final order price
		const finalPriceSpan = document.querySelector(".final-order-price__price");
		const price = printLocationPrice + effectPrice + deliveryPrice;
		finalPriceSpan.innerHTML = `${price},00 PLN`;
	},
	validateFinalSummaryApprovals: (item) => {
		finalOrderSummary.isPrintLocationApproved =
			item.target.id === "final-summary-print-location"
				? item.target.checked
				: finalOrderSummary.isPrintLocationApproved;
		finalOrderSummary.isGraphicsApproved =
			item.target.id === "final-summary-graphics"
				? item.target.checked
				: finalOrderSummary.isGraphicsApproved;
		finalOrderSummary.isEffectApproved =
			item.target.id === "final-summary-effect"
				? item.target.checked
				: finalOrderSummary.isEffectApproved;
		finalOrderSummary.isClientDataApproved =
			item.target.id === "final-summary-client-data"
				? item.target.checked
				: finalOrderSummary.isClientDataApproved;
		finalOrderSummary.isDeliveryApproved =
			item.target.id === "final-summary-delivery-method"
				? item.target.checked
				: finalOrderSummary.isDeliveryApproved;
		const orderSubmitButton = document.querySelector(".submit-order-btn");
		pagesModifiers.submitOrderButtonSwitch(orderSubmitButton);
	},
};
