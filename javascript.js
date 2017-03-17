var button = document.getElementById("button1");
var myarray = ["Against The Grain",
               "Apocalypse",
               "Blue Grass Brewing Company",
               "Falls City",
               "Goodwood",
              ];

button.onclick = function() {
    alert(myarray[Math.floor(Math.random() * myarray.length)]);
};