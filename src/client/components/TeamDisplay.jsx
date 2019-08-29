import React from 'react';

const TeamDisplay = (props) => {
  const {
    name, yearFormed, league, manager, stadium, website, description, badge,
  } = props.teamInfo;
  console.log('rendering team display. name: ', name);
  return (
    <section className="team-info-display">
      This Is Team Display
      {name
        && (
        <>
          <h2>{name}</h2>
          <img src={`${badge}`} alt={`${name}-team-badge`} />
        </>
        )
      }
    </section>
  );
};

export default TeamDisplay;
