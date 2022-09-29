import React from 'react'
import "./Navbar.css"
import Cartwidget from './Cartwidget'
import Itemlistcontainer from './Itemlistcontainer'

const Header = ({user}) => {

    return (


        <div className='header'>
            <div className='nav-welcome'>
                <img className='icon' src={"./logo192.png"} />
                <p>Bienvenido {user}</p>
            </div>
            <Itemlistcontainer/>

            <Cartwidget/>            

        </div>
    )
}

export default Header
