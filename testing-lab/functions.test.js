// const { test, expect } = require("@jest/globals");
const { returnTwo, greeting, add, subtract, multiply, divide, numbersArray } = require("./functions");

test("Should return two", () => {
    expect(returnTwo()).toBe(2);
});    

describe("Greeting function", () => {
    test("Should return Hello, James", () => {
        expect(greeting("James")).toBe("Hello, James");
    });

    test("Should return Hello, Jill", () => {
        expect(greeting("Jill")).toBe("Hello, Jill");
    });
});

describe("Math functions", () => {
    test("Should return 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    
    test("Should return 14", () => {
        expect(add(5, 9)).toBe(14);
    });

    test("Should return true", () => {
        expect(typeof add(1, 2)).toBe("number");
    });
    
    test("Should return 5", () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test("Should return true", () => {
        expect(typeof subtract(5, 9)).toBe("number");
    });
    
    test("Should return 50", () => {
        expect(multiply(10, 5)).toBe(50);
    });
    
    test("Should return true", () => {
        expect(typeof multiply(10, 5)).toBe("number");
    });

    test("Should return 5", () => {
        expect(divide(50, 10)).toBe(5);
    });

    test("Should return true", () => {
        expect(typeof divide(50, 10)).toBe("number");
    });
});

describe("Testing the numbersArray", () => {
    test("Should contain 3", () => {
        expect(numbersArray).toContain(3);
    });
});