import styled from 'styled-components';
import { CONTAINER_PADDING, COLORS, FONTS } from '../../utils/constant';
export const Container = styled.div`
    position: fixed;
    width:100% ;
    box-shadow: -2px 0px 20px rgb(0 0 0 / 0.1);
    padding: ${CONTAINER_PADDING.MONITOR_SCREEN_L.NAVBAR};
    background: ${COLORS.white};
    z-index: 10000;
    
    @media (max-width: 1456px) {
        padding: ${CONTAINER_PADDING.MONITOR_SCREEN_M.NAVBAR};
    }

    @media (max-width: 1256px) {
        padding: ${CONTAINER_PADDING.MONITOR_SCREEN_S.NAVBAR};
    }

    @media (max-width: 991px) {
        padding: ${CONTAINER_PADDING.TAB_SCREEN.NAVBAR};
    }

    @media (max-width: 768px) {
        padding: ${CONTAINER_PADDING.MOBILE_SCREEN.NAVBAR};
    }
`;

export const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    position: relative;
    width: 100px;
    height: 70px;
    & img{
        object-fit: contain;
    }
`;

export const SearchBox = styled.div`
position: relative;
    width: 60%;
    min-width: 255px;
    border:1px solid ${COLORS.searchBorder};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    & svg{
        width: 22px;
        height:22px;
        margin: 0px 10px;
        cursor: pointer;
        &:hover{
            transition: 0.4s ease-in-out;
            transform: scale(1.2);
        }
    }
`;

export const SearchLocations = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
    cursor: pointer;
   & div {
       border-left: 1px solid ${COLORS.searchBorder};
       border-right: 1px solid ${COLORS.searchBorder};
   }
`;

export const SearchMenu = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
`;

export const LocationName = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 0px 10px;
`

export const SearchImg = styled.input`
    outline: none ;
    width: 100%;
    background: none;
    color: #000 ;
    border: none ;
    padding: 4px 16px;
    font-size: ${FONTS.body3};
    border-right:1px solid ${COLORS.searchBorder};
`;

export const ImageBox = styled.div`
    position:relative ;
    width: 32px;
    height:32px ;
    border-radius: 50%;
    object-fit: contain;
    overflow: hidden;
    cursor: pointer;
    z-index: 100;
`

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height:100% ;
    object-fit: cover;
`

export const UList = styled.ul`
    height: 100%;
    list-style: none ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const List = styled.li`
    position: relative;
    display: grid;
    place-items: center;
    margin: 0 8px;
     &:last-child{
        width: 50px;
     }
`;

export const Icons = styled.div`
    width: 50px;
    height: 25px;
    & svg {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
`

