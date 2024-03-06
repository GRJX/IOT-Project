# HYVA-IOT-BDT

This is a test automation framework built using Playwright, Cucumber and TypeScript. Playwright is a Node.js library for automating web browsers, Cucumber is a tool for running automated tests written in plain language, and TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Prerequisites
- Visual Studio Code installed on your machine
- Node.js and npm installed on your machine
- Docker installed on your machine
- Chrome or Chromium browser installed on your machine

## Installation
1. Clone the repository
2. Install dependencies by running `npm install`
3. In Visual Studio Code add `Cucumber` and `Playwright Test for VSCode` via the Extensions tab
4. Go to `Extensions Settings` by clicking on the settings wheel in the `Cucumber` extension
5. Click on `Edit in settings.json` and paste the code block, to auto search for step-definitions within features
```
"cucumber.features": [
  "src/feature/*.feature",
  "src/feature/**/*.feature"
],
"cucumber.glue": [
  "src/step-definitions/*.ts",
  "src/step-definitions/**/*.ts"
],
```

## Usage
1. Run tests locally with `npm run test`

### Run tests with Docker
2. Build the Docker image with `docker build -t hyva-iot-bdt .`
3. Run the Docker container with `docker run --name test-container hyva-iot-bdt`
4. Get test results from Docker container with `docker cp test-container:/test/reports .` 

## Source Code
The folder structure for this framework is as follows:

- `reports` : Contains the test execution reports from cucumber-js
- `src`: Contains all the source files of the framework.
  - `features`: Contains all the `*.feature` files that define the behavior of the system under test.
  - `step-definitions`: Contains all the step definition classes that define the behavior of each step in the feature files.
  - `swagger`: Contains auto-generated API functions from Swagger Codegen.
  - `utils`: Contains utility functions that can be reused throughout the framework.
- `.dockerignore`: Specifies files and directories that should be ignored by `docker build` command.
- `.eslintrc.cjs`: Contains ESLint configuration like static analysis, plugin and code syntax.
- `.gitignore`: Specifies files and directories that should be ignored by Git.
- `cucumber.js`: Contains cucumber-js configuration like reporting, format and execution type.
- `package.json`: Contains metadata and dependencies for the project.
- `Dockerfile`: Contains the instructions to build the Docker image.
- `tsconfig.json`: Contains TypeScript-specific configuration settings.
- `README.md`: This file, which contains documentation and instructions for using the test framework.

## Contributing
If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
