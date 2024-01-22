//Methods that modify the original array (Mutability)

//shift()

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift()

console.log(colors, removedColors)

//unshift()

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

// Managing a Playlist

const managePlaylist = (playlist, newSong) => {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['Walking Backwards', 'Stuck in a moment', 'Eyes Closed', 'Walk']
console.log('Initial Playlist: ', initialPlaylist)
const newSongToAdd = `Won't Stand Down`
console.log('New song to Add: ', newSongToAdd)
const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)
console.log('Updated Playlist: ', updatedPlaylist)
