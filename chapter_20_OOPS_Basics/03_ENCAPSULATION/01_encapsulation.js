class BankAccount {
    #accountNumber;
    #balance;

    constructor(accountNumber, balance) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getBalance() {
        return this.#balance;
    }
}