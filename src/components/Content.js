import React, {useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {load, select, deselect} from '../redux/features/image'
import Prompt from './Prompt'

function Content() {
  
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.display);

  useEffect(() => {
    const url = 'http://eulerity-hackathon.appspot.com/pets';

    // GET request to /image then set redux state to response
    const getImages = async url =>{
      try{
        let response = await axios.get(url);
        response = await response.data;
        dispatch(load(response));
      } catch (error){
        console.log(error);
      }
    }

    getImages(url);
  }, [])

  const allImages = images.map( (image, i) => {
    return <ImageContainer>
      <Image data-id={i} src={image.url} title={image.title} alt={image.description}/>
      <ImageCheckbox type="checkbox"/>
      <ImageTitle>{image.title}</ImageTitle>
      <ImageCaption>{image.description}</ImageCaption>
    </ImageContainer>
  })

  const onImageClick = e => {
    const el = e.target
    if(el.nodeName === "IMG"){
      // maybe add try-catch in case next sibling isn't the checkbox
      const id = parseInt(el.dataset.id);
      const selectedImage = images[id];
      const checkbox = el.nextSibling;
      checkbox.checked = !checkbox.checked;
      checkbox.checked ? dispatch(select(selectedImage)) : dispatch(deselect(selectedImage));
    }
  }

  return (
    <Container onClick={onImageClick}>
      <Prompt/>
      {allImages}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);

  @media (max-width: 525px){
    min-width:525px;
  }
  
`;

const ImageContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  position: relative
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;

const ImageTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const ImageCaption = styled.figcaption`
  font-weight: 500;
`

const ImageCheckbox = styled.input.attrs({
  className: 'img-chkbk'})`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 5px;
  right: 5px;
  visibility: hidden;

  &:checked{
    visibility: visible; 
  }
`;

export default Content