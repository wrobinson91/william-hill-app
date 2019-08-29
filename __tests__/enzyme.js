import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import App from '../src/client/components/App';
import TeamInfoContainer from '../src/client/containers/TeamInfoContainer';
import TeamDisplay from '../src/client/components/TeamDisplay';
import TeamSelection from '../src/client/components/TeamSelection';
import BoldedLabel from '../src/client/components/styled/BoldedLabel';

configure({ adapter: new Adapter() });


describe('React unit tests', () => {
  // tests to go here

  describe('Bolded Label unit test', () => {
    let wrapper;
    const props = { label: 'Test Label:' };

    beforeAll(() => {
      wrapper = shallow(<BoldedLabel {...props} />);
    });

    it('Renders a span tag with interior text that matches the props', () => {
      expect(wrapper.type()).toEqual('span');
      expect(wrapper.text()).toEqual('Test Label:');
    });
  });

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

  describe('TeamDisplay unit test', () => {
    // const addCardMock = jest.fn();
    // const deleteCardMock = jest.fn();

    const props = {
      teamInfo: {
        name: 'Sacramento Kings',
        yearFormed: 1925,
        league: 'NBA',
        manager: 'Will Robinson',
        stadium: 'Testing Stadium',
        website: 'http://www.testurl-teamsite.com/',
        description: 'This is a description for a team, test.',
        badge: 'http://www.testurl-badge.com/',
        fanArtEmbed: 'http://www.testurl-fanart.com/',
      },
    };

    let shallowWrapper;
    let mountedWrapper;

    beforeAll(() => {
      shallowWrapper = shallow(<TeamDisplay {...props} />);
      mountedWrapper = mount(<TeamDisplay {...props} />);
    });

    describe('snapshot testing', () => {
      it('renders correctly', () => {
        const tree = renderer
          .create(<TeamDisplay {...props} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    it('should render four section components', () => {
      const sections = shallowWrapper.find('section');
      expect(sections).toHaveLength(4);
    });
  });
});
