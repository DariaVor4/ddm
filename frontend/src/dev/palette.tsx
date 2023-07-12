import React from 'react';

import {
  Category, Component, Variant, Palette,
} from '@react-buddy/ide-toolbox';
import MUIPalette from '@react-buddy/palette-mui';

function ExampleLoaderComponent() {
  return (<>Loading...</>);
}

export const PaletteTree = () => (
  <Palette>
    <Category name='App'>
      <Component name='Loader'>
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
    <MUIPalette />
  </Palette>
);
