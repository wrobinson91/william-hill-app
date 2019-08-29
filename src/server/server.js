const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { getTeamData, parseTeamData } = require('./controllers/teamDataController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const PORT = 3000;

// app.use(express.static('build'));

app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../index.html'));
});

app.post('/api', getTeamData, parseTeamData, (req, res) => res.status(200).json(res.locals.teamData));

const openServer = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = openServer;
