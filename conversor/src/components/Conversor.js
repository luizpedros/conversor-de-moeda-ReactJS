import React, { Component } from 'react';

export default class Conversor extends Component {

    constructor (props){
        super(props);
    
        this.state = {
            moedaA_valor:'',
            moedaB_valor:'',
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=0607bd5bae5814fdc4ec`

        fetch(url).then(res=>{
            return res.json();
        }).then(json=>{
            let cotacao = json[de_para].val;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor)* cotacao).toFixed(2);
            this.setState({moedaB_valor});
        })


    }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaA}</h2>
        <input type="text" onChange={(event) => {this.state({moedaA_valor:event.target.value})}}></input>
        <input type="button" value="converter" onClick={this.converter}></input>
        <h3>{this.state.moedaB_valor}</h3>

      </div>
    );
  }
}

//Para converter o vou utilizar nessa aplicação a API "free.currencyconverterapi.com"

