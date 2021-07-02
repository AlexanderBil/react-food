import {Link} from 'react-router-dom';

function Header(){
    return (
        <nav className = "brown darken-2">
            <div className = "nav-wrapper">
                <a href="/" className = "brand-logo">React Food (SPA-Home)</a>
                <ul id = "nav-mobile" className = "right hide-on-med-and-down">
                    <li> <Link to="/about">About</Link> </li>
                    <li> <a href="/contacts">Contacts</a> </li>
                </ul>
            </div>
        </nav>
    )
  }
  export {Header}