import React from 'react'
import styled from 'styled-components'
import { throttle } from 'throttle-debounce'
import {useDispatch} from 'react-redux'
import {search} from '../redux/features/image'

function Nav() {
    const dispatch = useDispatch();

    // can also use onSubmit for form if you only want to show on submitting search
    const onSearch = throttle(1000, e => {
        const input = e.target.value;
        dispatch(search(input));
    })
    
    return (
        <Container>
            <NavItem href='/'> Home </NavItem>
            <Searchbar type="text" placeholder="Search..." onChange={onSearch}/>
            <NavItem href='/about'> About </NavItem>
        </Container>
    )
}

const Container = styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
    width:100%;
`;

const NavItem = styled.a `
    font-size:1.5rem;
    text-decoration: none;    
    &:visited{
        color: inherit;
    }
`;

const Searchbar = styled.input`
    border-radius: 25px;
    padding: 0 1rem;
    border: none;
    margin: 0 2rem;
    background: #f5f5f5;
    flex: auto;

    &:focus{
        background: white;
        border: 0.5px solid black;
        outline: none;
    }
`;


export default Nav

