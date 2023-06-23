import React,{useState} from 'react';
import {NavLink , Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import Cart from '../components/Cart';
import { RiMenuFill, RiCloseCircleLine } from "react-icons/ri";


function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu =() =>{
    let responsive = document.getElementById('responsive')
    if(responsive.classList.contains('hidden')){
      responsive.classList.remove('hidden')
    }else{
      responsive.classList.add('hidden')
    }
    setShowMenu(!showMenu)
  }
  const menu =[
    {
      id:0,
      category:'Pizzas'
    },
    {
      id:1,
      category:'Empanadas'
    },
    {
      id:2,
      category:'Sandwiches'
    },
    {
      id:3,
      category:'Bebidas'
    }
  ]

  return (
    <>
      <header className='flex h-auto w-full m-auto px-3 bg-black text-white justify-between items-center fixed z-50' >
        <div className='text-4xl text-white md:hidden ' onClick={toogleMenu}>
          { showMenu ? <RiCloseCircleLine/> :  <RiMenuFill />}
        </div>
        <div className='h-20 bg-black'>
            <Link to={'/'}>
                <img className='h-full hidden md:block' src={logo} alt="" />
            </Link>
        </div>
        <div  id='responsive' className='hidden md:block'>
          <nav>
            <ul className={`${ showMenu ? 'flex flex-col m-10 text-2xl' : 'flex p-5'}`}>
              <li className='m-1'>
              <NavLink  
                    className={({ isActive}) => ` m-2 py-1 px-2 text-center text-1xl ${isActive ? "border-b" : ""}`}
                    to={'/'}>Inicio</NavLink>

              </li>
              {
                menu.map((p) => (
                  <li key={p.id} className='m-1'>
                    <NavLink  
                    className={({ isActive}) => ` m-2 py-1 px-2 text-center text-1xl ${isActive ? "border-b" : ""}`}
                    to={'category/' + p.category}>{p.category}</NavLink>
                  </li>

                ))
              } 
            </ul>
          </nav>

        </div>
        <div>
          < Cart />
        </div>
      
      </header>
  
    </>
  )
}

export default Header
