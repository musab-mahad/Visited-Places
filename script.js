// Places LOGIC
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// DATA
const places = [
  new Place("Mogadishu", ["Lido Beach"], "All year", "Nice"),
  new Place("Nairobi", ["Uhuru Park"], "All year", "Cool weather"),
  new Place("Mombasa", ["Diani Beach"], "Dry season", "Very humid"),
];

Place.prototype.getDetails = function () {
  let details = "";
  details += "Location: " + this.location;
  details += "\nLandmarks: " + this.landmarks.join(", ");
  details += "\nBest time: " + this.season;
  details += "\nNotes: " + this.notes;

  return details;
};

// UI LOGIC
const placesList = document.getElementById("places");
const details = document.getElementById("details");

for (let i = 0; i < places.length; i++) {
  const li = document.createElement("li");
  li.innerText = places[i].location;
  li.onclick = function () {
    details.innerText = places[i].getDetails();
  };
  placesList.appendChild(li);
}
