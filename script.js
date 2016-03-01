// Create all tiles
var tiles = 63;
for (var i=0; i < tiles; i++){
  document.body.appendChild(document.createElement('div'));
}

// Put all tiles into array 
var allTiles = document.querySelectorAll('div');

// Styles tiles
for (var i=0; i < allTiles.length; i++) {
  if (i%2 === 0) {
    allTiles[i].style.backgroundColor = "lightgreen";
  } else {
    allTiles[i].style.backgroundColor = "lightpink";
  }
  allTiles[i].style.width = "11.1%";
  allTiles[i].style.paddingBottom = "11.1%";
  allTiles[i].style.cssFloat = "left";
  allTiles[i].style.opacity = "0.5";
}

// Create gradient
var gradient = document.createElement('div');
gradient.style.width = "100%";
gradient.style.paddingBottom = "72%";
gradient.style.background= "linear-gradient(red, white)";
document.body.appendChild(gradient);

