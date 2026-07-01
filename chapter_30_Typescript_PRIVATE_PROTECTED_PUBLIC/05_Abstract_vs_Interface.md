# Abstract Class vs Interface in TypeScript

| Feature | Abstract Class | Interface |
|---|---|---|
| **Keyword** | `abstract class` | `interface` |
| **Can have implementation** | Yes — can define concrete methods with a body | No — only method signatures (no body) |
| **Can have a constructor** | Yes | No |
| **Access modifiers** | Yes — `public`, `protected`, `private` | No — all members are implicitly `public` |
| **Can hold state (fields)** | Yes — can declare and initialize properties | No — declares property shapes only, no initialization |
| **How a class uses it** | `extends` (single only) | `implements` (multiple allowed) |
| **Multiple inheritance** | A class can extend only **one** abstract class | A class can implement **many** interfaces |
| **Can an interface extend it?** | No | Yes — interfaces can `extends` other interfaces |
| **Compiled to JavaScript** | Yes — emits a JS class | No — erased at compile time, zero runtime output |
| **When to use** | Shared base with some default logic + forced contract | Pure contract / shape definition with no shared logic |

---

## Quick Example

```typescript
// Interface — pure contract, no logic
interface Runnable {
    run(): void;
    timeout: number;
}

// Abstract class — contract + shared logic
abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }
    abstract setup(): void;       // must be implemented by subclass
    abstract execute(): void;

    log(): void {                 // concrete method shared by all subclasses
        console.log(`Running: ${this.testName}`);
    }
}

// UITest gets shared logic from abstract class AND satisfies the interface
class UITest extends BaseTest implements Runnable {
    timeout = 5000;
    setup()   { console.log("launch browser"); }
    execute() { console.log("click and fill forms"); }
    run()     { this.setup(); this.execute(); }
}
```

---

## Rule of Thumb for Playwright / Test Automation

- Use an **interface** to describe the *shape* of a page object or config object (e.g., `LoginPage`, `TestConfig`).
- Use an **abstract class** when test suites share lifecycle hooks (`setup`, `teardown`) or helper methods and you want to enforce that each subclass defines its own test steps.
