import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Product from './Product';

describe('Product component', () => {
  const ipod = {
    itemId: 123456,
    name: 'iPod',
    mediumImage: 'imageSrc'
  };

  it('should render properly', () => {
    const component = shallow(
      <Product product={ipod} />,
    );

    expect(toJson(component)).toMatchSnapshot();

  });

  it('test props', () => {
    const component = mount(<Product product={ipod} />);
    expect(component.prop('product')).toEqual(ipod);
  });
});
