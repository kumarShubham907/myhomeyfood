import styled from 'styled-components';
import { COLORS, FONTS } from '../../utils/constant';

export const CardMenu = styled.div`
    top: 80px;
    left: -10%;
    position: absolute;
    width: 120%;
    min-height: 30vh;
    min-width: 250px;
    padding: 20px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.2);
    border-radius: 4px;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 150ms ease-in-out,transform 150ms ease-in-out;
    display: flex;
    z-index: 1000000;
    background: #ffffff;
    &.isActive {
        opacity: 1;
        transform: translateY(0px);
    }
`

export const Text = styled.h1`
    font-size: 18px;
    font-weight: bold;
`
export const CurrDes = styled.div`
    font-size: 14px;
    padding: 8px 0px;
    color: ${(props) => props.color};
`

export const SerchCardHeader = styled.div`
    padding-top: 10px; 
    width: 50%;
    height: 100%;
   
`

export const RecentLoc = styled.div`
    width: 100%;
    height: 100%;
     border-bottom: 1px solid ${COLORS.searchBorder};
`

export const RecentHeader = styled.div`
    width: 100%;
    
`


export const CurretnLoc = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
   
    &:hover{
        border-radius: 4px;
        background: ${COLORS.backgroundHover};
        cursor: pointer;
    }
`

export const GoogleSearchField = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 100%;
`

export const ConfirmButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`

export const RecentBody = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    & svg{
        width: 22px;
        height: 18px;
    }
`
export const MapBlock = styled.div`
    position: relative;
    width: 100%;
    min-height: 30vh;
    border:8px solid #efefef;
    border-radius: 4px;
    & image{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
`
export const SearchImg = styled.input`
    outline: none ;
    width: 90%;
    background: none;
    color: #000 ;
    border: none ;
    padding: 4px 16px;
    font-size: ${FONTS.body3};
    border-bottom:1px solid ${COLORS.gpsColor};
`;

export const SearchCardFooter = styled.div`
display: flex;
justify-content: flex-end;
    padding-left: 20px;
    width: 60%;
    height: inherit;
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

export const Button = styled.button`
    outline: none;
    padding: 8px 12px;
    background-color: ${COLORS.gpsColor};
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    &:hover{
        background: #ed6f7c;
    }
`