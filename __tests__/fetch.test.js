// import subject from '../src/client/utils/teamDataFetch';
import fetch from './__mocks__/fetch.mock';

describe('testing API calls', () => {
  let mockState = null;

  const setStateMock = (newState) => {
    mockState = Object.assign({}, newState);
  };

  xit('successful call should return response object', async () => {
    console.log('wip');
    // await global.testServer;
    console.log('mock state before call: ', mockState);
    await fetch('Sacramento Kings', setStateMock);
    console.log('mock state after call: ', mockState);
    expect(mockState).not.toBe(null);
  });
});
