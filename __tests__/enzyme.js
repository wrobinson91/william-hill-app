import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import App from '../src/client/components/App';
import TeamInfoContainer from '../src/client/containers/TeamInfoContainer';
import TeamDisplay from '../src/client/components/TeamDisplay';
import TeamSelection from '../src/client/components/TeamSelection';

configure({ adapter: new Adapter() });


describe('React unit tests', () => {
  // tests to go here
  describe('TeamInfoContainer unit test', () => {
    let shallowWrapper;
    let mountedWrapper;

    beforeAll(() => {
      shallowWrapper = shallow(<TeamInfoContainer />);
      mountedWrapper = mount(<TeamInfoContainer />);
    });

    it('Renders section tag with class name "team-info-container", with one TeamDisplay and one TeamSelection component each', () => {
      expect(shallowWrapper.type()).toEqual('section');
      expect(shallowWrapper.hasClass('team-info-container')).toBeTruthy();
      expect(shallowWrapper.find(TeamDisplay).text()).toBe('<TeamDisplay />');
      expect(shallowWrapper.find(TeamSelection).text()).toBe('<TeamSelection />');
    });
  });
});
