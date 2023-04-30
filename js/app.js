const inputsChooseLocation = document.querySelectorAll(
	".choose-print-location .checkboxes-list__checkbox"
);
const inputsChooseEffect = document.querySelectorAll(
	".choose-effect .checkboxes-list__checkbox"
);
const imgPreview = document.querySelector(".print-preview__print-img");
const frontShirt = document.querySelector(".print-preview__shirt-front");
const backShirt = document.querySelector(".print-preview__shirt-back");
const summaryDetails = document.querySelectorAll(".sum-details");
const pagesElements = document.querySelectorAll(".form-page");

class Page {
	constructor(currentPage) {
		this.activePage = currentPage;
	}

	// DLACZEGO NIE DZIAŁA TU THIS
	changePage(btn) {
		if (btn.target.name === "next") {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
			pages.activePage += 1;
			if (pages.activePage === 4) {
				pageButtonBack.classList.add("navigate-buttons__btn--disabled");
				pageButtonNext.disabled = true;
				setSummaryProductPage();
			}
		} else if (btn.target.name === "back" && pages.activePage > 2) {
			pages.activePage -= 1;
		} else {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		}
		changePageDisplay(pages.activePage - 1);
		if (pages.activePage === 3) {
			product1.setEffectPreviewImg();
		}
	}
}

const pages = new Page(1);

// Page nav buttons
const pageButtonNext = document.querySelector("#next-btn");
const pageButtonBack = document.querySelector("#back-btn");

pageButtonBack.addEventListener("click", pages.changePage);
pageButtonNext.addEventListener("click", pages.changePage);

function changePageDisplay(pageIndex) {
	const summaryPreview = document.querySelector(".summary-preview");
	if (pages.activePage === 4) {
		summaryPreview.classList.add("summary-preview--disable");
	} else {
		summaryPreview.classList.remove("summary-preview--disable");
	}
	pagesElements.forEach((e) => e.classList.remove("form-page--active"));
	pagesElements[pageIndex].classList.add("form-page--active");
}

class Product {
	constructor(type) {
		this.type = type;
		this.printLocation = "Przód";
		this.effect = "Brak";
		this.price = 10;
		this.graphics = 110;
	}

	setPrintLocation(location) {
		this.printLocation = location;
		this.setPrice();
		updateSummaryDetails();
	}

	setLocationPreviewImg() {
		const location = this.printLocation;
		if (location === "Przód") {
			backShirt.innerHTML = "";
			frontShirt.appendChild(imgPreview);
		} else if (location === "Tył") {
			frontShirt.innerHTML = "";
			backShirt.appendChild(imgPreview);
		} else if (location === "Przód i tył") {
			const imgClone = imgPreview.cloneNode(true);
			frontShirt.appendChild(imgPreview);
			backShirt.appendChild(imgClone);
			// console.log(imgClone);
		}
	}

	setEffectPreviewImg(power) {
		const effectPreviewImg = document.querySelector("#effect-preview");
		let effect;
		let blur;
		if (product1.effect === "Czarno-białe") {
			blur = "";
			effect = "?grayscale";
		} else if (product1.effect === "Rozmycie") {
			blur = `=${power}`;
			effect = "?blur";
		} else {
			blur = "";
			effect = "";
		}
		product1.effectCode = `${effect + blur}`;
		effectPreviewImg.src = `https://picsum.photos/id/${
			product1.graphics
		}/170/170${effect + blur}`;
		updateSummaryDetails(product1.effectCode);
	}

	setGraphics(e) {
		product1.graphics += e.target.name === "right" ? 1 : -1;
		const graphicsImg = document.querySelector(".choose-graphics-img");
		graphicsImg.src = `https://picsum.photos/id/${product1.graphics}/170/170`;
		updateSummaryDetails();
	}

	setEffect(effect) {
		product1.effect = effect;
		this.setPrice();
		updateSummaryDetails();
	}

	setBlurPower(power) {
		if (product1.effect === "Rozmycie") {
			product1.blurPower = power;
		} else {
			product1.blurPower = "";
		}
		this.setEffectPreviewImg(power);
	}

	setPrice() {
		this.price = this.printLocation === "Przód i tył" ? 20 : 10;
		if (this.effect === "Czarno-białe") {
			this.price += 2;
		} else if (this.effect === "Rozmycie") {
			this.price += 3;
		}
	}
}

const product1 = new Product("t-shirt");

class SummaryDetails {
	constructor(product) {
		this.productDetails = product;
	}

	updateDetails(effectURLcode) {
		const { printLocation, effect, price, blurPower } = this.productDetails;
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

		// set print preview in summary section
		const summaryPrintPreview = document.querySelector(
			".print-summary-preview"
		);
		const summaryToRemove = document.querySelector(
			".print-summary-preview .print-preview"
		);

		//NIECH SIE WYKONA TYLKO PRZY ZMIANIE LOKALIZACJI
		if (summaryToRemove !== null) {
			summaryPrintPreview.removeChild(summaryToRemove);
		}
		summaryPrintPreview.appendChild(copyOfPrintPreview);

		// set chosen graphics
		const chosenGraphics = summaryPrintPreview.querySelectorAll("img");
		const effectData = effectURLcode !== undefined ? effectURLcode : "";
		chosenGraphics.forEach((e) => {
			// console.log(effectURLcode);
			e.src = `https://picsum.photos/id/${product1.graphics}/170/170${effectData}`;
		});
	}

	updateCost(updateCost) {
		this.cost += updateCost;
	}
}
const summary = new SummaryDetails(product1);
updateSummaryDetails();

function updateSummaryDetails(effect) {
	summary.updateDetails(effect);
}

// choose print location inputs on page 1
inputsChooseLocation.forEach((e) => {
	e.addEventListener("change", (item) => {
		const location = item.target.getAttribute("data-location");
		product1.setPrintLocation(location);
		product1.setLocationPreviewImg();
		updateSummaryDetails();
	});
});

// choose effect inputs on page 3
inputsChooseEffect.forEach((e) => {
	e.addEventListener("change", (item) => {
		const effect = item.target.getAttribute("data-effect");
		product1.setEffect(effect);
		product1.setEffectPreviewImg();
		setBlurPower(effect);
	});
});

function setSummaryProductPage() {
	// set t-shirt img
	const printPreview = document.querySelector(".print-preview");
	console.log(printPreview);
	const copyOfPrintPreview = printPreview.cloneNode(true);
	copyOfPrintPreview.classList.add("shirt-preview-summary-product");
	const tshirtSummaryImg = document.querySelector(".t-shirt-summary-view");
	tshirtSummaryImg.appendChild(copyOfPrintPreview);

	// set particular graphics on t-shirt
	const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
	const effectData = product1.effectCode;
	chosenGraphics.forEach((e) => {
		// console.log(effectURLcode);
		e.src = `https://picsum.photos/id/${product1.graphics}/60/60${effectData}`;
	});

	const graphicsSummaryImg = document.querySelector(
		"#summary-product-graphics"
	);
	graphicsSummaryImg.src = `https://picsum.photos/id/${product1.graphics}/170/170${product1.effectCode}`;
}

function setBlurPower(effect) {
	const blurPowerBlock = document.querySelector(".select-blur-power");
	const blurPower = document.querySelector(
		".select-blur-power__blur-power-number"
	);
	if (effect === "Rozmycie") {
		blurPowerBlock.classList.add("select-blur-power--active");
		product1.setBlurPower(blurPower.innerHTML);
	} else {
		blurPowerBlock.classList.remove("select-blur-power--active");
	}
}

const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");

chooseGraphicsBtnLeft.addEventListener("click", product1.setGraphics);
chooseGraphicsBtnRight.addEventListener("click", product1.setGraphics);

const blurChangeButtons = document.querySelectorAll(
	".select-blur-power__blur-power-button"
);
const powerNumberSpan = document.querySelector(
	".select-blur-power__blur-power-number"
);
blurChangeButtons.forEach((e) => {
	e.addEventListener("click", (item) => {
		let blurPowerNumber = Number(product1.blurPower);
		if (item.target.innerHTML === "-" && blurPowerNumber > 1) {
			blurPowerNumber += -1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		} else if (item.target.innerHTML === "+" && blurPowerNumber < 10) {
			blurPowerNumber += 1;
			powerNumberSpan.innerHTML = blurPowerNumber;
		}
		product1.setBlurPower(blurPowerNumber);
	});
});
