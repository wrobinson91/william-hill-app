import fetch from 'node-fetch';

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
      // console.log('fetched team data: ', fetchedTeamData );
      setTeamInfo(fetchedTeamData);
    })
    .catch((e) => {
      console.log('Error in fetch process: ', e);
    });
};

export default teamDataFetch;
