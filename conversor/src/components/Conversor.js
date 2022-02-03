import React, { Component } from 'react';

export default class Conversor extends Component {
  render() {
    return (
      <div className='conversor'>
        <h2>USD para BRL</h2>
        <input type='text'></input>
        <input type='button' value='converter'></input>
        <h3>Valor convertido</h3>

      </div>
    );
  }
}


