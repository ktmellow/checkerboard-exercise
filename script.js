// Create all tiles
var tiles = 63;
for (var i=0; i < tiles; i++){
  document.body.appendChild(document.createElement('div'));
}

// Put all tiles into array
var allTiles = document.querySelectorAll('div');

for (var i=0; i < allTiles.length; i++) {
  allTiles[i].style.backgroundColor = getRandomColor();
  allTiles[i].style.width = "11.1%";
  allTiles[i].style.paddingBottom = "11.1%";
  allTiles[i].style.cssFloat = "left";
}

// Styles tiles
function flashing() {
  for (var i=0; i < allTiles.length; i++) {
    allTiles[i].style.backgroundColor = getRandomColor();
  }
}

setInterval(flashing, 2000);



// From stackoverflow
function getRandomColor() {
    // Put possible hexadecimal digits in array
    var letters = '0123456789ABCDEF'.split('');
    // All hexadecimal begin with #
    var color = '#';
    /** 
       Rounded random number up to the array length of 16
       Picks a random index in letters array
       Six total values in hexadecimal color
      */
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

