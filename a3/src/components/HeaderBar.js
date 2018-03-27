import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //This state property is the handler for the burger menu displayed only in mobile form
            menu: false
        };
    }
    
    //Turns on the burger menu on a mobile device and on the click of a menu item
    menuOn() {
        if (this.state.menu) {
            this.setState({menu:false})
        } else {
            this.setState({menu:true})
        }
        document.querySelector('#navBurger').classList.toggle("is-active");
        document.querySelector('.navbar-menu').classList.toggle("is-active");
    }
    
    //Drops down the menu on mouse-over
    menuDown() {
        document.querySelector('#mainMenu').classList.add("is-active");
    }

    //Moves the menu back up when the mouse moves away
    menuUp () {
        document.querySelector('#mainMenu').classList.remove("is-active");
    }


    render(){
        return(
        <nav className="navbar is-primary"> 
            <div className="navbar-brand">
                <a className="navbar-item">
                    <span className="icon">      
                        <i className="fab fa-lg fa-react"></i>       
                    </span>                 
                </a>                
                <NavLink className="navbar-item" to={ {pathname: "/home" }}>                   
                        <h1 className="title is-3">COMP 4513 A1</h1>
                </NavLink>
                
                {/*PUT MOBILE NAV BAR HERE*/}
                <a className=" navbar-burger" id="navBurger" onClick={this.menuON}>
                     <span></span>
                     <span></span>
                     <span></span>
                </a>
            </div>
            
            {/* Basic NavBar */}
            <div className="navbar-menu  navbar-dropdown">
                <div className="navbar-end">
                     <NavLink className="navbar-item" to={ {pathname: "/users" }} onClick={this.menuON} >
                        <div className="">Users</div>
                     </NavLink>
                    <hr />
                     <NavLink className="navbar-item" to={ {pathname: "/stocks" }} onClick={this.menuON}>
                        <div>Stocks</div>
                     </NavLink>
                     <hr />
                     <NavLink className="navbar-item" to={ {pathname: "/aboutus" }} onClick={this.menuON}>
                        <div>About Us</div>
                     </NavLink>
                </div>
            </div>
            {/* Desktop Navigation Yo */}
            <div className="navbar-end is-hidden-touch" id="desktop-menu" >
            <div id="mainMenu" className="dropdown is-right  is-fullheight" onMouseOver ={()=> this.menuDown()} onMouseOut={()=>this.menuUp()}>
              <div className="dropdown-trigger" >
                <button className="button is-primary  is-fullheight" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Menu</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <NavLink to={ {pathname: "/users" }} className="dropdown-item">
                    <div className="">Users</div>
                  </NavLink>
                  <hr className="dropdown-divider"/>
                  <NavLink to={ {pathname: "/stocks" }} className="dropdown-item">
                    <div>Stocks</div>
                  </NavLink>
                  <hr className="dropdown-divider"/>
                  <NavLink to={ {pathname: "/aboutus" }} className="dropdown-item is-info is-hovered">
                    <div>About Us</div>
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
           
        </nav>     

        );
    }
}
export default HeaderBar;
