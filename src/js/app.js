class App {

    isNavOpen = false;
    navElement = null;

    constructor() {
        this.isNavOpen = false; // nav is not open
        this.navElement = document.querySelector(".nav")
        this.language = "english";
        this.url = "https://visitmahuva.github.io";
    }

    toggleNav() {

        if (!this.isNavOpen) {
            this.navElement.style.width = "100%";
            this.isNavOpen = true;
        }
        else {
            this.navElement.style.width = "0%";
            this.isNavOpen = false;

        }

    }
}

const app = new App();