import React  from 'react'; 
import './styles.scss';
import logo from './feligtlogo.png';
const Header = props =>(
    <div className="header">
        <img src={logo} alt="feligtlogo"/>
        {/* <h3>this is the header  part</h3> */}
    </div>
)

export default Header;