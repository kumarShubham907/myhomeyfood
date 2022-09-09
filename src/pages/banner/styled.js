import styled from 'styled-components';
import { COLORS, FONTS, images} from '../../utils/constant';

export const BannerView = styled.div`
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.4)),url(${images.noodle_shop});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const Card = styled.div`
    width: 100%;
    height: 100%;
`
export const Text = styled.h1`
    font-size: 18px;
    font-weight: bold;
`
export const Des = styled.div`
    font-size: 14px;
    padding: 8px 0px;
    color: ${(props) => props.color};
`

export const CardHeader = styled.div`
    width: 50%;
    height: 100%;
`

export const CardBody = styled.div`
   
    width: 50%;
    height: 100%;
   
`

export const CardFooter = styled.div`

`


