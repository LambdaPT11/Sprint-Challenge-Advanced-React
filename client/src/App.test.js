import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render } from '@testing-library/react';

import App from './App'
import Player from './components/Player.component';
import PlayerCard from './components/PlayerCard.component';


// Is the App itself rendering
it('renders App without crashing', () => {
  const wrapper = rtl.render(
    <App />
  );
  const element = wrapper.getByTestId('App');
  expect(element).toBeInTheDocument();
});

it('renders the player component', () => {
  const playWrapper = rtl.render(
    <Player />
  );
  const element = playWrapper.findByText(/player/i);
  expect(element).toBeTruthy();
});

it ('render image of playerCard', () => {
  const cardWrapper = rtl.render(
    <PlayerCard />
  );
  const element = cardWrapper.findAllByAltText(/women soccer player/);
  expect(element).toBeTruthy();
});

it('nav has the  text', () => {
  const simulatedDOM = rtl.render(
    <PlayerCard />
  );
  const h2 = simulatedDOM.getByTestId('cardInfo')
  expect(h2).toBeInTheDocument();
});
