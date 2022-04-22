import React from 'react';
import 'my-react-library/dist/index.css';
import { Button } from 'my-react-library';

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
