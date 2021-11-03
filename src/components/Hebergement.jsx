import React from 'react';
import Card from './Card';
import '../scss/hebergement.scss';


export default class Hebergement extends React.Component{

    handleclic = (arr)=>{
        console.log('heberg ', arr)
        this.props.retStar(arr)
    }
    render(){
        return(
            <div className="hebergement">
                <h2 className="title">Hebergements a {this.props.ville}</h2>
                <div className="hebergement--container">
                    {
                        this.props.hebergements.map((el,index)=>{
                            return <Card key={index} logements={el} handleClick={this.handleclic} />
                        })
                    }
                </div>
            </div>
        )
    }
}