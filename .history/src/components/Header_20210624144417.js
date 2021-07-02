function Header(){
    return (
        <nav className = "brown darken-2">
            <div className = "nav-wrapper">
                <a href="/" className = "brand-logo">React Food (SPA)</a>
                <ul id = "nav-mobile" className = "right hide-on-med-and-down">
                    <li> <a href="/about" target = "_blank" rel = "noreferrer">About</a> </li>

                    <li> <a href="/" target = "_blank" rel = "noreferrer">Contacts</a> </li>
                </ul>
            </div>
        </nav>
    )
  }
  export {Header}