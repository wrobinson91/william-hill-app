const fetch = require('node-fetch');

const URL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php';

const teamDataController = {
  getTeamData: (req, res, next) => {
    // console.log('middleware hit');
    const { teamName } = req.body;

    fetch(`${URL}?t=${teamName}`)
      .then(response => response.json())
      .then((data) => {
        // console.log('got data back: ', data);
        res.locals.unparsedTeamData = data.teams[0];
        next();
      })
      .catch((e) => {
        console.log('error in backend fetch: ', e);
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
    } = res.locals.unparsedTeamData;
    // const { unparsedTeamData } = res.locals;
    // console.log('got unparsed data: ', res.locals.unparsedTeamData);
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
    };
    // console.log('res locals: in final middleware', res.locals.teamData);
    next();
  },
};

module.exports = teamDataController;
