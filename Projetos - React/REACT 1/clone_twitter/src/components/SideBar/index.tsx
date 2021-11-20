import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você conheça"
            elements={[
              <FollowSuggestion
                name="Jefferson Santos"
                nickname="@Jefferson1709"
              />,
              <FollowSuggestion 
                name="Jefferson Santos"
                nickname="@Jefferson1709"
              />,
              <FollowSuggestion
                name="Jefferson Santos"
                nickname="@Jefferson1709"
              />,
            ]}
          />
            <List title="Assuntos no brasil"  elements={[ <News/>, <News/>, <News/>]} />
            <List title="Assuntos no exterior"  elements={[ <News/>, <News/>, <News/>]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
