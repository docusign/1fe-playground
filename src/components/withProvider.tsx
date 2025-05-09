import styled from '@emotion/styled';
import React from 'react';
import { Provider } from 'react-redux';

import { Box } from '../components/layout';
import { WidgetProps } from '../contract';
import '../public/assets/global.css';
import { store } from '../store';

const Wrapper = styled(Box)`
  height: 100%;

  > div {
    height: 100%;
  }
`;

/**
 * Wrap the application code in the various app level providers
 */
const withProvider = (Component: React.FC<WidgetProps>) =>
  function WidgetProvider(props: WidgetProps) {
    return (
      <Wrapper data-qa='bathtub.provider'>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </Wrapper>
    );
  };

export { withProvider };
