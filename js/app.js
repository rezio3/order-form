const inputs = document.querySelectorAll(".checkboxes-list__checkbox");
const imgPreview = document.querySelector(
	".checkboxes-and-preview__overprint-preview"
);

inputs.forEach((e) => {
	e.addEventListener("change", (el) => {
		const overPrintLocation = el.target.getAttribute("data-location");
		if (overPrintLocation === "front") {
			imgPreview.src = "https://picsum.photos/id/120/200/200";
		} else if (overPrintLocation === "back") {
			imgPreview.src = "https://picsum.photos/id/121/200/200";
		} else if (overPrintLocation === "front&back") {
			imgPreview.src = "https://picsum.photos/id/122/200/200";
		}
	});
});
