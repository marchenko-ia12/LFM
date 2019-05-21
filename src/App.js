import React from 'react';
import styled from 'styled-components';
import {ArtistProvider} from './artistProvider';
import Header from './header/header';
import {LastfmApp} from './Routes';


function App() {
  const initialState = {
    artistData: {},
    albumData: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeArtist':
        return {
          ...state,
          artistData: action.newArtist,
        };
      case 'albumList':
        return {
          ...state,
          albumData: action.albumData,
        };

      default:
        return state;
    }
  };


  return (
    <ContentWrapper>
      <ArtistProvider initialState={initialState} reducer={reducer}>
        <Header />
        <LastfmApp />
      </ArtistProvider>
    </ContentWrapper>
  );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1366px;
    margin: 40px;
    
    @media (min-width: 1366px) {
        margin: 40px auto;
    }
`;
