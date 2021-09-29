import React, { Component } from 'react'
import api from '../../api'
import './countrycard.css'

class CountryCard extends Component {

    //objeto que recebe a lista
    state = {
        lista: [],
    }

    async componentDidMount() {
      const res = await api.get('/all')
      //setando os dados em lista com setState
      this.setState({lista: res.data})
    } 
  
    render() {

            const {lista} = this.state;

      return (
        <div>
            <h1>Listagem de Países</h1>
            <div className="container">
            <div className="cards">
            {lista.map(countrys => (
                    <div className="card">
                    <img src={countrys.flag} alt={countrys.name}/>
                    {console.log(countrys)}
                    <h2>{countrys.name}</h2>
                    <p>{countrys.population}</p>
                    <p>{countrys.region}</p>
                    <p>{countrys.capital}</p>
                    </div>
            ))}
             </div>
            </div>

        </div>
      );
    }
  }
  
  export default CountryCard;