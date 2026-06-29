// Polymorphism — Page Object Model
// BasePage defines navigate() and verify().
// Each page overrides both methods.
// A test runner can iterate any array of pages without knowing the page type.

class BasePage {
    constructor(url) {
        this.url = url;
    }

    navigate() {
        console.log(`Navigating to: ${this.url}`);
    }

    verify() {
        console.log(`Verifying base page at: ${this.url}`);
    }
}

class LoginPage extends BasePage {
    constructor() {
        super("https://app.example.com/login");
    }

    navigate() {
        console.log(`[LoginPage]     Opening login form at ${this.url}`);
    }

    verify() {
        console.log(`[LoginPage]     Checking username & password fields exist`);
    }
}

class DashboardPage extends BasePage {
    constructor() {
        super("https://app.example.com/dashboard");
    }

    navigate() {
        console.log(`[DashboardPage] Navigating to dashboard at ${this.url}`);
    }

    verify() {
        console.log(`[DashboardPage] Checking summary cards and nav menu are visible`);
    }
}

class CheckoutPage extends BasePage {
    constructor() {
        super("https://app.example.com/checkout");
    }

    navigate() {
        console.log(`[CheckoutPage]  Opening cart and proceeding to ${this.url}`);
    }

    verify() {
        console.log(`[CheckoutPage]  Verifying order total and payment form`);
    }
}

// --- smoke test loop: same two calls on every page ---

const pages = [
    new LoginPage(),
    new DashboardPage(),
    new CheckoutPage(),
];

pages.forEach(page => {
    page.navigate();   // calls each page's own navigate()
    page.verify();     // calls each page's own verify()
    console.log("---");
});

// Output:
// [LoginPage]     Opening login form at https://app.example.com/login
// [LoginPage]     Checking username & password fields exist
// ---
// [DashboardPage] Navigating to dashboard at https://app.example.com/dashboard
// [DashboardPage] Checking summary cards and nav menu are visible
// ---
// [CheckoutPage]  Opening cart and proceeding to https://app.example.com/checkout
// [CheckoutPage]  Verifying order total and payment form
// ---
