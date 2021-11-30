import React from 'react';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}
export default App;