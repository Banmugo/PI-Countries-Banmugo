import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchName } from '../redux/actions';
import'./styles/SearchBar.css'


export default function SearchBar({seteador}) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInput(e){
        e.preventDefault(e)
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault(e)
        seteador()
        dispatch(getSearchName(name))
             
    }

    return (
        <div>
            <input className='input' type="text" placeholder='Ej: Colombia' onChange={e => handleInput(e)}/>
            <button className='btnSearch' type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}