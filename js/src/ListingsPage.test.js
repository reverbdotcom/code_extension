import React from 'react';
import { mount } from 'enzyme';
import * as API from './API';
import ListingsPage from './ListingsPage';

describe('<ListingsPage />', () => {
  let response;

  beforeEach(() => {
    response = Promise.resolve({
      listings: [
        {
          id: '1',
          title: 'Fender Telecaster',
          photos: [
            { _links: { small_crop: { href: 'tele.png' } } },
          ]
        },
        {
          id: '2',
          title: 'Gibson SG',
          photos: [
            { _links: { small_crop: { href: 'gibson.png' } } },
          ]
        },
      ]
    })

    jest.spyOn(API, 'fetchListings').mockImplementation(() => (response));
  });

  it('displays listings from the API on mount', async () => {
    const page = mount(<ListingsPage />);
    await response;

    page.update();
    expect(page.find('li').length).toEqual(2);

    expect(page.find('li').at(0).text()).toEqual('Fender Telecaster');
    expect(page.find('img').at(0).prop('src')).toEqual('tele.png');

    expect(page.find('li').at(1).text()).toEqual('Gibson SG');
    expect(page.find('img').at(1).prop('src')).toEqual('gibson.png');
  });
});

