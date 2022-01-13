import React , {useEffect, useState} from 'react'
import logo from '../images/netflix-logo.png'
import avatar from '../images/netflix-avatar.png'

function NavBar()
{
    const [showNav, setShowNav] = useState(false);

    useEffect(() =>
    {
        window.addEventListener("scroll", () =>
        {
            if (window.scrollY > 100)
            {
                setShowNav(true)
            }
            else
                setShowNav(false);
        })
        return () =>
        {
            window.removeEventListener("scroll")
        }
    },[])

    return (
        <div className={`nav-container ${showNav&&'nav-black' }`}>
            <div className='d-flex nav-content' >
                <img id='logo' src= {logo} alt="" />
                <img id="avatar" src= {avatar} alt="" />
            </div>
        </div>
    )
}

export default NavBar
