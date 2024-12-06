// Set favicon
document.head.appendChild(
	Object.assign(document.createElement("link"), {
		rel: "icon",
		href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
	})
);

const curtain = document.querySelector("#curtain");
const body = document.querySelector("body");

const loadCurtain = () => {
	setTimeout(() => {
		curtain.classList.add("inactive");
	}, 7000);
};


