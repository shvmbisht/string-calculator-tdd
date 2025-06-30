# String Calculator TDD Kata

This repository contains a solution for the String Calculator TDD (Test-Driven Development) Kata, completed as part of the Incubyte software craftsmanship assessment.

## Description

The goal of this kata is to create a simple `StringCalculator` with an `add` method that sums a string of numbers. The project was developed following strict TDD principles, where a failing test was written before each new piece of functionality was implemented.

The TDD cycle followed was:
1.  **Red**: Write a test that fails.
2.  **Green**: Write the simplest code to make the test pass.
3.  **Refactor**: Clean up the code while keeping the tests green.

## Features Implemented

The `add` method supports the following features:
1.  An empty string returns `0`.
2.  A single number returns its value.
3.  An unknown amount of comma-separated numbers are summed correctly.
4.  New lines (`\n`) are handled as delimiters along with commas.
5.  Custom single-character delimiters are supported using the format `//[delimiter]\n[numbers...]`.
6.  Calling `add` with negative numbers throws an exception, listing all negatives in the error message.

## Setup and Usage

To run the tests for this project, follow these steps:

1.  **Clone the repository**:
    ```sh
    git clone https://github.com/shvmbisht/string-calculator-tdd.git
    cd string-calculator-tdd
    ```

2.  **Install dependencies**:
    ```sh
    npm install
    ```

3.  **Run the tests**:
    ```sh
    npm test
    ```

## Technology Stack

-   **Node.js**: JavaScript runtime environment
-   **Jest**: A delightful JavaScript Testing Framework 