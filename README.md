# Delivery Portal

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is the Delivery Portal project.

## Development pipeline

1. All code is initially pushed into `dev` branch
2. When all tests are written, pull request is made from `dev` to `test` branch
3. When all tests pass, pull request is made from `test` to `master` branch

No one commits directly to the `master` branch, all the code should undergo the verification and approval process.

## Project scripts

| Command                          | Action                                                                           |
| -------------------------------- | -------------------------------------------------------------------------------- |
| **`yarn build`** or **`yarn b`** | Runs **`webpack`**                                                               |
| **`yarn test`** or **`yarn t`**  | Runs **`jest --cache --passWithNoTests --runInBand --updateSnapshot --verbose`** |
| **`yarn start`** or **`yarn s`** | Runs **`webpack-dev-server --open`**                                             |
| **`yarn eject`**                 | Runs **`react-scripts eject`**                                                   |

## Project structure

```txt
.
├───.jest .................... (auto-generated by Jest)
│   └───cache ................ (auto-generated by Jest)
├───build .................... (auto-generated by Webpack)
├───dist ..................... (auto-generated by Webpack and Babel)
├───src ...................... (Contains all relevant project codebase)
│   ├───assets ............... (Contains media data)
│   │   ├───fonts
│   │   └───images
│   ├───components ........... (Contains only .tsx component files)
│   │   ├───buttons
│   │   ├───icons
│   │   ├───navigation
│   │   ├───screens
│   │   ├───text
│   │   └───App.tsx .......... (Main project component)
│   ├───constants ............ (Contains only constant state-containing files)
│   ├───containers ........... (Contains only containers)
│   ├───hooks ................ (Contains only hooks)
│   ├───state ................ (Contains only state-containing files)
│   ├───types ................ (Contains only reused type info)
│   ├───utils ................ (Contains only reused type info)
│   │   ├───serviceWorker.ts . (Contains only reused type info)
│   │   └───setuptests.ts .... (Contains only reused type info)
│   └───index.tsx ............ (Project entry point)
├───.env ..................... (Environment variable configuration)
├───.gitignore
├───babel.config.js .......... (Babel configuration script)
├───husky.config.js .......... (Husky configuration script)
├───jest.config.js ........... (Jest configuration script)
├───package.json
├───README.md
├───tsconfig.json ............ (TypeScript compiler settings)
├───webpack.config.js ........ (Webpack configuration script)
├───yarn.lock ................ (auto-generated by Yarn)
└───yarn-error.log ........... (auto-generated by Yarn)
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

### Typing

In-file types should be declared right before their first usage. Try not to use
`interface`, because it is longer to write, and we are not using class-based components.

Example:

```tsx
import * as React from "react";

type Props = {
  /* Your custom type */
};

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

### Testing

1. Tests should be named as the file that they are testing, but with `.test.` suffix (`App.tsx` -> `App.test.tsx`)
