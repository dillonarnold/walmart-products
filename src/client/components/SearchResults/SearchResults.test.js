import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchResults from './SearchResults';

describe('Product component', () => {
  const results = [
    {
      itemId: 123456,
      name: 'iPod',
      mediumImage: 'imageSrc'
    },
    {
      itemId: 231313,
      name: 'iPod Case',
      mediumImage: 'imageSrc2'
    }
  ];

  it('should render properly', () => {
    const component = shallow(
      <SearchResults producst={results} />,
    );

    expect(toJson(component)).toMatchSnapshot();

  });

  it('test props', () => {
    const component = mount(<SearchResults products={results} />);
    expect(component.prop('products')).toEqual(results);
  });
});
