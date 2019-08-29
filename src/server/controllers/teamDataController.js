const fetch = require('node-fetch');

const URL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php';

const teamDataController = {
  getTeamData: (req, res, next) => {
    const { teamName } = req.body;

    fetch(`${URL}?t=${teamName}`)
      .then(response => response.json())
      .then((data) => {
        res.locals.unparsedTeamData = data.teams[0];
        next();
      })
      .catch((e) => {
        console.log('Error in backend fetch: ', e);
        return res.status(500).send('error in retrieving team data.');
      });

    // next();
  },
  parseTeamData: (req, res, next) => {
    const {
      strTeam,
      intFormedYear,
      strLeague,
      strManager,
      strStadium,
      strStadiumDescription,
      strStadiumLocation,
      intStadiumCapacity,
      strWebsite,
      strDescriptionEN,
      strTeamBadge,
      strStadiumThumb,
      strTeamFanart1,
      strFacebook,
      strTwitter,
      strInstagram,
    } = res.locals.unparsedTeamData;

    res.locals.teamData = {
      name: strTeam,
      yearFormed: intFormedYear,
      league: strLeague,
      manager: strManager,
      stadium: {
        name: strStadium,
        description: strStadiumDescription,
        location: strStadiumLocation,
        capacity: intStadiumCapacity,
        image: strStadiumThumb,
      },
      website: strWebsite,
      description: strDescriptionEN,
      badge: strTeamBadge,
      fanArtEmbed: strTeamFanart1,
      facebookURL: strFacebook,
      instagramURL: strInstagram,
      twitterURL: strTwitter,
    };
    next();
  },
};

module.exports = teamDataController;
