# Playwright CLI Commands 🎭

Playwright provides a powerful Command Line Interface (CLI) for running tests, generating code, debugging, and managing browsers.

---

## 1. Essential Commands

The starting point for all Playwright commands is:
```bash
npx playwright --help
```

---

## 2. Running Tests

### Syntax
```bash
npx playwright test [options] [test-filter...]
```

### Common Examples
| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all tests in the project. |
| `npx playwright test tests/todo.spec.ts` | Run a single test file. |
| `npx playwright test -g "add a todo"` | Run tests matching a specific title (regex). |
| `npx playwright test --project=chromium` | Run tests only on the Chromium project. |
| `npx playwright test --headed` | Run tests in headed mode (visible browser). |
| `npx playwright test --workers=1` | Run tests sequentially (disable parallelism). |

---

## 3. Debugging Tools

Playwright provides excellent tools to see exactly what is happening during test execution.

### UI Mode
The best way to run tests locally with a time-travel debugger.
```bash
npx playwright test --ui
```

### Playwright Inspector
Runs your tests and opens an inspector window for step-by-step debugging.
```bash
npx playwright test --debug
```

---

## 4. Code Generation (Codegen)

Playwright can record your browser interactions and automatically generate the test code for you.

### Syntax
```bash
npx playwright codegen [url]
```

### Examples
- **Basic Record**: `npx playwright codegen google.com`
- **Save to File**: `npx playwright codegen --target javascript -o my-test.spec.js google.com`
- **Emulate Device**: `npx playwright codegen --device="iPhone 13" google.com`

---

## 5. Test Reports

After running tests, you can view the detailed execution report.

### Show Latest Report
```bash
npx playwright show-report
```

### Show Specific Report Folder
```bash
npx playwright show-report my-report-folder/
```

---

## 6. Browser Management

Playwright uses its own browser binaries. You may need to install them the first time or after an update.

- **Install all browsers**: `npx playwright install`
- **Install specific browser**: `npx playwright install chromium`
- **Install with dependencies**: `npx playwright install --with-deps` (Useful for Linux/CI environments)

---

## Reference
For more details, visit the official [Playwright Test CLI Documentation](https://playwright.dev/docs/test-cli).
