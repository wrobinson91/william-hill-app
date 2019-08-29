import React, { useState, useEffect } from 'react';
// import fetch from 'node-fetch';

import teamDataFetch from '../utils/teamDataFetch';
import teamOptions from '../utils/teamOptions';

const TeamSelection = (props) => {
  const [inputTeamInfo, setInputTeamInfo] = useState({
    league: '-',
    team: '-',
  });
  const { setTeamInfo } = props;

  useEffect(() => {
    teamDataFetch('Sacramento Kings', setTeamInfo);
  }, []);

  const onSubmit = () => {
    event.preventDefault();
    if (inputTeamInfo.league === '-' || inputTeamInfo.team === '-') alert('Please select a team.');
    else {
      teamDataFetch(inputTeamInfo.team, setTeamInfo);
    }
  };

  return (
    <article className="team-selection">
      <h4>Pick a team</h4>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            League:
            <select name="pickLeague" id="pick-league-select" defaultValue="-" value={inputTeamInfo.league} onChange={() => setInputTeamInfo({ ...inputTeamInfo, league: event.target.value, team: '-' })}>
              {Object.keys(teamOptions).map((league, idx) => <option key={`league-option-${idx}`} value={league}>{league}</option>)}
            </select>
          </label>
        </div>

        <label>
          Team:
          <select name="pickTeam" id="pick-team-select" value={inputTeamInfo.team} onChange={() => setInputTeamInfo({ ...inputTeamInfo, team: event.target.value })}>
            {inputTeamInfo.league && teamOptions[inputTeamInfo.league].map((team, idx) => <option key={`team-option-${idx}`} value={team}>{team}</option>)}
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </article>
  );
};

export default TeamSelection;
