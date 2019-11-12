import React from 'react';

import Translator from '../translator/';

export default class mainForm extends Translator {
  onTextChange = () => {
    document.getElementById('inputVzuh').value = this.convert(document.getElementById('inputText').value);
  }

  onVzuhChange = () => {
    document.getElementById('inputText').value = this.deconvert(document.getElementById('inputVzuh').value);
  }

  render(){
    return (<div className="container">
      <form>
        <div class="form-group">
          <label for="inputText">Русский текст:</label>
          <textarea className="form-control" id="inputText" rows="7" onChange={this.onTextChange}></textarea>
        </div>
        <div class="form-group">
          <label for="inputVzuh">Вжух текст:</label>
          <textarea className="form-control" id="inputVzuh" rows="7" onChange={this.onVzuhChange}></textarea>
        </div>
      </form>
    </div>);
  }
}
