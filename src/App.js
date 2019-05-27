// import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Button, message } from 'antd';

function App() {
  return (
    <div className="App">
      {message.success('Welcome to ant design + reactjs')}
      <Button type="primary">Button of Antd</Button>
    </div>
  );
}

export default App;
// export default hot(App);
