const newTeamData = {
  name: 'Sacramento Kings',
  yearFormed: 1926,
  league: 'NBA',
  manager: 'Luke Walton',
};

const fetch = (bodyString, setter) => new Promise((resolve, reject) => {
  if (bodyString === newTeamData.name) {
    setter(newTeamData);
    return resolve('Data found.');
  }
  return reject(Error('Unable to find data.'));
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
    await fetch('Sacramento Kings', setStateMock);
    expect(mockState).not.toBe(null);
  });


  it('unsuccessful call should return error', async () => {
    try {
      fetch('Saramento Kings', setStateMock);
    } catch (err) {
      expect(err instanceof Error).toBeTruthy();
    }
  });
});
