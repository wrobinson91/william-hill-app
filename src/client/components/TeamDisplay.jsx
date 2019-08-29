import React from 'react';
import BoldedLabel from './styled/BoldedLabel';

const TeamDisplay = (props) => {
  const {
    name, yearFormed, league, manager, stadium, website, description, badge, fanArtEmbed,
  } = props.teamInfo;
  // console.log('rendering team display. name: ', name);
  return (
    <section className="team-info-display">
      {name
        && (
          <>
            <h2>{name}</h2>
            <img src={`${badge}`} alt={`${name}-team-badge`} />
            <section className="quick-facts-display">
              <h3>Quick Facts</h3>
              <p>
                <BoldedLabel label="League:" />
                {' '}
                {league}
              </p>
              <p>
                <BoldedLabel label="Year founded:" />
                {' '}
                {yearFormed}
              </p>
              <p>
                <BoldedLabel label="Coach:" />
                {' '}
                {manager}
              </p>
              <p>
                <BoldedLabel label="Website" />
                {' '}
                <a href={`http://${website}`}>{website}</a>
              </p>
            </section>
            <section className="stadium-info">
              <h3>Where They Play</h3>
              <img src={stadium.image} alt={`${name}-stadium`} />
              <p>
                <BoldedLabel label="Name:" />
                {' '}
                {stadium.name}
              </p>
              <p>
                <BoldedLabel label="Location:" />
                {' '}
                {stadium.location}
              </p>
              <p>
                <BoldedLabel label="Capacity:" />
                {' '}
                {stadium.capacity}
              </p>
              <p>
                <BoldedLabel label="The story:" />
                {' '}
                {stadium.description}
              </p>
            </section>
            <section className="team-story-container">
              <h3>Team Story</h3>
              <img src={fanArtEmbed} alt={`${name}-fan-art`} />
              <p className="team-story">{description}</p>
            </section>
          </>
        )
      }
    </section>
  );
};

export default TeamDisplay;
