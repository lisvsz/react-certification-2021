import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoListHome from './VideoListHome.component';

configure({ adapter: new Adapter() });

describe('<VideoListHome />', () => {
  it('renders 2 <CardHomePreview />', () => {
    const dataMock = {
      items: [
        {
          id: {
            videoId: '1',
          },
          snippet: {
            thumbnails: {
              high: {
                url: 'url',
              },
            },
            title: 'title',
            description: 'description',
          },
        },
        {
          id: {
            videoId: '2',
          },
          snippet: {
            thumbnails: {
              high: {
                url: 'url',
              },
            },
            title: 'title',
            description: 'description',
          },
        },
      ],
    };

    const wrapper = mount(<VideoListHome data={dataMock} />);

    const allRenderedComponents = wrapper.find('.card-home-review__image').length;

    expect(allRenderedComponents).toEqual(2);
  });
});
