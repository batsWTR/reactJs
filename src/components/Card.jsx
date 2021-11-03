import React from 'react';
import '../scss/card.scss';


export default class Card extends React.Component{

    //---------- click sur une etoile
    handleStar = (ev)=>{
        console.log(this.props.logements.id)
        let classe = new Array(...ev.target.classList)
        let nbStars = this.props.logements.stars

        if(classe.includes('blue')){
            console.log('blue',nbStars)
            nbStars === 5 ? nbStars = 4 : nbStars--
        }else if(classe.includes('grey')){
            console.log('grey',nbStars)
            nbStars === 0 ? nbStars = 1 : nbStars++
        }

        this.props.handleClick([nbStars,this.props.logements.id])
    }

    render(){
        const arrStar = new Array(5).fill(0)
        let nbStars = this.props.logements.stars

        return(
            <div className="card">
                <div className="img" style={ {backgroundImage: `url(${this.props.logements.pic})`}}></div>
                <h2>{this.props.logements.name}</h2>
                <p>Nuit a partir de <em>{this.props.logements.prix}</em>e</p>
                <div className="stars">
                    {
                        arrStar.map((el,index)=>{
                            if(nbStars === 0){
                                return <i key={index} onClick={this.handleStar} className="fas fa-star grey"></i>

                            }else{
                                nbStars--
                                return <i key={index} onClick={this.handleStar} className="fas fa-star blue"></i>

                            }
                        })
                    }
                </div>
            </div>
        )
    }
}