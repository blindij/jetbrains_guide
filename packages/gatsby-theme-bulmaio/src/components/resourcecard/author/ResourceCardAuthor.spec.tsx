import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardAuthor, ResourceCardAuthorProps } from './ResourceCardAuthor';

export const DUMMY_RCA: ResourceCardAuthorProps = {
  slug: '/slug1',
  title: 'title1',
  thumbnail: {
    publicURL: '/publicURL1',
    childImageSharp: {
      fluid: { aspectRatio: 9, src: 'src', srcSet: 'src', sizes: '987' }
    }
  }
};

it('ResourceCardAuthor', () => {
    const { getByText, getByAltText } = render(<ResourceCardAuthor {...DUMMY_RCA}/>);
    expect(getByText(DUMMY_RCA.title as string)).toBeTruthy();
    expect(getByAltText('rca-fluid')).toHaveAttribute('sizes', '987');
});
