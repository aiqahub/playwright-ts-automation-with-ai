class BasePage {
    constructor() {
        this.title = 'Base Page';
    }
}

class HomePage extends BasePage {
    constructor() {
        super();
        this.title = 'Home Page';
    }
}

class AboutPage extends BasePage {
    constructor() {
        super();
        this.title = 'About Page';
    }
}

Let