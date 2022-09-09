import styled from 'styled-components';
import { COLORS } from '../../utils/constant';

export const Card = styled.div`
    top: 60px;
    left: 0;
    position: absolute;
    min-width: 250px;
    padding: 20px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 150ms ease-in-out,transform 150ms ease-in-out;

    &.isActive {
        opacity: 1;
        transform: translateY(0px);
    }
`

export const CardHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
    /* padding: 5px 10px; */
`

export const ImageBox = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
`
export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`
export const ImgDec = styled.div`
    margin-top: 20px;
`
export const Text = styled.h1`
    font-size: 18px;
    font-weight: bold;
`
export const Des = styled.div`
    font-size: 14px;
    padding: 8px 0px;
    &:last-child{
        display: flex;
        align-items: center;
    }
`

export const CardBody = styled.div`
    padding-top: 10px; 
    width: 100%;
    height: 100%;
    border-top: 1px solid ${COLORS.searchBorder};
`

export const UnList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    list-style: none;
`

export const List = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    &:hover{
        background: #e8e8e8;
        cursor: pointer;
    }
`

export const CardFooter = styled.div`
    width: 100%;
    height: 100%;
`

export const Logout = styled.div`
    margin-top: 10px;
    border-top: 1px solid ${COLORS.searchBorder};
    display: flex;
    &:hover{
            background: #e8e8e8;
            cursor: pointer;
        }
`

export const Icons = styled.div`
    
    position: relative;
    width: 50px;
    height: 20px;
    
    & svg {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
`