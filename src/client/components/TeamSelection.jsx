import React, { useState } from 'react';
import fetch from 'node-fetch';

import teamOptions from '../utils/teamOptions';

const TeamSelection = (props) => {
  const [inputTeamInfo, setInputTeamInfo] = useState({
    league: '-',
    team: '-',
  });
  const { setTeamInfo } = props;

  const onSubmit = () => {
    event.preventDefault();
    if (inputTeamInfo.league === '-' || inputTeamInfo.team === '-') alert('Please select a team.');
    else {
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ teamName: inputTeamInfo.team }),
      })
        .then(res => res.json())
        .then((fetchedTeamData) => {
          console.log('here\'s some data: ', fetchedTeamData);
          setTeamInfo(fetchedTeamData);
        })
        .catch((e) => {
          console.log('Error in fetch process: ', e);
        });
    }
  };

  return (
    <article className="team-selection">
      time to pick a team
      <form onSubmit={onSubmit}>

        <label>
          League:
          <select name="pickLeague" id="pickLeague" defaultValue="-" value={inputTeamInfo.league} onChange={() => setInputTeamInfo({ ...inputTeamInfo, league: event.target.value, team: '-' })}>
            {Object.keys(teamOptions).map((league, idx) => <option key={`league-option-${idx}`} value={league}>{league}</option>)}
          </select>
        </label>

        <label>
          Team:
          <select name="pickTeam" id="pickTeam" value={inputTeamInfo.team} onChange={() => setInputTeamInfo({ ...inputTeamInfo, team: event.target.value })}>
            {inputTeamInfo.league && teamOptions[inputTeamInfo.league].map((team, idx) => <option key={`team-option-${idx}`} value={team}>{team}</option>)}
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </article>
  );
};

export default TeamSelection;
