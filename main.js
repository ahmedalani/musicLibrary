var Library = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

var Playlist = function (name) {
  this.name = name;
  this.tracks = [];
  this.rating = function overallRating() {
    let totalRatings = 0;
    this.tracks.forEach((rate) => {
      totalRatings += rate;
    });
    return totalRatings / (this.tracks.length);
  }
  this.duration = function totalDuration() {
    let totalMnts = 0;
    this.tracks.forEach((trk) => {
      totalMnts += trk.songDuration;
    });
    return totalMnts;
  };
}

var Track = function (title, rating, songDuration) {
  this.title = title;
  this.rating = rating;
  this.songDuration = songDuration;
}

Library.prototype.addPlaylist = function (pl) {
  this.playlists.push(pl);
}

Playlist.prototype.addTrack = function (trk) {
  this.tracks.push(trk);
}


// const bobLibrary = new Library('bob', 'joe');
// const testPlaylist = new Playlist("test");
// const testTrack = new Track("testTrack", 3, 2);
// testPlaylist.addTrack(testTrack);
// bobLibrary.addPlaylist(testPlaylist);
// console.log(JSON.stringify(bobLibrary));