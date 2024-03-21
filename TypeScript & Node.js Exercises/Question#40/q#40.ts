// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
      artist: artist,
      title: title,
    };
  
    // Add tracks to the album if provided
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Make three dictionaries representing different albums
  let album1 = make_album('Artist1', 'Album1');
  let album2 = make_album('Artist2', 'Album2', 12);
  let album3 = make_album('Artist3', 'Album3', 8);
  
  // Print each return value
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  // Make a new function call with the number of tracks
  let album4 = make_album('Artist4', 'Album4', 15);
  console.log(album4);
  