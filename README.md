# my-react-library

## Install

```bash
npm install --save my-react-library
```

## Usage

```jsx
import React from 'react';
import 'my-react-library/dist/index.css';
import {
  Button,
} from 'my-react-library';

const App = () => {
  return (
    <>
      <Button
        label="Send"
        name="send"
        onClick={() => console.log('sended')}
        type="button"
      />
    </>
  );
};

export default App;
```

## Development

Install dependencies and run bundler to watch module and automatically recompile.

```bash
npm ci
npm start
```

Install dependencies and run example app that's linked to the local version of your module.

```bash
cd example
npm ci
npm start
```
