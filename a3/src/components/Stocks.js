import React from 'react';

//Imports the stock information from the json fi
import stockData from '../stocks.json';
import { NavLink } from 'react-router-dom';


//Trying the arrow function, and it works. Such wow. Much amaze. 
const Stocks = ()=>{

    return(
        <div className="section">
            <nav className="breadcrumb is-12" aria-label="breadcrumbs">
              <ul>
                <li><NavLink to={"/" }>Home</NavLink></li>
                <li className="is-active">Stocks</li>
              </ul>
            </nav>
            <div className="card-table">
                <div className="content">
                  <div className="table">
                    <div  className="box tbody panel">
                    {stockData.map((stock, ind)=>{return(
                      <div className="is-fullwidth columns panel-block " key={ind}>
                        <NavLink to={"/stocks/" + stock.symbol} className="columns  column is-12">
                            <div  className=" column  is-3 is-centered	" >
                                    <figure className="image box  is-marginless is-128x128 is-centered">
                                      {/*After many unsuccessful attempts of using an image like you would in regular HTML, I did a Google, and came across this StackOverflow article*/}
                                      {/* https://stackoverflow.com/questions/44154939/load-local-images-in-react-js */}
                                      <img src={process.env.PUBLIC_URL + '/logos/'+ stock.symbol+ '.svg'} alt={stock.symbol} />
                                    </figure>
                            </div>
                            <div  className=" column is-9  ">
                                <h1 className="">{stock.name}</h1>
                            </div>
                        </NavLink>
                      </div>
                );})}
                </div>
            </div>
        </div>
      </div>
        </div>
    );

};
export default Stocks;