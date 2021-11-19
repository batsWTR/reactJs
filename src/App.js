
import './App.scss';
import Header from './components/Header';
import Recherche from './components/Recherche';
import React from 'react';
import Hebergement from './components/Hebergement';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      villeR: 'Monaco',
      nb_logements : 10,
      hebergements: [
            {id:0,name: 'La cannebiere', prix: 56, stars: 4, pic: './images/hebergements/01.jpg'},
            {id:1,name: 'Hotel du port', prix: 96, stars: 5, pic: './images/hebergements/02.jpg'},
            {id:2,name: 'Les mouettes', prix: 65, stars: 3, pic: './images/hebergements/03.jpg'},
            {id:3,name: 'Hotel de la mere', prix: 101, stars: 5, pic: './images/hebergements/04.jpg'},
            {id:4,name: 'Aux touristes', prix: 101, stars: 5, pic: './images/hebergements/05.jpg'},
            {id:5,name: 'Le bois noir', prix: 101, stars: 5, pic: './images/hebergements/06.jpg'},
            {id:6,name: 'Le chalet', prix: 101, stars: 5, pic: './images/hebergements/07.jpg'},
            {id:7,name: 'Chez gigi', prix: 25, stars: 2, pic: './images/hebergements/08.jpg'},
            {id:8,name: 'Chez bats', prix: 101, stars: 5, pic: './images/hebergements/09.jpg'}
      ]
    }
  }


  rechVille = (ville)=>{
    this.setState({villeR: ville})
    let nb = ville.length * 6
    this.setState({nb_logements: nb})
  }
//----- modif nombre etoiles
  handleStar = (arr)=>{
    console.log('App ',arr)
    let stars = arr[0]
    let id = arr[1]
    let heber = new Array(...this.state.hebergements)
  
   heber[id].stars = stars
    this.setState({hebergements: heber})
   console.log(this.state)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Recherche handleSearch={this.rechVille} logements={this.state.nb_logements}/>
        <div className="center">
          <Hebergement ville={this.state.villeR} hebergements={this.state.hebergements} retStar={this.handleStar}/>
        </div>
      </div>
    );
  }
  
}

export default App;
