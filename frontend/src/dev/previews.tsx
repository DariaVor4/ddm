import React from 'react';
import { Previews, ComponentPreview } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import { VisaRequestPage } from '../views/pages/VisaRequestPage.tsx';

const ComponentPreviews = () => (
  <Previews palette={<PaletteTree />} >
    <ComponentPreview path="/VisaRequestPage">
      <VisaRequestPage/>
    </ComponentPreview>
  </Previews>
);

export default ComponentPreviews;
