function createLyrics(songData) {
  // Use template literals to create lyrics from the songData object
  // The songData object will have properties like artist, title, verse, chorus
  // Return the formatted lyrics string

  return `${songData.title} by ${songData.artist} 
  ${songData.verse} 
  ${songData.chorus}`;
  
}

module.exports = createLyrics;
