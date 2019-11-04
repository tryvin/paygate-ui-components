import React from 'react';

import { ContainerFluid } from '../../Container';
import { GridContainer, Row, Col } from '../../Grid';

import SubHeaderBar, { SubHeaderBarContent } from '../../SubHeaderBar';

import ButtonBox from './ButtonBox';
import SummaryBox from './SummaryBox';

export default (props) => (
    <ContainerFluid>
        <SubHeaderBar>
            <SubHeaderBarContent title={'Inicio'} subtitle={'Visão geral da organização'} icon={'tachometer-alt'}/>
        </SubHeaderBar>

        <ContainerFluid padded>
            <GridContainer fluid>
                <Row>
                    <Col xs={4} sm={8} md={3} lg={3}>
                        <ButtonBox />
                    </Col>
                    <Col xs={4} sm={8} md={5} lg={9}>
                        <SummaryBox />
                    </Col>
                </Row>
            </GridContainer>
        </ContainerFluid>
    </ContainerFluid>
)
