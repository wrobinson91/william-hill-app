## William Hill Team Index

Welcome to the William Hill Team Index. Before placing a bet, learn more about the team you're betting on.

__How to Install__

Fork and clone this repo and then run:

`npm i`

Followed by:

`npm run dev`

And go to `http://localhost:8080`.

If you wish, you may build the file by running the following and going to `http://localhost:3000`:

`npm run build`

`npm start`

__Using the Application__

Once you're at the application screen, the initial view (Sacramento Kings) is pulled from the API.

<!-- <p align="center">
<img src="./assets/api_on_first_load.gif" style="width: 700px;">
</p> -->

If you wish to select another team, first select a league. Then, select a team from the second dropdown menu and hit submit. 

<!-- <p align="center">
<img src="./assets/api_new_team.gif" style="width: 700px;">
</p> -->

__Testing__

Jest and Enzyme tests were written for the client-side fetch reuqest and the rendering of particular React components. Run them with the command:

`npm test`