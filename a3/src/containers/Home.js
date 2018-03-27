//This was copied from our React Lab #2

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Home: []
        };
    }
    
    
    render (){
        return (
            <article className="section columns">
                <div className="column card">
                    {/*Card for Users*/}
                    <figure className="image is-3by3">
                        <img src=" https://placeimg.com/640/480/people/grayscale" alt="User" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/users" className="button is-primary is-fullwidth" >Users</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    {/*Card for Stocks*/}
                    <figure className="image is-3by3">
                        <img src="https://placeimg.com/640/480/tech/grayscale" alt="Stocks" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/stocks" className="button is-primary is-fullwidth" >Stocks</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    {/*Card for About Us*/}
                    <figure className="image is-3by3">
                        <img src="https://placeimg.com/640/480/arch/grayscale" alt="About Us" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/aboutus" className="button is-primary is-fullwidth" >About Us</NavLink>
                          </div>
                    </div>
                </div>
                </div>
            </article>
            
        );
    }
}

export default Home;