# Boilerplate frontend react

This is a basic boilerplate which provides a basic frontend starter pack.

It's based in react and it's based and built with the following technologies:

* React (includes react's router)
* i18next (translations)
* Vite (bundle)
* Cypress with cucumber/gherkin syntax (test)
* Sass (css)
* Eslint (linting)
* Stylelint (css linting)

## How to use the boilerplate

At first, download the bundle and install the packages with

### Install dependencies
```{bash}
npm i
```

### Run development server
To run the local web server for development use:
```{bash}
npm run dev
```

### Build the project
To compile the project, generate the **/dist** folder use:
```{bash}
npm run build
```

If you want to init the server you should use:
```{bash}
http-server ./dist -p 3000
```

### Run tests
To run all the tests you should use:
```{bash}
npm run test
```
This command pass also the lint and the css lint.

You can pass the lint or the css lint using the following commands:
```{bash}
npm run lint
npm run test:css
```


