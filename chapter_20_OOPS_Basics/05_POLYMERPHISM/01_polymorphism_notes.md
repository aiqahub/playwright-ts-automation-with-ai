# JavaScript Polymorphism

## What is Polymorphism?

**Poly** = many, **morph** = form.

Polymorphism means **one interface, many behaviours**. The same method name does different things depending on which object you call it on.

In JavaScript this happens through **method overriding**: a child class re-defines a method inherited from the parent, so calling that method on different objects produces different results — even though the call looks identical in code.

---

## How It Works

```
Parent class defines a method  →  child classes OVERRIDE that method
Same call site, different result depending on the actual object at runtime.
```

```js
class Parent {
    describe() { return "I am the parent"; }
}

class ChildA extends Parent {
    describe() { return "I am Child A"; }   // override
}

class ChildB extends Parent {
    describe() { return "I am Child B"; }   // override
}

const objects = [new Parent(), new ChildA(), new ChildB()];

objects.forEach(obj => console.log(obj.describe()));
// I am the parent
// I am Child A
// I am Child B
```

The `forEach` loop does not know or care which concrete class it is dealing with — it just calls `.describe()`.  That is polymorphism.

---

## Key Concepts

| Concept | Meaning |
|---|---|
| **Method Overriding** | Child re-defines a parent method with the same name |
| **Runtime dispatch** | JavaScript decides which version to call at runtime based on the actual object |
| **Duck typing** | If an object has the method, JS will call it — no formal interface needed |
| **`super.method()`** | Call the parent's version of the method from inside the override |

---

## Why Polymorphism Matters in Testing

In a test framework you often want to:

- Run a **suite** of different test types (UI, API, DB) through the **same loop**.
- Swap **reporters** (Console, HTML, JSON) without changing the code that triggers reporting.
- Build a **Page Object Model** where every page has `navigate()` and `verify()`, but each page implements them differently.

Polymorphism makes all of this possible without messy `if/else` checks.

---

## Pattern: Without vs. With Polymorphism

### Without (bad — `if/else` everywhere)
```js
function runTest(test) {
    if (test.type === "UI")   { /* UI-specific logic */ }
    if (test.type === "API")  { /* API-specific logic */ }
    if (test.type === "DB")   { /* DB-specific logic */ }
}
```
Every new test type forces you to edit `runTest`.

### With Polymorphism (good)
```js
class UITest  { run() { /* UI logic  */ } }
class APITest { run() { /* API logic */ } }
class DBTest  { run() { /* DB logic  */ } }

const tests = [new UITest(), new APITest(), new DBTest()];
tests.forEach(t => t.run());   // no if/else needed
```
Adding a new test type means adding a new class — existing code is untouched.

---

## Polymorphism vs. Inheritance vs. Encapsulation

| Pillar | Core idea |
|---|---|
| **Encapsulation** | Hide internal details, expose a clean interface |
| **Inheritance** | Child gets the parent's properties and methods |
| **Polymorphism** | Same method name, different behaviour per class — built on top of inheritance |

---

## Interview Questions

**Q: What is polymorphism in JavaScript?**  
A: The ability for the same method name to behave differently depending on the object it is called on. Achieved through method overriding in class hierarchies.

**Q: How does JS achieve polymorphism without interfaces?**  
A: Through duck typing — if an object has a method with the right name, JS calls it. No formal `interface` keyword is required.

**Q: What is the difference between overriding and overloading?**  
A: *Overriding* — a child redefines a parent method (same signature). *Overloading* — multiple methods with the same name but different parameters. JavaScript does **not** support true overloading; the last function definition wins.

**Q: Can you call the parent's method after overriding it?**  
A: Yes, with `super.methodName()` inside the child's override.

**Q: Why is polymorphism useful in a Page Object Model?**  
A: Every page class shares the same method names (`navigate`, `verify`), so a test loop can iterate over an array of page objects and call those methods without knowing the specific page type.
