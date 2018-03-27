import React from 'react';
import { NavLink } from 'react-router-dom'
import stockData from '../stocks.json';

// Displays the information for the stock selected
const SingleStock = (props)=> {
        // Based on the stock selected, it will then go into the json file to pull the corresponding infromatino and display it.
        let stock = stockData.filter((element)=> element.symbol === props.match.params.id)[0];
        if (!stock) {return null;}
            else return (
            <article className="section">                
                <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><NavLink to={"/" }>Home</NavLink></li>
                    <li ><NavLink to={"/stocks" }><span >&nbsp;</span>Stocks</NavLink></li>
                    <li className="is-active"><span >&nbsp;&nbsp;</span>{stock.name}</li>

                  </ul>
                </nav>
                {/*The container to display the actual information for the stock*/}
                <div className="card columns">
                    <div id = "container-logo" className="card-image box is-marginless column">
                            <figure id = "stockImage" className="image">
                                {/* https://stackoverflow.com/questions/44154939/load-local-images-in-react-js */}
                              <img src={process.env.PUBLIC_URL + '/logos/'+ stock.symbol+ '.svg'} alt={stock.symbol} />
                            </figure>
                    </div>
                    <div className=" panel column is-two-thirds-desktop">
                        {/*Displays the stock symbol, sector, sub-industry, & address*/}
                        <div className="panel-block is-fullwidth">
                        <strong>Symbol:</strong> &nbsp;{ stock.symbol }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Sector:</strong> &nbsp;{ stock.sector }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Sub-Industry:</strong>&nbsp; { stock.subIndustry }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Address:</strong>&nbsp; { stock.address }
                        </div>
                    </div>

                </div>
            </article>
        );
};

export default SingleStock;