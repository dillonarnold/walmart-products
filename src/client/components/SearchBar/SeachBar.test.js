import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from './SearchBar';

describe('Product component', () => {

  it('should render properly', () => {
    const component = shallow(
      <SearchBar searchProducts={(test) => {}} />,
    );

    expect(toJson(component)).toMatchSnapshot();

  });

  it('calls search', () => {
    const callback = jest.fn();
    const component = mount(<SearchBar searchProducts={callback} />);
    // Simulate enter key
    component.find('input').simulate('keyDown', {key: 'Enter'});

    expect(callback).toBeCalled();
  });
});
