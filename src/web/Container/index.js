import styled from 'styled-components';

import mainBg from './images/bg.png';

const Container = styled.div`
    display: flex;
`

export const CenterContainer = styled(Container)`
    justify-content: center;
    align-items: center;
`

export const FullContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerFluid = styled.div.attrs(props => ({
    className: `${props.padded ? 'padded' : ''}`
}))`
    padding: 0;
    &:after, &:before {
        display: table;
        content: "";
        line-height: 0;
    }

    &.padded {
        padding: 15px;
    }
`

export const MainContainer = styled(FullContainer)`
    background-image: ${props => props.theme.mainContainerBackground === 'normal' ? `url(${mainBg})` : ''};
    background-color: rgba(0, 0, 0, 0);
`

MainContainer.defaultProps = {
    theme: {
        mainContainerBackground: 'normal'
    }
}


export default Container;
