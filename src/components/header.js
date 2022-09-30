import toast from '../frenchToast.jpg';
import {Link} from "react-router-dom";

export default function Header() {
  
    return(
      
      <header className='container'>
       
       <h1 className='title'>Early Morning Delight</h1>
       <img
        className='image'
        src={toast} alt="toasties"
        />
        <Link to ={'menu/'}><button>LET ME SEE THE MENU</button></Link>
       
       <p className='cta' >COME EAT WITH US FROM 5AM to 2PM</p>

       </header>


    
 
    );
}