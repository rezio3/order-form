const inputs = document.querySelectorAll(".checkboxes-list__checkbox");
const imgPreview = document.querySelector(".print-preview__print-img");
const frontShirt = document.querySelector(".print-preview__shirt-front");
const backShirt = document.querySelector(".print-preview__shirt-back");
const summaryDetails = document.querySelectorAll(".sum-details");
const pagesElements = document.querySelectorAll(".form-page");

// Page nav buttons
const pageButtonNext = document.querySelector("#next-btn");
const pageButtonBack = document.querySelector("#back-btn");

class Page {
	constructor(currentPage) {
		this.activePage = currentPage;
	}

	// DLACZEGO NIE DZIAŁA TU THIS
	changePage(btn) {
		if (btn.target.name === "next") {
			pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
			pages.activePage += 1;
			console.log(pages);
		} else if (btn.target.name === "back" && pages.activePage > 2) {
			pages.activePage -= 1;
			console.log(pages);
		} else {
			pages.activePage -= 1;
			pageButtonBack.classList.add("navigate-buttons__btn--disabled");
			console.log(pages);
		}
		changePageDisplay(pages.activePage - 1);
	}
}

const pages = new Page(1);
console.log(pages);

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
		}
	}

	setGraphics(e) {
		product1.graphics += e.target.name === "right" ? 1 : -1;
		const graphicsImg = document.querySelector(".choose-graphics-img");
		graphicsImg.src = `https://picsum.photos/id/${product1.graphics}/170/170`;
	}

	setPrice() {
		this.price = this.printLocation === "Przód i tył" ? 20 : 10;
		if (this.effect === "Czarno-biały") {
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

	updateDetails() {
		const { printLocation, effect, price } = this.productDetails;
		const summaryLocationSpan = document.querySelector(
			".summary-preview__location"
		);
		const summaryEffectSpan = document.querySelector(
			".summary-preview__effect"
		);
		const summaryCostSpan = document.querySelector(".summary-preview__cost");
		summaryLocationSpan.innerHTML = printLocation;
		summaryEffectSpan.innerHTML = effect;
		summaryCostSpan.innerHTML = `${price} PLN`;
	}

	updateCost(updateCost) {
		this.cost += updateCost;
	}
}

const summary = new SummaryDetails(product1);
summary.updateDetails();

inputs.forEach((e) => {
	e.addEventListener("change", (item) => {
		const location = item.target.getAttribute("data-location");
		product1.setPrintLocation(location);
		product1.setLocationPreviewImg();
		summary.updateDetails();
		console.log(product1);
	});
});

const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");

chooseGraphicsBtnLeft.addEventListener("click", product1.setGraphics);
chooseGraphicsBtnRight.addEventListener("click", product1.setGraphics);
