const playListContinerTag = document.getElementsByClassName("playListContainer")[0];

const tracks = [
    { trackId: "music/track1.mp3", title: "Music No-1"},
    { trackId: "music/track2.mp3", title: "Music No-2"},
    { trackId: "music/track1.mp3", title: "Music No-3"},
    { trackId: "music/track1.mp3", title: "Music No-4"},
];

for (let i = 0; i < tracks.length; i++){
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContinerTag.append(trackTag);
};