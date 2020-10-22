import styled from 'styled-components';

import layer from '../../assets/img/section-style-1.png';

export const Wave = styled.div`
    position: relative;
    height: 500px;
    /* background: rgba(0, 0, 0, 0) url('./assets/img/fundo-about.jpg') no-repeat scroll center center / cover; */

    &::before {
        background: rgba(0, 0, 0, 0.5) url(${layer});
        background-position: bottom left;
        background-repeat: no-repeat;
        -webkit-background-size: contain;
        background-size: contain;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        transform: rotate(180deg);
    }

    @media (max-width: 575px) {
        height: 300px;
    }

`;