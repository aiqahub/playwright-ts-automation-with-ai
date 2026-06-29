// Polymorphism — Test Reporters
// Every reporter has the same interface: report(result).
// Swap the reporter without changing the code that calls it.

class BaseReporter {
    report(result) {
        console.log(`Result: ${result}`);
    }
}

class ConsoleReporter extends BaseReporter {
    report(result) {
        console.log(`[Console] TEST ${result.toUpperCase()}`);
    }
}

class HTMLReporter extends BaseReporter {
    report(result) {
        console.log(`[HTML] <span class="${result}">${result}</span>`);
    }
}

class JSONReporter extends BaseReporter {
    report(result) {
        console.log(`[JSON] ${JSON.stringify({ status: result, timestamp: Date.now() })}`);
    }
}

// --- calling the same method on different reporters ---

const reporters = [
    new ConsoleReporter(),
    new HTMLReporter(),
    new JSONReporter(),
];

reporters.forEach(reporter => reporter.report("passed"));

// Output:
// [Console] TEST PASSED
// [HTML] <span class="passed">passed</span>
// [JSON] {"status":"passed","timestamp":...}
