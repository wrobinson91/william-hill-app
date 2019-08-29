import fetch from 'node-fetch';

// const testPathPrefix = true ? 'http://localhost:3000' : '';

const teamDataFetch = (teamName, setTeamInfo) => {
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ teamName }),
  })
    .then(res => res.json())
    .then((fetchedTeamData) => {
      setTeamInfo(fetchedTeamData);
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export default teamDataFetch;
