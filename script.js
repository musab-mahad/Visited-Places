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
