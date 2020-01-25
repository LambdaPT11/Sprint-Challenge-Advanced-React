import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Player />
  );
  const element = wrapper.queryByLabelText(/Player/);
  expect(element).toBeInTheDocument();
});
