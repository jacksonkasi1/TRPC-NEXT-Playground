import React, { FC } from 'react';
import { Playground } from '@trpc-playground/components';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Playground
      config={{
        trpcApiEndpoint: 'http://localhost:3000/api/trpc',
        playgroundEndpoint: 'http://localhost:3000/api/trpc-playground',
        polling: {
          enable: true,
          interval: 4000,
        },
        request: {
          globalHeaders: {},
          superjson: true,
        },
      }}
    >
      hi
      {/* Add any children components or content here, even if it's empty */}
    </Playground>
  );
}

export default App;
