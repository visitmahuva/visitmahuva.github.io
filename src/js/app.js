class App {
    #isNavOpen = false;
    #navElement = null;
    #language = "english";
    #url = "https://visitmahuva.github.io";

    constructor() {
        this.#navElement = document.querySelector(".nav");

        if (!this.#navElement) {
            console.error("Nav element not found!");
        }

        this.init();
    }

    init() {
        this.#setCopyright();
        this.#attachNavToggleHandler();
    }

    toggleNav() {
        if (!this.#navElement) return;

        this.#isNavOpen = !this.#isNavOpen;
        this.#navElement.style.width = this.#isNavOpen ? "100%" : "0%";
    }

    #setCopyright() {
        const footer = document.querySelector(".footer");

        if (!footer) {
            console.error("Footer element not found!");
            return;
        }

        const currentYear = new Date().getFullYear();
        footer.innerHTML = `<p title="Copyright by Visit Mahuva">&copy; Visit Mahuva - ${currentYear}</p>`;
    }

    #attachNavToggleHandler() {
        const menuButton = document.querySelector(".menu");

        if (!menuButton) {
            console.error("Menu button not found!");
            return;
        }

        menuButton.addEventListener("click", () => this.toggleNav());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
});
