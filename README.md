#Bingo!
This application is build with ReactJS, NodeJS & the Notifications API.
When we started building it, the setup was nothing more than an inside work related joke.
But after starting it become a goal to provide an awesome application that could be used by anyone.

##Data
The data of the Bingo items can be changed through the server/data/items.json.
For now you need at least 24 items to play a valid game.

If you want to play with less items, or change other properties for the server,
you can change them in the server/modules/settings.js

##Gulp
To compile the javascript to a final.js file, you should run the gulp task.
The gulpfile is present within the root of the project.

##Changelog
###v1.0
####TODO
* CSS Front-end
* Notifications with custom image
* Play with a actual name, to prevent ugly hash as 'name'
* File watcher on data JSON to prevent server restart. (change items with start of new round)

####Done
* ~~Put application online (so everyone can test)~~
* ~~Make notifications auto-disappear (Chrome..)~~
* ~~Create Bingo logic (save state on server)~~
* ~~Prevent cheating by making server responsible for checked off item list. Client 'hack-proof'~~
* ~~When checking items of your list, update other clients~~
* ~~Prevent more clicks on 1 item~~
* ~~Use local storage to save session ID to save your game status~~
* ~~Save bingo rounds on the server, only start new round when round is finished~~
* ~~When round is finished, show timer countdown to new round~~
* ~~When too many items are checked off, block new players until a new round starts~~
* ~~Show a message to a user that he has to wait for a new round~~
* ~~Save array with ID's that are checked of the list~~
* ~~External file for bingo items data (JSON)~~
* ~~Fill Readme.md~~
