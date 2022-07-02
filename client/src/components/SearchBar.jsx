import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchName } from '../redux/actions';


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInput(e){
        e.preventDefault(e)
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault(e)
        dispatch(getSearchName(name))
             
    }

    return (
        <div>
            <input type="text" placeholder='Ej: Colombia' onChange={e => handleInput(e)}/>
            <button type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}