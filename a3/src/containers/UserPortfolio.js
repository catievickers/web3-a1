import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import stockData from '../stocks.json';
import stockPort from '../userStockPortfolio.json';

class UserPortfolio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.id,
        };
    }
    // Wait for component to mount and data to load to sort stocks.
    componentDidMount(){
        this.sortStocksName(stockData);
    }
    //Sort the stocks by the name, and then set the state accordingly
    sortStocksName() {
        let indvStockPort =  stockPort.filter((element)=> element.userId === this.state.currentUserId);
        this.setState({userstockPort:indvStockPort});
        let userPortYes =[];
        for (let singleStock of indvStockPort){
            //search for the symbol of singleStock.symbol in the stockData array 
            // eslint-disable-next-line
            stockData.find((element)=>{if(singleStock.symbol === element.symbol){userPortYes.push({symbol:element.symbol,amount:singleStock.amount,stockName:element.name})}});
        }
        userPortYes = userPortYes.sort((a,b)=>{let result =0; if (a.stockName <b.stockName)result=-1;else if(b.stockName<a.stockName)result=1;return result;});
        this.setState({userPortfolio:userPortYes});
    }
    // Sort Columns
    sortStocks(stockInfo) {
        let sorted = [];
        let stockAmount = document.querySelector("#stockAmount");
        let stockName = document.querySelector("#stockName");
        let stockSymbol = document.querySelector("#stockSymbol");
       
       
       
        //Shows the stock amount
        if(stockInfo==='amount' && stockAmount.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.amount <b.amount)result=1;else if(b.amount<a.amount)result=-1;return result;});
            stockAmount.classList.remove("ascending");
            stockAmount.classList.add("descending");
        }else if(stockInfo==='amount' && stockAmount.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.amount <b.amount)result=-1;else if(b.amount<a.amount)result=1;return result;});
            stockAmount.classList.remove("descending");
            stockAmount.classList.add("ascending");
        }
        //Shows the stock name
         if(stockInfo==='name' && stockName.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.stockName <b.stockName)result=1;else if(b.stockName<a.stockName)result=-1;return result;});
            stockName.classList.remove("ascending");
            stockName.classList.add("descending");
        }else if(stockInfo==='name' && stockName.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.stockName <b.stockName)result=-1;else if(b.stockName<a.stockName)result=1;return result;});
            stockName.classList.remove("descending");
            stockName.classList.add("ascending");
        }
        //Shows the stock symbol
         if(stockInfo==='symbol' && stockSymbol.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.symbol <b.symbol)result=1;else if(b.symbol<a.symbol)result=-1;return result;});
            stockSymbol.classList.remove("ascending");
            stockSymbol.classList.add("descending");
        }else if(stockInfo==='symbol' && stockSymbol.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.symbol <b.symbol)result=-1;else if(b.symbol<a.symbol)result=1;return result;});
            stockSymbol.classList.remove("descending");
            stockSymbol.classList.add("ascending");
        }
        
        this.setState({userPortfolio:sorted});
    }
    
    //This renders the information from the sorting done above, and shows only the stocks that the current user selected has bought into.
    render(){
        return(
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-narrow-mobile">
                    <tbody>
                    <tr className="thead  amountDown nameDown symbolDown is-narrow-mobile" id="sortTracker">
                        <th onClick={()=>this.sortStocks("symbol")} ><span className="media"><a className="button is-text media-content	is-narrow-mobile">Symbol</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='stockSymbol'></i></span></span></th>
                        <th onClick={()=>this.sortStocks("name")} ><span className="media"><a className="button is-text media-content	is-narrow-mobile">name</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='stockName'></i></span></span></th>
                        <th onClick={()=>this.sortStocks("amount")}><span className="media"><a className="button is-text media-content	is-narrow-mobile">amount</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='stockAmount'></i></span></span></th>
                        </tr>
                        {/*  check state and render if/when available */}
                        {this.state.userPortfolio?
                            this.state.userPortfolio.map((stock, ind) => {
                                return(
                                    <tr key={ind}>
                                    <td>
                                        <NavLink to={"/stocks/" + stock.symbol} stock={stock} key={ind}>{stock.symbol}</NavLink>
                                    </td>
                                    <td><NavLink to={"/stocks/" + stock.symbol} key={ind}>{stock.stockName}</NavLink></td>
                                    <td>{stock.amount}</td>
                                    </tr>
                                );
                            }):null
                        }
                    </tbody>

            </table>        
        );
    }
}
export default UserPortfolio;
