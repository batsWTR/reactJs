import React from 'react';
import '../scss/recherche.scss';

export default class Recherche extends React.Component{

    submit = ()=>{
        console.log("submit")
        const input = document.getElementById("inputSearch")
        const ville = input.value
        input.value = ''

        if(ville === ''){
            return
        }

        this.props.handleSearch(ville)
    }
    render(){
        return(
            <div className="recherche">
                <h1>Trouvez votre hebergement pour des vacances de reves</h1>
                <p>En plein centre ville ou en pleine nature</p>
                <div className="inputSearch">
                    <i className="fas fa-map-marker-alt"></i>
                    <input id="inputSearch" type="text" />
                    <button onClick={this.submit}>Rechercher</button>
                </div>
                <div className="filtres">
                    <h2>Filtres</h2>
                    <ul></ul>
                </div>
                
                <div className="info">
                    <i className="fas fa-info"></i>
                    <p>Plus de {this.props.logements} logements disponibles dans votre ville</p>
                </div>
            </div>
        )
    }
}