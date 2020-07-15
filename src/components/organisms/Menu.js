import React,{useState} from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/Variables'
import Lists from './Lists'


const Container = styled.div``
const Bar = styled.i`
  cursor: pointer;
`
const Menu = () => {
    const [open,setOpen] = useState(false);
    const Show = () => {
        setOpen(!open)
    }
    return (
        <Container>
            <Bar className='fa fa-bars' onClick={Show}></Bar>
            <Lists open={open}/>
        </Container>
    );
}

export default Menu
