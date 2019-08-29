import React, { useState } from 'react';

import TeamSelection from '../components/TeamSelection';
import TeamDisplay from '../components/TeamDisplay';

const TeamInfoContainer = () => {
  const [teamInfo, setTeamInfo] = useState({
    teamData: {
      name: null,
    },
  });

  return (
    <section>
      This is the Team Info Container
      <TeamSelection setTeamInfo={setTeamInfo} />
      <TeamDisplay teamInfo={teamInfo} />
    </section>
  );
};

export default TeamInfoContainer;
