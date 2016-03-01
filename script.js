var tiles = 63;
for (var i=0; i < tiles; i++){
  document.body.appendChild(document.createElement('div'));
}
var allTiles = document.querySelectorAll('div');
for (var i=0; i < allTiles.length; i++) {
  if (i % 2 === 0) {
    allTiles[i].style.backgroundColor = "black";
  } else {
    allTiles[i].style.backgroundColor = "red";
  }
  allTiles[i].style.width = "11.1%";
  allTiles[i].style.paddingBottom = "11.1%";
  allTiles[i].style.cssFloat = "left";
}
