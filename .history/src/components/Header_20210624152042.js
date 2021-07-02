import {Link} from 'react-router-dom';

function Header(){
    return (
        <nav className = "brown darken-2">
            <div className = "nav-wrapper">
                <Link href="/" className = "brand-logo">React Food (SPA-Home)</Link>
                <ul id = "nav-mobile" className = "right hide-on-med-and-down">
                    <li> <Link to = "/about">About</Link> </li>
                    <li> <Link to = "/contacts">Contacts</Link> </li>
                </ul>
            </div>
        </nav>
    )
  }
  export {Header}