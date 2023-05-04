export const loadOrderInfoToThankYouPage = (order) => {
	// delete header container
	const headerContainerElement = document.querySelector(".header-container");
	headerContainerElement.classList.add("header-container--hidden");
	const thankYouHeader = document.querySelector(".thank-you-header");
	const orderInfoPrintLocationSpan = document.querySelector(
		".order-info__print-location"
	);
	const orderInfoEffectSpan = document.querySelector(".order-info__effect");
	const orderInfoGraphicsImg = document.querySelector(".order-info__graphics");
	const orderInfoDeliveryMethodSpan = document.querySelector(
		".order-info__delivery-method"
	);
	const orderInfoPriceSpan = document.querySelector(".order-info__price");

	const graphics = document.querySelector("#effect-preview");
	const copyGraphics = graphics.cloneNode(true);

	thankYouHeader.innerHTML = `Dziękujemy ${order.client.name}!`;
	orderInfoPrintLocationSpan.innerHTML = `${order.product.printLocation}`;
	orderInfoEffectSpan.innerHTML = `${order.product.effect} ${order.product.blurPower}`;
	orderInfoGraphicsImg.appendChild(copyGraphics);
	orderInfoDeliveryMethodSpan.innerHTML = `${order.delivery.method}`;
	orderInfoPriceSpan.innerHTML = `${order.price},00 PLN`;
	if (order.delivery.method !== "Odbiór osobisty") {
		const orderInfoDeliveryAddress1 = document.querySelector(
			".order-info__delivery-addres1"
		);
		const orderInfoDeliveryAddress2 = document.querySelector(
			".order-info__delivery-addres2"
		);
		const slash = order.delivery.deliveryAddress.flat === "" ? "" : "/";
		orderInfoDeliveryAddress1.innerHTML = `${order.delivery.deliveryAddress.street} ${order.delivery.deliveryAddress.building}${slash}${order.delivery.deliveryAddress.flat}`;
		orderInfoDeliveryAddress2.innerHTML = `${order.delivery.deliveryAddress.postalCode} ${order.delivery.deliveryAddress.city}`;
	}
};
