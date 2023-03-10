import React, {useState} from 'react'
import Icon from "../../assets/icons8-weather-64.png"
import Search from "../../assets/icons8-search.png"

export default function Nav() {
    const [toogle, setToogle] = useState(false)
    

  return (
    <header className='nav nav_banner'>
        <div className='nav_logo_container '>
            <img className='logo_nav' src={Icon} alt="" />
        </div>
        <div className='input_search_nav_container'>
            <input type="search" />
            <img src={Search} alt="" />
        </div>
    </header>
  )
}
