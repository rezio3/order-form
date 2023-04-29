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
		} else if (btn.target.name === "back" && pages.activePage > 2) {
			pages.activePage -= 1;
		} else {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
		}
		changePageDisplay(pages.activePage - 1);
		updateSummaryDetails();
		if (pages.activePage >= 3) {
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

	setEffectPreviewImg() {
		const effectPreviewImg = document.querySelector("#effect-preview");
		let effect;
		if (product1.effect === "Czarno-białe") {
			effect = "?grayscale";
		} else if (product1.effect === "Rozmycie") {
			effect = "?blur";
		} else {
			effect = "";
		}
		effectPreviewImg.src = `https://picsum.photos/id/${product1.graphics}/170/170${effect}`;
		updateSummaryDetails(effect);
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
		const { printLocation, effect, price } = this.productDetails;
		const summaryLocationSpan = document.querySelector(
			".summary-preview__location"
		);
		const summaryEffectSpan = document.querySelector(
			".summary-preview__effect"
		);
		const summaryCostSpan = document.querySelector(".summary-preview__cost");
		const printPreview = document.querySelector(".print-preview");
		const copyOfPrintPreview = printPreview.cloneNode(true);

		summaryLocationSpan.innerHTML = printLocation;
		summaryEffectSpan.innerHTML = effect;
		summaryCostSpan.innerHTML = `${price} PLN`;

		// set print preview in summary section
		const summaryPrintPreview = document.querySelector(
			".print-summary-preview"
		);
		const summaryToRemove = summaryPrintPreview.querySelector(".print-preview");
		if (pages.activePage >= 2 && summaryToRemove === null) {
			summaryPrintPreview.appendChild(copyOfPrintPreview);
		} else if (pages.activePage === 1 && summaryToRemove !== null) {
			summaryPrintPreview.removeChild(summaryToRemove);
		}
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
	});
});

// choose effect inputs on page 3
inputsChooseEffect.forEach((e) => {
	e.addEventListener("change", (item) => {
		const effect = item.target.getAttribute("data-effect");
		product1.setEffect(effect);
		product1.setEffectPreviewImg();
	});
});

const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");

chooseGraphicsBtnLeft.addEventListener("click", product1.setGraphics);
chooseGraphicsBtnRight.addEventListener("click", product1.setGraphics);
