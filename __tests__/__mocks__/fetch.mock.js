const newTeamData = {
  name: 'Sacramento Kings',
  yearFormed: 1926,
  league: 'NBA',
  manager: 'Luke Walton',
};

const fetch = (bodyString, setter) => new Promise((resolve, reject) => {
  if (bodyString === newTeamData.name) {
    setter(newTeamData);
    return resolve('data found');
  }
  return reject('unable to find data');
});

let mockState = null;

describe('testing API calls', () => {
  beforeEach(() => {
    mockState = null;
  });

  afterEach(() => {
    mockState = null;
  });

  const setStateMock = (newState) => {
    mockState = Object.assign({}, newState);
  };

  it('successful call should return response object', async () => {
    console.log('wip');
    // await global.testServer;
    console.log('mock state before call: ', mockState);
    await fetch('Sacramento Kings', setStateMock);
    console.log('mock state after call: ', mockState);
    expect(mockState).not.toBe(null);
  });


  it('unsuccessful call should return error', async () => {
    console.log('wip');
    // await global.testServer;
    console.log('mock state before call: ', mockState);
    await fetch('Sacramento Kings', setStateMock);
    console.log('mock state after call: ', mockState);
    expect(mockState).not.toBe(null);
  });
});


// export default fetch;
