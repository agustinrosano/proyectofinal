import CartWidget from "./cartwidget";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
    <header>
      <nav className="navbar navbar-expand-xxl navbar-light bg-primary d-flex ">
      
      
          <div className="container-fluid d-flex ">
          <Link to={'/'}> <p className="navbar-brand" >$HOP</p></Link>
      
      
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
      
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-evenly">
                 <Link to={'/category/1'}> <p className="navbar-brand" >Alcohol</p></Link>
                 <Link to={'/category/2'}> <p className="navbar-brand" >Bebidas</p></Link>
                 <Link to={'/category/3'}> <p className="navbar-brand" >Licores</p></Link>
              </div>
            </div>       
          </div>
          

          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
              
          <CartWidget/><span>4</span>
          
            </div>
        </nav>
    </header>
    )
  }
    
    export default Navbar;
    