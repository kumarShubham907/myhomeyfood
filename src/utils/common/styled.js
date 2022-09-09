import { createGlobalStyle } from 'styled-components';
import { CONTAINER_PADDING } from '../constant';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box ;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
    width:100% ;

    @media (max-width: 1456px) {
        padding: ${CONTAINER_PADDING.MONITOR_SCREEN_M.MAINSCREEN};
    }

    @media (max-width: 1256px) {
        padding: ${CONTAINER_PADDING.MONITOR_SCREEN_S.MAINSCREEN};
    }

    @media (max-width: 991px) {
        padding: ${CONTAINER_PADDING.TAB_SCREEN.MAINSCREEN};
    }

    @media (max-width: 768px) {
        padding: ${CONTAINER_PADDING.MOBILE_SCREEN.MAINSCREEN};
    }
`;
