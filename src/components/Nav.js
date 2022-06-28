import React from 'react'
import styled from 'styled-components'
import { throttle } from 'throttle-debounce'

function Nav() {
    const Navigation = styled.nav`
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    const Link = styled.a `
    `;

    const Search = styled.form`
    `;

    const TextInput = styled.input``;

    const throttleUserInput = throttle(
        1000,
        () => console.log("hello")
    )

    const handleSearchForm = async (e, input) => {
        e.preventDefault();
        try{
            const url = 'http://eulerity-hackathon.appspot.com/image';
            // const res = await axios.get(url);
            // const images = await res.json();
            // console.log(images)
        } catch(error){
            console.log(error)
        }
    }
    return (
        <Navigation>
            <Link href='#'> Home </Link>
            <Search onSubmit={handleSearchForm}>
                <TextInput type="text" placeholder="Search..." onChange={throttleUserInput}/>
            </Search>
            <Link href='#'> About </Link>
        </Navigation>
    )
}

export default Nav

