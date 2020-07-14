# Delivery Portal

[![Build Status](https://dev.azure.com/ekseli/Delivery%20Portal/_apis/build/status/delivery-portal?branchName=master)](https://dev.azure.com/ekseli/Delivery%20Portal/_build/latest?definitionId=7&branchName=master)
[![](https://img.shields.io/badge/Data%20storage-Solid-blueviolet?style=flat)](https://github.com/solid/solid)
[![](https://img.shields.io/badge/Code%20style-Prettier-ff69b4?style=flat)](https://github.com/prettier/prettier)

This is the Delivery Portal project.

## Pull requests

1. All code is initially pushed into `dev` branch from one's own custom branch
2. When all tests are written, pull request is made from `dev` to `test` branch
3. When all tests pass, pull request is made from `test` to `master` branch

No one commits directly to the `master` branch, all the code should undergo the verification and approval process. `test` branch
may be surpassed, if changes don't require testing.

## Project scripts

| Command                                              | Action                                                                                                   |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **`yarn test`** or **`yarn t`**                      | Runs **`jest --cache --passWithNoTests --runInBand`**                                                    |
| **`yarn development-build`** or **`yarn db`**        | Runs **`webpack --config webpack.development.js`**                                                       |
| **`yarn development-build-start`** or **`yarn dbs`** | Runs **`node server.development.js`**                                                                    |
| **`yarn production-build`** or **`yarn pb`**         | Runs **`webpack --config webpack.production.js`**                                                        |
| **`yarn production-start`** or **`yarn ps`**         | Runs **`node --max-old-space-size=8192 server.production.js`**                                           |
| **`yarn production-build-start`** or **`yarn pbs`**  | Runs **`webpack --config webpack.production.js && node --max-old-space-size=8192 server.production.js`** |
| **`yarn eject`**                                     | Runs **`react-scripts eject`**                                                                           |

One is able to run the project by simply running **`yarn s`**.

## Project structure

```txt
.
├───.jest ........................ (Contains Jest cache and statistics reports)
├───dist ......................... (Contains only Webpack build output)
├───node_modules ................. (The main module storage)
├───src .......................... (Contains all relevant project codebase)
│   ├───assets ................... (Contains media data)
│   │   ├───fonts ................ (Contains only font files)
│   │   ├───images ............... (Contains only image files)
│   │   └───raw.d.ts ............. (Contains binary file module declarations)
│   ├───components ............... (Contains only .tsx component files)
│   │   ├───<category sub-folders>
│   │   └───App.tsx .............. (Main project component)
│   ├───constants ................ (Contains only constant state-containing files)
│   ├───containers ............... (Contains only containers)
│   ├───hooks .................... (Contains only hooks)
│   ├───mocks .................... (Contains only mocks)
│   ├───state .................... (Contains only state-containing files)
│   ├───types .................... (Contains only reused type info)
│   │   ├───css.d.ts ............. (Contains module mapping for css files)
│   │   └───scss.d.ts ............ (Contains module mapping for scss files)
│   ├───utils .................... (Contains only utility files)
│   │   ├───serviceWorker.ts
│   │   └───setuptests.ts ........ (Jest and Enzyme pre-testing configuration script)
│   └───index.tsx ................ (Project entry point)
├───.env ......................... (Environment variable configuration)
├───.gitignore
├───app.json ..................... (Heroku app configuration)
├───azure-pipelines.yml .......... (Azure pipelines configuration)
├───babel.config.js .............. (Babel configuration script)
├───husky.config.js .............. (Husky configuration script)
├───jest.config.js ............... (Jest configuration script)
├───prettier.config.js ........... (Prettier configuration script)
├───Procfile ..................... (Heroku boot script)
├───package.json
├───README.md
├───server.development.js ........ (Express development server script)
├───server.production.js ......... (Express production server script)
├───tsconfig.json ................ (TypeScript compiler settings)
├───webpack.common.js ............ (Common Webpack configuration script for all builds)
├───webpack.development.js ....... (Webpack configuration script for development build)
├───webpack.production.js ........ (Webpack configuration script for production build)
├───yarn.lock .................... (Auto-generated by Yarn)
└───yarn-error.log ............... (Auto-generated by Yarn)
```

Notes:

1. Any folder under **`src`** may be extended with **`__tests__`** folder containing tests respective to the files in the folder where **`__tests__`** resides.
2. Every file category should be separate, so there is consistency in the codebase

Test folder placement example:

```txt
...
├───components
│   ├───__tests__
│   │   └───App.test.tsx
│   ├───buttons
│   │   ├───__tests__
│   │   │   └───BasicButton.test.tsx
│   │   └───BasicButton.tsx
│   ...
│   ├───App.tsx
│   ...
...
```

## Coding guidelines

### File structure

Any `.ts`/`.tsx` file should follow the following structure:

1. Imports
2. Contents
3. Default exporting statement

### Styling

In order to add CSS or SASS, one need to import the style file into the component and add the corresponding identifier in TSX.

Example:

```tsx
/* App.tsx */
import React from "react";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return <div className="test">Project template</div>;
};

export default App;
```

```css
/* App.css */
.test {
  background-color: #b574ff77;
}
```

### Testing

1. Tests should be named as the file that they are testing, but with `.test.` suffix (`App.tsx` -> `App.test.tsx`)
2. There should always be unit tests using Enzyme's [shallow rendering](https://enzymejs.github.io/enzyme/docs/api/shallow.html) or/and [static rendering](https://enzymejs.github.io/enzyme/docs/api/render.html)
3. There optionally may be integration (or system) tests using Enzyme's [full DOM rendering](https://enzymejs.github.io/enzyme/docs/api/mount.html) (**be careful, and use integration tests where necessary, they can drastically slow down your test runs**)
4. Tests should be structured in the following order.
   1. Unit
   2. Integration
   3. System

Example:

```tsx
/* ./src/components/App.tsx */

import React from "react";

const App: React.FC = (): JSX.Element => {
  return <div>Project template</div>;
};

export default App;
```

```tsx
/* ./src/components/__tests__/App.test.tsx */

import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("'App' component", () => {
  describe("Unit tests", () => {
    it("Shallow renders without crashing", () => {
      shallow(<App />);
    });
  });

  describe("Integration tests", () => {
    it("Mounts in a full DOM", () => {
      expect(mount(<App />).find(App).length).toBe(1);
    });
  });
});
```

### Typing

In-file types should be declared right before their first usage. Try not to use
`interface`, because it is longer to write, and we are not using class-based components.

Example:

```tsx
import * as React from "react";

type A = {
  /* Your custom type */
};

type B {
  /* Your custom type */
}

type Props = A & B;

type State = {
  /* Your custom type */
};

const ComponentName: React.FC<Props, State> = (props): JSX.Element => {
  return (
    <SubComponentName prop={props.subComponentProp}>
      Sub-component {util("here")}
    </SubComponentName>
  );
};

function util(s: string): string {
  return s + "!";
}

export default ComponentName;
```

## Internals

### Builds

#### Development

1. Configured by **`webpack.development.js`**
2. Not-minimized

#### Production

1. Configured by **`webpack.production.js`**
2. Minimized
3. Utilizes client cache
4. Optimized for initial loads

## Known issues

1. `vendor` packages are minified in `production` mode
2. Azure pipeline timeouts in 10 minutes, in order to exceed the timeout, increase `timeoutInMinutes` property value in the `Main` job
