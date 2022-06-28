import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {load} from '../redux/features/image'

function Content() {
  
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images)

  useEffect(() => {
    const url = 'http://eulerity-hackathon.appspot.com/image';

    // GET request to /image then set redux state to response
    const getImages = async url =>{
      let response = await axios.get(url);
      response = await response.data;
      dispatch(load(response));
    }

    getImages(url);
  }, [])

  const size = '250px';

  const Container = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, ${size});
    grid-gap: 1rem;
    justify-content: space-between; 
  `;

  const ImageContainer = styled.div`
    position: relative;
    height: ${size};
    width: ${size};
  `;

  const Image = styled.img`
    height: inherit;
    width: inherit;
  `;

  const ImageCheckbox = styled.input`
    position: absolute;
    top: 5px;
    right: 5px;
  `;

  const onImageClick = e => {
    const el = e.target
    if(el.nodeName === "IMG"){
      // maybe add try-catch in case next sibling isn't the checkbox
      const checkbox = el.nextSibling;
      checkbox.checked = !checkbox.checked;
    }
  }

  const allImages = images.map(image => {
    return <ImageContainer>
      <Image src={image.url}/>
      <ImageCheckbox type="checkbox"/>
    </ImageContainer>
  })

  return (
    <Container onClick={onImageClick}>
      {allImages}
    </Container>
  )
}

export default Content