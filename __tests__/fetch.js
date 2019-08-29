import subject from '../src/client/utils/teamDataFetch';

describe('testing API calls', () => {
  let mockState = null;

  const setStateMock = (newState) => {
    mockState = Object.assign({}, newState);
  };

  it('successful call should return response object', async () => {
    console.log('wip');
    // await global.testServer;
    // console.log('mock state before call: ', mockState);
    // await subject('Sacramento Kings', setStateMock);
    // console.log('mock state after call: ', mockState);
    // expect(mockState).not.toBe(null);
  });
});
