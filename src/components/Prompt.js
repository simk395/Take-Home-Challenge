import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {selectAll, deselectAll} from '../redux/features/image'

function Prompt() {

    const dispatch = useDispatch();
    const selectedImages = useSelector(state => state.images.selected)
    
    const onSelectAll = e => {
        const checkboxes = document.querySelectorAll('.img-chkbk');
        checkboxes.forEach(checkbox => checkbox.checked = true);
        
        dispatch(selectAll());
    }

    const onCancelSelection = e => {
        const checkboxes = document.querySelectorAll('.img-chkbk');
        checkboxes.forEach(checkbox => checkbox.checked = false);
        dispatch(deselectAll());
    }

    const onDownloadImages = e => {

        const toBlob = async url => {
            let response = await fetch(url);
            response = await response.blob();
            return response;
        }

        const parseFilename = url => {
            const findName = url.split("/");
            const length = findName.length;
            const foundName = findName[length - 1];
            const parseName = foundName.split("?");
            const name = parseName[0];
            return name;
        }

        selectedImages.forEach(async image => {
            const url = image.url;
            const blob = await toBlob(url);
            const name = parseFilename(url);

            const anchorEl = document.createElement('a');
            anchorEl.href = URL.createObjectURL(blob)
            anchorEl.download = name;
            anchorEl.click();
        })
    }

    return (
        <Container>
            <SelectButton onClick={onDownloadImages}> Download Images </SelectButton>
            <SelectButton onClick={onSelectAll}> Select All </SelectButton>
            <SelectButton onClick={onCancelSelection}> Clear Selection </SelectButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

const SelectButton = styled.button`
    margin: 1rem 0;
    width: 30%;
    height: 2rem;

    @media (max-width: 770px){
        width:15rem;
    }

    @media (max-width: 500px){
        height:3rem;
    }
`


export default Prompt