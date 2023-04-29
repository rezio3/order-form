const inputs = document.querySelectorAll(".checkboxes-list__checkbox");
const imgPreview = document.querySelector(
	".checkboxes-and-preview__overprint-preview"
);
const setOverPrintLocation = {
	location: "front",
	setImage: (item) => {
		const overPrintLocation = item.target.getAttribute("data-location");
		if (overPrintLocation === "front") {
			imgPreview.src = "https://picsum.photos/id/120/200/200";
		} else if (overPrintLocation === "back") {
			imgPreview.src = "https://picsum.photos/id/121/200/200";
		} else if (overPrintLocation === "front&back") {
			imgPreview.src = "https://picsum.photos/id/122/200/200";
		}
	},
};

inputs.forEach((e) => {
	e.addEventListener("change", (item) => setOverPrintLocation.setImage(item));
});
