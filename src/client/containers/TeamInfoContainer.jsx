import React, { useState } from 'react';

import TeamSelection from '../components/TeamSelection';
import TeamDisplay from '../components/TeamDisplay';

const TeamInfoContainer = () => {
  const [teamInfo, setTeamInfo] = useState({
    teamData: {
      name: '',
      yearFormed: -1,
      league: '',
      manager: '',
      stadium: {
      },
      website: '',
      description: '',
      badge: '',
    },
  });

  return (
    <section className="team-info-container">
      <h1>{teamInfo.name}</h1>
      <TeamSelection setTeamInfo={setTeamInfo} />
      <TeamDisplay teamInfo={teamInfo} />
    </section>
  );
};

export default TeamInfoContainer;
