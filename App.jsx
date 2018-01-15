import React from 'react';

class App extends React.Component {
   render() {
      return (
    <div className="mdc-typography">
        <h2 className="mdc-typography--display2">Hello, Material Components!</h2>
        <div className="mdc-text-field" data-mdc-auto-init="MDCTextField">
            <input type="text" className="mdc-text-field__input" id="demo-input" />
            <label for="demo-input" className="mdc-text-field__label">Tell us how you feel!</label>
        </div>
    </div>
      );
   }
}
export default App;