 Pig Dice

### Author
Dinah A. Eric

### Description

#### This is a program where two users can play Pig Dice against each other. Users can choose to play with one die or two.

### Setup/Installation Requirements
Open the index.html file with the browser of your choice
Download Bootstrap v 4.1.2 (https://getbootstrap.com/)
Download jquery- 3.3.1.min.js
(/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */)
### Specifications
* Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
* If a single 1 is rolled, the player scores nothing and the turn ends.
* If two 1s are rolled, the player’s entire score is lost, and the turn ends.
* If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again.
G
enerate a random number 1-6
Example Input: function()
Example Output: 5
Add roll to scoreTurn
Example Input: scoreTurn 4, roll 3
Example Output: scoreTurn 7
If a 1 is rolled, scoreTurn is 0
Example Input: roll 1, scoreTurn 10
Example Output: scoreTurn 0
When turn is over add scoreTurn to scoreGame
Example Input: scoreGame 20, scoreTurn 10
Example Output: scoreGame 30
When turn is over scoreTurn resets to 0
Example Input: scoreTurn 10
Example Output: scoreTurn 0
If a players scoreGame reaches 100 the game is over and that player wins
Example Input: scoreGame 105
Example Output: "Player wins! Game Over"

#### Known Bugs
No known bugs.

#### Support and contact details
Please feel free to contact odenydinah@gmail.com if you have any issues or questions, ideas or concerns.
*  Email:odenydinah@gmail.com
*  Twitter: francescas_palace
*  Telephone: 0780860287

### Technologies Used
HTML
CSS
JavaScript
jQuery

### License

This software is licensed under the Apache license.
version 2.0,January 2004
(http://www.apache.org/licenses/)

Copyright (c) 2016 Dean Scelza, Nhat Hoang, Epciodus