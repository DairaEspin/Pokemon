import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BiHomeSmile} from "react-icons/bi"
import {Button, ButtonCont} from './styledNav'
import SearchBar from '../searchbar/searchbar.component'

function Nav({onSearch}){
    return (
        <div>
            <ButtonCont>
            <Link to='/home'><Button> HOME </Button></Link>
            <Link to='/about'><Button> ABOUT </Button></Link>
            <Link to='/create'><Button> CREAR POKEMON </Button></Link>
            <Link to='/type'><Button> TIPOS </Button></Link>
            <SearchBar onSearch={onSearch}/>
            </ButtonCont>
        </div>
    )
}

export default Nav;