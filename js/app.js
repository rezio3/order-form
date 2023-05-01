const inputsChooseLocation = document.querySelectorAll(
	".choose-print-location .checkboxes-list__checkbox"
);
const inputsChooseEffect = document.querySelectorAll(
	".choose-effect .checkboxes-list__checkbox"
);
const imgPreview = document.querySelector(".print-preview__print-img");
const pagesElements = document.querySelectorAll(".form-page");

const prices = {
	frontOrBack: 10,
	frontAndBack: 20,
	grayscaleEffect: 2,
	blurEffect: 3,
};

// Object of pages
const pages = {
	activePage: 1,
	changePage: (btn) => {
		if (btn.target.name === "next") {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
			pages.activePage += 1;
			if (pages.activePage === 4) {
				summaryProduct.setSummaryProductPage();
			}
		} else if (btn.target.name === "back" && pages.activePage > 2) {
			pages.activePage -= 1;
		} else {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		}
		pages.changePageDisplay(pages.activePage);
		if (pages.activePage === 3) {
			previewsOnPages.setEffectPreviewImg();
		}
	},
	changePageDisplay: (activePage) => {
		const summaryPreview = document.querySelector(".summary-preview");
		const redNotification = document.querySelector(
			".navigate-section__notification"
		);
		if (pages.activePage === 4) {
			summaryPreview.classList.add("summary-preview--disable");
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
			pagesModifiers.goToCheckoutButtonDisable();
		} else {
			summaryPreview.classList.remove("summary-preview--disable");
			redNotification.classList.add("navigate-section__notification--disabled");
		}
		pagesElements.forEach((e) => e.classList.remove("form-page--active"));
		pagesElements[activePage - 1].classList.add("form-page--active");
	},
};

// Object of default product
const product = {
	type: "T-shirt",
	printLocation: "Przód",
	effect: "Brak",
	price: 10,
	graphics: 110,
	blurPower: "",
	setPrintLocation: (location) => {
		product.printLocation = location;
		product.setPrice();
		updateSummaryPreview();
	},
	setGraphics: (e) => {
		product.graphics += e.target.name === "right" ? 1 : -1;
		previewsOnPages.setGraphicsPreview();
		updateSummaryPreview();
	},

	setEffect: (effect) => {
		product.effect = effect;
		product.setPrice();
		updateSummaryPreview();
	},

	setBlurPower: (powerUpdate) => {
		if (product.effect === "Rozmycie") {
			product.blurPower = powerUpdate;
		} else {
			product.blurPower = "";
		}
		previewsOnPages.setEffectPreviewImg();
	},

	setPrice: () => {
		product.price =
			product.printLocation === "Przód i tył"
				? prices.frontAndBack
				: prices.frontOrBack;
		if (product.effect === "Czarno-białe") {
			product.price += prices.grayscaleEffect;
		} else if (product.effect === "Rozmycie") {
			product.price += prices.blurEffect;
		}
	},
};

// Object of summary preview
const summaryPreview = {
	productDetails: product,
	updateDetails: (effectURLcode) => {
		const { printLocation, effect, price, blurPower } =
			summaryPreview.productDetails;
		const summaryLocationSpan = document.querySelector(
			".summary-preview__location"
		);
		const summaryEffectSpan = document.querySelector(
			".summary-preview__effect"
		);
		const summaryCostSpan = document.querySelector(".summary-preview__cost");
		const printPreview = document.querySelector(".print-preview");
		const copyOfPrintPreview = printPreview.cloneNode(true);

		const blur = effect === "Rozmycie" ? ` ${blurPower}` : "";

		summaryLocationSpan.innerHTML = printLocation;
		summaryEffectSpan.innerHTML = effect + blur;
		summaryCostSpan.innerHTML = `${price} PLN`;

		// set print in summary preview
		const summaryPrintPreview = document.querySelector(
			".print-summary-preview"
		);
		const summaryToRemove = document.querySelector(
			".print-summary-preview .print-preview"
		);

		if (summaryToRemove !== null) {
			summaryPrintPreview.removeChild(summaryToRemove);
		}
		summaryPrintPreview.appendChild(copyOfPrintPreview);

		// set chosen graphics
		const chosenGraphics = summaryPrintPreview.querySelectorAll("img");
		const effectData = effectURLcode !== undefined ? effectURLcode : "";
		chosenGraphics.forEach((e) => {
			// console.log(effectURLcode);
			e.src = `https://picsum.photos/id/${product.graphics}/170/170${effectData}`;
		});
	},
};

updateSummaryPreview();

function updateSummaryPreview(effect) {
	summaryPreview.updateDetails(effect);
}

// object of previews on every page
const previewsOnPages = {
	frontShirt: document.querySelector(".print-preview__shirt-front"),
	backShirt: document.querySelector(".print-preview__shirt-back"),
	setLocationPreviewImg: () => {
		const { printLocation } = product;
		const { frontShirt, backShirt } = previewsOnPages;
		if (printLocation === "Przód") {
			backShirt.innerHTML = "";
			frontShirt.appendChild(imgPreview);
		} else if (printLocation === "Tył") {
			frontShirt.innerHTML = "";
			backShirt.appendChild(imgPreview);
		} else if (printLocation === "Przód i tył") {
			const imgClone = imgPreview.cloneNode(true);
			frontShirt.appendChild(imgPreview);
			backShirt.appendChild(imgClone);
		}
	},
	setEffectPreviewImg: () => {
		const effectPreviewImg = document.querySelector("#effect-preview");
		let effect;
		let blur;
		if (product.effect === "Czarno-białe") {
			blur = "";
			effect = "?grayscale";
		} else if (product.effect === "Rozmycie") {
			blur = `=${product.blurPower}`;
			effect = "?blur";
		} else {
			blur = "";
			effect = "";
		}
		product.effectCode = `${effect + blur}`;
		effectPreviewImg.src = `https://picsum.photos/id/${
			product.graphics
		}/170/170${effect + blur}`;
		updateSummaryPreview(product.effectCode);
	},
	setGraphicsPreview: () => {
		const graphicsImg = document.querySelector(".choose-graphics-img");
		graphicsImg.src = `https://picsum.photos/id/${product.graphics}/170/170`;
	},
};

// object of pagesModifiers
const pagesModifiers = {
	setBlurPowerSetting: (effect) => {
		const blurPowerBlock = document.querySelector(".select-blur-power");
		const blurPower = document.querySelector(
			".select-blur-power__blur-power-number"
		);

		if (effect === "Rozmycie") {
			blurPowerBlock.classList.add("select-blur-power--active");
			product.setBlurPower(blurPower.innerHTML);
		} else {
			product.blurPower = "";
			blurPowerBlock.classList.remove("select-blur-power--active");
		}
	},
	goToCheckoutButtonDisable: () => {
		const redNotification = document.querySelector(
			".navigate-section__notification"
		);
		const { isPrintLocationApproved, isGraphicsApproved, isEffectApproved } =
			summaryProduct;
		if (isPrintLocationApproved && isGraphicsApproved && isEffectApproved) {
			redNotification.classList.add("navigate-section__notification--disabled");
			pageButtonNext.disabled = false;
		} else {
			redNotification.classList.remove(
				"navigate-section__notification--disabled"
			);
			pageButtonNext.disabled = true;
		}
	},
};

// object of product summary on page 4 including choices' approvals
const summaryProduct = {
	isPrintLocationApproved: false,
	isGraphicsApproved: false,
	isEffectApproved: false,

	setSummaryProductPage: () => {
		// set t-shirt img
		const printPreview = document.querySelector(".print-preview");
		const copyOfPrintPreview = printPreview.cloneNode(true);
		copyOfPrintPreview.classList.add("shirt-preview-summary-product");
		const tshirtSummaryImg = document.querySelector(".t-shirt-summary-view");
		const previewToRemove = tshirtSummaryImg.querySelector(
			".shirt-preview-summary-product"
		);

		if (previewToRemove !== null) {
			console.log(previewToRemove);
			tshirtSummaryImg.removeChild(previewToRemove);
		}
		tshirtSummaryImg.appendChild(copyOfPrintPreview);

		// set particular graphics on t-shirt
		const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
		const effectData = product.effectCode;
		chosenGraphics.forEach((e) => {
			e.src = `https://picsum.photos/id/${product.graphics}/50/50${effectData}`;
		});

		// set chosen print location
		const printLocationSpan = document.querySelector(
			".summary-setting-and-approval__print-location"
		);
		printLocationSpan.innerHTML = product.printLocation;

		// set chosen graphics
		const graphicsSummaryImg = document.querySelector(
			"#summary-product-graphics"
		);
		graphicsSummaryImg.src = `https://picsum.photos/id/${product.graphics}/170/170${product.effectCode}`;
		// set chosen effect
		const effectSpan = document.querySelector(
			".summary-setting-and-approval__effect"
		);
		effectSpan.innerHTML = product.effect + " " + product.blurPower;
		// set prices
		const printLocationPriceSpan = document.querySelector(
			".summary-setting-and-approval__print-location-price"
		);
		const effectPriceSpan = document.querySelector(
			".summary-setting-and-approval__effect-price"
		);
		const wholePriceSpan = document.querySelector(
			".summary-product-details__price"
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
		const wholePrice = printLocationPrice + effectPrice;
		wholePriceSpan.innerHTML = `${wholePrice},00 PLN`;
	},
};

// Page nav buttons
const pageButtonNext = document.querySelector("#next-btn");
const pageButtonBack = document.querySelector("#back-btn");

pageButtonBack.addEventListener("click", pages.changePage);
pageButtonNext.addEventListener("click", pages.changePage);

// Graphics selection arrow-buttons on page 2
const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");

chooseGraphicsBtnLeft.addEventListener("click", product.setGraphics);
chooseGraphicsBtnRight.addEventListener("click", product.setGraphics);

// Blur buttons
const blurChangeButtons = document.querySelectorAll(
	".select-blur-power__blur-power-button"
);
const powerNumberSpan = document.querySelector(
	".select-blur-power__blur-power-number"
);
blurChangeButtons.forEach((e) => {
	e.addEventListener("click", (item) => {
		let blurPowerNumber = Number(product.blurPower);
		if (item.target.innerHTML === "-" && blurPowerNumber > 1) {
			blurPowerNumber -= 1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		} else if (item.target.innerHTML === "+" && blurPowerNumber < 10) {
			blurPowerNumber += 1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		}
		product.setBlurPower(blurPowerNumber);
	});
});

// choose print location inputs on page 1
inputsChooseLocation.forEach((e) => {
	e.addEventListener("change", (item) => {
		const location = item.target.getAttribute("data-location");
		product.setPrintLocation(location);
		previewsOnPages.setLocationPreviewImg();
		updateSummaryPreview();
	});
});

// choose effect inputs on page 3
inputsChooseEffect.forEach((e) => {
	e.addEventListener("change", (item) => {
		const effect = item.target.getAttribute("data-effect");
		product.setEffect(effect);
		previewsOnPages.setEffectPreviewImg();
		pagesModifiers.setBlurPowerSetting(effect);
	});
});

// edit buttons on page 4 - product summary
const editButtons = document.querySelectorAll(
	".summary-setting-and-approval__edit-btn"
);
editButtons.forEach((e) => {
	e.addEventListener("click", (item) => {
		pageButtonNext.disabled = false;
		pages.activePage = Number(item.target.name);
		if (pages.activePage !== 1) {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
		}
		pages.changePageDisplay(pages.activePage);
	});
});

// approval product settings on page 4
const approveCheckboxes = document.querySelectorAll(
	".summary-setting-and-approval__checkbox"
);
approveCheckboxes.forEach((e) => {
	e.addEventListener("change", (item) => {
		summaryProduct.isPrintLocationApproved =
			item.target.id === "summary-print-location"
				? item.target.checked
				: summaryProduct.isPrintLocationApproved;
		summaryProduct.isGraphicsApproved =
			item.target.id === "summary-graphics"
				? item.target.checked
				: summaryProduct.isGraphicsApproved;
		summaryProduct.isEffectApproved =
			item.target.id === "summary-effect"
				? item.target.checked
				: summaryProduct.isEffectApproved;
		pagesModifiers.goToCheckoutButtonDisable();
	});
});

// const setOverPrintLocation = {
// 	location: "front",
// 	setImage: (location) => {
// 		if (location === "front") {
// 			imgPreview.src = "https://picsum.photos/id/120/150/150";
// 		} else if (location === "back") {
// 			imgPreview.src = "https://picsum.photos/id/121/150/150";
// 		} else if (location === "front-back") {
// 			imgPreview.src = "https://picsum.photos/id/122/150/150";
// 		}
// 		console.log(setOverPrintLocation.location);
// 	},
// };

// d
// class Product {
// 	price = 0;

// 	constructor(type = "t-shirt") {
// 		this.type = type;
// 	}

// 	withPrice(price) {
// 		this.price = price;

// 		return this;
// 	}

// 	withBlur() {
// 		this.blur = true;
// 		return this;
// 	}

// 	get price() {}

// 	withMaterial(materialType) {}

// 	setOverprintLocation(location) {
// 		if (location === "front") {
// 			imgPreview.src = "https://picsum.photos/id/120/150/150";
// 		} else if (location === "back") {
// 			imgPreview.src = "https://picsum.photos/id/121/150/150";
// 		} else if (location === "front&back") {
// 			imgPreview.src = "https://picsum.photos/id/122/150/150";
// 		}
// 	}
// }

// class Customer {
// 	name = "Kubus";
// 	surname = "Rezler";

// 	constructor(city) {
// 		this.deliveryAdress = {
// 			city,
// 			country: "",
// 		};
// 	}

// 	setAddress() {}

// 	getFullName() {
// 		return `${this.name} ${this.surname}`;
// 	}
// }

// class Order {
// 	listOfProducts = [];

// 	addProduct(product) {
// 		this.listOfProducts.push(product);
// 	}

// 	getTotalValue() {
// 		this.listOfProducts.reduce((acc, next) => (acc += next.price), 0);
// 	}
// }

// const productBase = {
// 	price: 0,
// 	overprintLocation: "front",
// 	setOverprintLocation: (location) => {
// 		this.overprintLocation = location;
// 	},
// };

// const product = new Product("t-shirt").withPrice(50).withMaterial("cotton");
// const order = new Order();

// order.addProduct(product);
// product.withBlur();

// console.log("product", product);

// product.setOverprintLocation("front");

// class ElementHandler {
// 	constructor(selector) {
// 		this.element = document.querySelector(selector);
// 	}

// 	injectValue(value) {
// 		this.element.innerText = value;
// 	}
// }

// function getElement(selector) {
// 	return document.querySelector(selector);
// }

// function setELementValue(element, value) {
// 	element.innerText = value;
// }

// function setValueOnElement(selector, value) {
// 	const element = document.querySelector(selector);
// 	element.innerText = value;
// }

// function setEventListenerOnElement(selector, fnc) {
// 	const element = document.querySelector(selector);
// 	element.addEventListener("click", fnc);
// }

// const nextPageButton = new ElementHandler([".btn1"]);
// nextPageButton.injectValue(product.price);
