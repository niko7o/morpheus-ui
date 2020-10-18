import React from 'react';

import Button from './components/Button';

const mockHandleClick = () => alert('hi');

const App = () => (
    <div>
      <h1>Morpheus UI</h1>
      <Button handleBtnClick={mockHandleClick} text="Morpheus Rocks!" />
    </div>
  );

export default App;
