import React from 'react';
import './index.css';

import Translator from '../translator/';

export default class mainForm extends Translator {
  onTextChange = () => {
    document.getElementById('inputVzuh').value = this.toVzuh(document.getElementById('inputText').value);
  }

  onVzuhChange = () => {
    document.getElementById('inputText').value = this.toText(document.getElementById('inputVzuh').value);
  }

  render(){
    return (<>
      <form>
        <div class="form-group">
          <label for="inputText">Русский текст:</label>
          <textarea class="form-control" id="inputText" rows="7" onChange={this.onTextChange}></textarea>
        </div>
        <div class="form-group">
          <label for="inputVzuh">Вжух текст:</label>
          <textarea class="form-control" id="inputVzuh" rows="7" onChange={this.onVzuhChange}></textarea>
        </div>
      </form>
    </>);
  }
}
