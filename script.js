// Sample song data
const songs = [
    {
        id: 1,
        title: "Drippy",
        artist: "Sidhu Moose Wala",
        album: "",
        image: "img/1.jpg",
        src: "audio/1.mp3"
    },
    {
        id: 2,
        title: "Petrol",
        artist: "Avi sidhu & Grewal 31 31",
        album: "",
        image: "img/2.jpg",
        src: "audio/2.mp3"
    },
    {
        id: 3,
        title: "Desi Kalakaar",
        artist: "Yo Yo Honey Singh",
        album: "",
        image: "img/3.jpg",
        src: "audio/3.mp3"
    },
    {
        id: 4,
        title: "My Prime",
        artist: "Navaan Sandhu",
        album: "",
        image: "img/4.jpg",
        src: "audio/4.mp3"
    },
    {
        id: 5,
        title: "G.O.A.T",
        artist: "Diljit Dosanjh",
        album: "",
        image: "img/5.jpg",
        src: "audio/5.mp3"
    },
    {
        id: 6,
        title: "Ilzaam",
        artist: "Arjan Dhillon",
        album: "",
        image: "img/6.jpg",
        src: "audio/6.mp3"
    },
    {
        id: 7,
        title: "King Shit",
        artist: "Shubh",
        album: "",
        image: "img/7.jpg",
        src: "audio/7.mp3"
    },
    {
        id: 8,
        title: "Dead Zone",
        artist: "Gulab Sidhu",
        album: "",
        image: "img/8.jpg",
        src: "audio/8.mp3"
    },
    {
        id: 9,
        title: "Chal Jindiye",
        artist: "Amrinder Gill",
        album: "",
        image: "img/9.jpg",
        src: "audio/9.mp3"
    },
    {
        id: 10,
        title: "Regrat",
        artist: "Sidhu Moose wala",
        album: "",
        image: "img/10.jpg",
        src: "audio/10.mp3"
    },

{
  id: 11,
  title: "Maa Boldi Aa",
  artist: "Karan Aujla",
  album: "",
  image: "img/11.jpg",
  src: "audio/11.mp3"
},
{
  id: 12,
  title: "Nightmare",
  artist: "Chandra Brar",
  album: "",
  image: "img/12.jpg",
  src: "audio/12.mp3"
},
{
  id: 13,
  title: "All Eyez on Me",
  artist: "2Pac",
  album: "",
  image: "img/13.jpg",
  src: "audio/13.mp3"
},
{
  id: 14,
  title: "Munda Iphone Warga",
  artist: "A Key",
  album: "",
  image: "img/14.webp",
  src: "audio/14.mp3"
},
{
  id: 15,
  title: "Levels",
  artist: "Sidhu Moose wala",
  album: "",
  image: "img/15.jpg",
  src: "audio/15.mp3"
},
{
  id: 16,
  title: "Blue Eyes",
  artist: "Yo Yo Honey Singh",
  album: "",
  image: "img/16.jpg",
  src: "audio/16.mp3"
},
{
  id: 17,
  title: "Ki Banu Duniya Da",
  artist: "Gurdas Maan",
  album: "",
  image: "img/17.jpg",
  src: "audio/17.mp3"
},
{
  id: 18,
  title: "Pani Deya Bul Buleya",
  artist: "Chamkila",
  album: "",
  image: "img/18.jpg",
  src: "audio/18.mp3"
},
{
  id: 19,
  title: "Geet De Wargi",
  artist: "Tarsem Jasser",
  album: "",
  image: "img/19.jpg",
  src: "audio/19.mp3"
},
{
  id: 20,
  title: "Dabde Ni",
  artist: "Ammy Virk",
  album: "",
  image: "img/20.jpg",
  src: "audio/20.mp3"
},
{
  id: 21,
  title: "Unbothered",
  artist: "Navaan Sandhu",
  album: "",
  image: "img/21.jpg",
  src: "audio/21.mp3"
},
{
  id: 22,
  title: "Red Battiyan",
  artist: "R Nait",
  album: "",
  image: "img/22.jpg",
  src: "audio/22.mp3"
},
{
  id: 23,
  title: "Brown Munde",
  artist: "AP Dhillon",
  album: "",
  image: "img/23.jpg",
  src: "audio/23.mp3"
},
{
  id: 24,
  title: "Fuck Em All",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/24.jpg",
  src: "audio/24.mp3"
},
{
  id: 25,
  title: "Case",
  artist: "Diljit Dosanjh",
  album: "",
  image: "img/25.jpg",
  src: "audio/25.mp3"
},
{
  id: 26,
  title: "Scapegoat",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/26.jpg",
  src: "audio/26.mp3"
},
{
  id: 27,
  title: "Never Fold",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/27.jpg",
  src: "audio/27.mp3"
},
{
  id: 28,
  title: "Chote Chote Ghar",
  artist: "Ranjit Bawa",
  album: "",
  image: "img/28.jpg",
  src: "audio/28.mp3"
},
{
  id: 29,
  title: "Pendu",
  artist: "Amrinder Gill",
  album: "",
  image: "img/29.jpg",
  src: "audio/29.mp3"
},
{
  id: 30,
  title: "Kaun Kuri",
  artist: "KS Makhan",
  album: "",
  image: "img/30.jpg",
  src: "audio/30.mp3"
},
{
  id: 31,
  title: "Good Luck Charm",
  artist: "KS Makhan",
  album: "",
  image: "img/31.jpg",
  src: "audio/31.mp3"
},
{
  id: 32,
  title: "Bachke Bachke",
  artist: "Karan Aujla",
  album: "",
  image: "img/32.jpg",
  src: "audio/32.mp3"
},
{
  id: 33,
  title: "Love Sick",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/33.jpg",
  src: "audio/33.mp3"
},
{
  id: 34,
  title: "Jatt Life",
  artist: "Varinder Brar",
  album: "",
  image: "img/34.jpg",
  src: "audio/34.mp3"
},
{
  id: 35,
  title: "Foreigns",
  artist: "AP Dhillion",
  album: "",
  image: "img/35.jpg",
  src: "audio/35.mp3"
},
{
  id: 36,
  title: "Built Different",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/36.jpg",
  src: "audio/36.mp3"
},
{
  id: 37,
  title: "Racks And Rounds",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/37.jpg",
  src: "audio/37.mp3"
},
{
  id: 38,
  title: "Goat",
  artist: "AP Dhillion",
  album: "",
  image: "img/38.jpg",
  src: "audio/38.mp3"
},
{
  id: 39,
  title: "Jaguar",
  artist: "Bohemia",
  album: "",
  image: "img/39.webp",
  src: "audio/39.mp3"
},
{
  id: 40,
  title: "Car Nachdi",
  artist: "Gippy Grewal",
  album: "",
  image: "img/40.jpg",
  src: "audio/40.mp3"
},
{
  id: 41,
  title: "I M Better Now",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/41.jpg",
  src: "audio/41.mp3"
},
{
  id: 42,
  title: "Same Beef",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/42.jpg",
  src: "audio/42.mp3"
},
{
  id: 43,
  title: "Pagol",
  artist: "Deep Jandu",
  album: "",
  image: "img/43.jpg",
  src: "audio/43.mp3"
},
{
  id: 44,
  title: "2 Number",
  artist: "Aminder Gill",
  album: "",
  image: "img/44.jpg",
  src: "audio/44.mp3"
},
{
  id: 45,
  title: "Challenge",
  artist: "Ninja",
  album: "",
  image: "img/45.jpg",
  src: "audio/45.mp3"
},
{
  id: 46,
  title: "Paapi",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/46.jpg",
  src: "audio/46.mp3"
},
{
  id: 47,
  title: "Emotional Banda",
  artist: "Ranjit Bawa",
  album: "",
  image: "img/47.jpg",
  src: "audio/47.mp3"
},
{
  id: 48,
  title: "Sohne Mukhde Da",
  artist: "Sharry Mann",
  album: "",
  image: "img/48.jpg",
  src: "audio/48.mp3"
},
{
  id: 49,
  title: "Fight",
  artist: "KS Makhan",
  album: "",
  image: "img/49.webp",
  src: "audio/49.mp3"
},
{
  id: 50,
  title: "Dildarian",
  artist: "Aminder Gill",
  album: "",
  image: "img/50.jpg",
  src: "audio/50.mp3"
},
{
  id: 51,
  title: "Meri Zindgi Bana Ja",
  artist: "Sharry Mann",
  album: "",
  image: "img/51.webp",
  src: "audio/51.mp3"
},
{
  id: 52,
  title: "Sohni Kuri",
  artist: "Amrinder Gill",
  album: "",
  image: "img/52.webp",
  src: "audio/52.mp3"
},
{
  id: 53,
  title: "Changa Mada Time",
  artist: "A-kay",
  album: "",
  image: "img/53.jpg",
  src: "audio/53.mp3"
},
{
  id: 54,
  title: "Guerrilla War",
  artist: "Amrit Maan",
  album: "",
  image: "img/54.jpg",
  src: "audio/54.mp3"
},
{
  id: 55,
  title: "Gabbroo",
  artist: "Jassi Gill",
  album: "",
  image: "img/55.jpg",
  src: "audio/55.mp3"
},
{
  id: 56,
  title: "Dil Tutda",
  artist: "Jassi Gill",
  album: "",
  image: "img/56.jpg",
  src: "audio/56.mp3"
},
{
  id: 57,
  title: "Lahore",
  artist: "Ranjit Bawa",
  album: "",
  image: "img/57.jpg",
  src: "audio/57.mp3"
},
{
  id: 58,
  title: "Guitar Sikhda",
  artist: "Jassi Gill",
  album: "",
  image: "img/58.jpg",
  src: "audio/58.mp3"
},
{
  id: 59,
  title: "Yaarian",
  artist: "Amrinder Gill",
  album: "",
  image: "img/59.jpg",
  src: "audio/59.mp3"
},
{
  id: 60,
  title: "Aroma",
  artist: "Sidhu Moose Wala",
  album: "",
  image: "img/60.jpg",
  src: "audio/60.mp3"
},
{
  id: 61,
  title: "Saahan Nu Suroor",
  artist: "Feroz Khan",
  album: "",
  image: "img/61.jpg",
  src: "audio/61.mp3"
},
{
  id: 62,
  title: "Peshi",
  artist: "Zora Randhawa",
  album: "",
  image: "img/62.jpg",
  src: "audio/62.mp3"
},
{
  id: 63,
  title: "Diary",
  artist: "Amrinder Gill",
  album: "",
  image: "img/63.jpg",
  src: "audio/63.mp3"
},
{
    id: 64,
    title: 'Dil Da Dimaag',
    artist: 'Sharry Maan',
    src: 'audio/64.mp3',
    image: 'img/64.jpg',
    album: ''
},
{
    id: 65,
    title: 'Sher-E-Panjab',
    artist: 'Arjan Dhillon',
    src: 'audio/65.mp3',
    image: 'img/65.jpg',
    album: ''
},
{
    id: 66,
    title: 'Oh Kyu Ni Jaan Ske',
    artist: 'Ninja',
    src: 'audio/66.mp3',
    image: 'img/66.jpg',
    album: ''
},
{
    id: 67,
    title: 'Loud Jatt',
    artist: 'Garrie Dhaliwal',
    src: 'audio/67.mp3',
    image: 'img/67.jpg',
    album: ''
},
{
    id: 68,
    title: 'Police',
    artist: 'Cheema Y',
    src: 'audio/68.mp3',
    image: 'img/68.jpg',
    album: ''
},
{
    id: 69,
    title: 'Vaaj',
    artist: 'Kanwar Grewal',
    src: 'audio/69.mp3',
    image: 'img/69.jpg',
    album: ''
},
{
    id: 70,
    title: 'Big Scene',
    artist: 'Diljit Dosanjh',
    src: 'audio/70.mp3',
    image: 'img/70.jpg',
    album: ''
},
{
    id: 71,
    title: 'Jordan',
    artist: 'A Key',
    src: 'audio/71.mp3',
    image: 'img/71.jpg',
    album: ''
},
{
    id: 72,
    title: 'Bass Baliye',
    artist: 'Gurj Sidhu',
    src: 'audio/72.mp3',
    image: 'img/72.jpg',
    album: ''
},
{
    id: 73,
    title: 'Dil Yaaran De',
    artist: 'Gurj Sidhu',
    src: 'audio/73.mp3',
    image: 'img/73.jpg',
    album: ''
},
{
    id: 74,
    title: 'Kaali Range',
    artist: 'R Nait',
    src: 'audio/74.mp3',
    image: 'img/74.jpg',
    album: ''
},
{
    id: 75,
    title: 'Adha Pind',
    artist: 'Gurj Sidhu',
    src: 'audio/75.mp3',
    image: 'img/75.jpg',
    album: ''
},
{
    id: 76,
    title: 'Flop',
    artist: 'Sidhu Moose Wala',
    src: 'audio/76.mp3',
    image: 'img/76.jpg',
    album: ''
},
{
    id: 77,
    title: 'Tru Talk',
    artist: 'Jassi Gill',
    src: 'audio/77.mp3',
    image: 'img/77.jpg',
    album: ''
},
{
    id: 78,
    title: 'Litt Lyf',
    artist: 'Babble Rai',
    src: 'audio/78.mp3',
    image: 'img/78.jpg',
    album: ''
},
{
    id: 79,
    title: 'By God',
    artist: 'B Jay Randhawa',
    src: 'audio/79.mp3',
    image: 'img/79.webp',
    album: ''
},
{
    id: 80,
    title: 'Fuel',
    artist: 'Gippy Grewal',
    src: 'audio/80.mp3',
    image: 'img/80.jpg',
    album: ''
},
{
    id: 81,
    title: 'Raatan',
    artist: 'Amrinder Gill',
    src: 'audio/81.mp3',
    image: 'img/81.webp',
    album: ''
},
];

// Hip hop artists list
const hipHopArtists = [
    "Sidhu Moose Wala",
    "Yo Yo Honey Singh",
    "Shubh",
    "Gulab Sidhu",
    "Diljit Dosanjh",
    "Arjan Dhillon",
    "AP Dhillon",
    "Karan Aujla",
    "Navaan Sandhu",
    "Varinder Brar",
    "Bohemia",
    "Deep Jandu",
    "KS Makhan",
    "Ninja",
    "2Pac",
    "XXTentacion",
    "R Nait",
    "Avi sidhu & Grewal 31 31",
    "Chandra Brar",
    "A-kay",
    "Amrit Maan"
];

// Extract songs artists list
const Extractsongs = [
    "Jassi Gill",
    "Amrinder Gill",
    "Sharry Mann",
    "Ranjit Bawa",
    "Feroz Khan",
    "Zora Randhawa",
    "Ammy Virk",
    "Tarsem Jasser",
    "Gurdas Maan",
    "Chamkila",
    "Diljit Dosanjh",
    "Karan Aujla",
    "Arjan Dhillon"
];

// App state
let currentSong = null;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || [];
let currentPlaylist = [];
let shuffleMode = false;
let repeatMode = false;
let selectedSongId = null;
let selectedPlaylistId = null;
let playlistToDeleteId = null;

// DOM elements
const songGrid = document.getElementById('songGrid');
const songList = document.getElementById('songList');
const searchInput = document.getElementById('searchInput');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const nowPlayingImage = document.getElementById('nowPlayingImage');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const likeBtn = document.getElementById('likeBtn');
const createPlaylistBtn = document.getElementById('createPlaylistBtn');
const createPlaylistModal = document.getElementById('createPlaylistModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const playlistForm = document.getElementById('playlistForm');
const playlistContainer = document.getElementById('playlistContainer');
const toast = document.getElementById('toast');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const audioPlayer = document.getElementById('audioPlayer');

// Add to Playlist Modal
const addToPlaylistModal = document.getElementById('addToPlaylistModal');
const closeAddToPlaylistModal = document.getElementById('closeAddToPlaylistModal');
const cancelAddToPlaylist = document.getElementById('cancelAddToPlaylist');
const confirmAddToPlaylist = document.getElementById('confirmAddToPlaylist');
const playlistList = document.getElementById('playlistList');

// Delete Playlist Modal
const deletePlaylistModal = document.getElementById('deletePlaylistModal');
const closeDeleteModal = document.getElementById('closeDeleteModal');
const cancelDelete = document.getElementById('cancelDelete');
const confirmDelete = document.getElementById('confirmDelete');
const playlistToDelete = document.getElementById('playlistToDelete');

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Player toggle buttons
const player = document.getElementById('player');
const playerUpBtn = document.getElementById('playerUpBtn');
const playerDownBtn = document.getElementById('playerDownBtn');

// Update play overlays
function updatePlayOverlays() {
    document.querySelectorAll('.play-overlay i').forEach(icon => {
        const songCard = icon.closest('.song-card');
        if (songCard) {
            const songId = parseInt(songCard.dataset.songId);
            if (songId === currentSong?.id && isPlaying) {
                icon.className = 'bi bi-pause-fill';
            } else {
                icon.className = 'bi bi-play-fill';
            }
        }
    });
}

// Initialize app
function init() {
    renderSongs();
    renderPlaylists();
    setupEventListeners();
}

// Render songs in grid view
function renderSongs(songsToRender = songs) {
    songGrid.innerHTML = songsToRender.map(song => `
                <div class="song-card" data-song-id="${song.id}">
                    <div class="song-image">
                        <img src="${song.image}" alt="${song.title}">
                        <div class="play-overlay">
                            <i class="bi bi-play-circle-fill"></i>
                        </div>
                    </div>
                    <div class="song-info">
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                    </div>
                    <div class="song-actions">
                        <span class="duration" id="duration-${song.id}">--:--</span>
                        <div>
                            <button class="favorite-btn ${favorites.includes(song.id) ? 'active' : ''}" data-song-id="${song.id}">
                                <i class="${favorites.includes(song.id) ? 'bi bi-heart-fill' : 'bi bi-heart'}"></i>
                            </button>
                            <button class="add-to-playlist-btn" data-song-id="${song.id}">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
    updatePlayOverlays();

    // Load durations for all songs
    songsToRender.forEach(song => {
        loadSongDuration(song.id, song.src);
    });
}

// Render playlists
function renderPlaylists() {
    const defaultPlaylist = `
                <div class="playlist-item" data-playlist="liked">
                    <div class="playlist-item-content">
                        <i class="bi bi-heart"></i>
                        <span>Liked Songs</span>
                    </div>
                </div>
            `;

    const userPlaylists = playlists.map(playlist => `
                <div class="playlist-item" data-playlist="${playlist.id}">
                    <div class="playlist-item-content">
                        <i class="bi bi-list"></i>
                        <span>${playlist.name}</span>
                    </div>
                    <button class="delete-playlist-btn" data-playlist-id="${playlist.id}" data-playlist-name="${playlist.name}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            `).join('');

    playlistContainer.innerHTML = defaultPlaylist + userPlaylists;
}

// Render playlist options in modal
function renderPlaylistOptions() {
    const userPlaylists = playlists.map(playlist => `
                <div class="playlist-option" data-playlist-id="${playlist.id}">
                    <i class="bi bi-list"></i>
                    <span>${playlist.name}</span>
                </div>
            `).join('');

    playlistList.innerHTML = userPlaylists;
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking on content area on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(song =>
            song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm) ||
            song.album.toLowerCase().includes(searchTerm)
        );
        renderSongs(filteredSongs);
    });

    // Play/Pause button
    playBtn.addEventListener('click', togglePlayPause);

    // Song selection
    document.addEventListener('click', (e) => {
        const songCard = e.target.closest('.song-card');
        const songListItem = e.target.closest('.song-list-item');

        if (songCard || songListItem) {
            const songId = parseInt((songCard || songListItem).dataset.songId);
            playSong(songId);

            // Close sidebar on mobile after selecting a song
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Favorite buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite-btn')) {
            e.stopPropagation();
            const btn = e.target.closest('.favorite-btn');
            const songId = parseInt(btn.dataset.songId);
            toggleFavorite(songId);
        }
    });

    // Add to playlist buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-playlist-btn')) {
            e.stopPropagation();
            const btn = e.target.closest('.add-to-playlist-btn');
            selectedSongId = parseInt(btn.dataset.songId);
            openAddToPlaylistModal();
        }
    });

    // Delete playlist buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.delete-playlist-btn')) {
            e.stopPropagation();
            const btn = e.target.closest('.delete-playlist-btn');
            playlistToDeleteId = parseInt(btn.dataset.playlistId);
            const playlistName = btn.dataset.playlistName;
            openDeletePlaylistModal(playlistName);
        }
    });

    // Player controls
    document.getElementById('prevBtn').addEventListener('click', playPrevious);
    document.getElementById('nextBtn').addEventListener('click', playNext);
    document.getElementById('shuffleBtn').addEventListener('click', toggleShuffle);
    document.getElementById('repeatBtn').addEventListener('click', toggleRepeat);

    // Progress bar
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    });

    // Volume control
    document.getElementById('volumeSlider').addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        updateVolume(percent);
    });

    // Like button in player
    likeBtn.addEventListener('click', () => {
        if (currentSong) {
            toggleFavorite(currentSong.id);
        }
    });

    // Playlist creation
    createPlaylistBtn.addEventListener('click', () => {
        createPlaylistModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        createPlaylistModal.classList.remove('active');
    });

    cancelBtn.addEventListener('click', () => {
        createPlaylistModal.classList.remove('active');
    });

    playlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createPlaylist();
    });

    // Add to Playlist Modal
    closeAddToPlaylistModal.addEventListener('click', () => {
        addToPlaylistModal.classList.remove('active');
    });

    cancelAddToPlaylist.addEventListener('click', () => {
        addToPlaylistModal.classList.remove('active');
    });

    confirmAddToPlaylist.addEventListener('click', () => {
        addSongToPlaylist();
    });

    // Delete Playlist Modal
    closeDeleteModal.addEventListener('click', () => {
        deletePlaylistModal.classList.remove('active');
    });

    cancelDelete.addEventListener('click', () => {
        deletePlaylistModal.classList.remove('active');
    });

    confirmDelete.addEventListener('click', () => {
        deletePlaylist();
    });

    // Playlist option selection
    playlistList.addEventListener('click', (e) => {
        const option = e.target.closest('.playlist-option');
        if (option) {
            document.querySelectorAll('.playlist-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
            selectedPlaylistId = parseInt(option.dataset.playlistId);
        }
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateToPage(page);

            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Playlist selection
    document.addEventListener('click', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem && !e.target.closest('.delete-playlist-btn')) {
            const playlistId = playlistItem.dataset.playlist;
            showPlaylist(playlistId);

            // Close sidebar on mobile after selecting playlist
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });

    // Player toggle buttons
    playerUpBtn.addEventListener('click', () => {
        player.classList.remove('hidden');
    });

    playerDownBtn.addEventListener('click', () => {
        player.classList.add('hidden');
    });

    // Audio event listeners
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTime.textContent = formatTime(audioPlayer.duration);
    });
    audioPlayer.addEventListener('ended', () => {
        if (repeatMode) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            playNext();
        }
    });
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        playIcon.className = 'bi bi-pause-circle-fill';
        updatePlayOverlays();
    });
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        playIcon.className = 'bi bi-play-circle-fill';
        updatePlayOverlays();
    });
}

// Play song
function playSong(songId) {
    const song = songs.find(s => s.id === songId);
    if (!song) return;

    currentSong = song;
    nowPlayingTitle.textContent = song.title;
    nowPlayingArtist.textContent = song.artist;
    nowPlayingImage.src = song.image;

    // Update playing state in UI
    document.querySelectorAll('.song-list-item').forEach(item => {
        item.classList.remove('playing');
        if (parseInt(item.dataset.songId) === songId) {
            item.classList.add('playing');
        }
    });

    // Update like button in player
    updateLikeButton();

    // Play audio
    audioPlayer.src = song.src;
    audioPlayer.play();
    isPlaying = true;
    playIcon.className = 'bi bi-pause-circle-fill';

    updatePlayOverlays();
    showToast(`Now playing: ${song.title}`);
}

// Toggle play/pause
function togglePlayPause() {
    if (!currentSong) {
        playSong(songs[0].id);
        return;
    }

    isPlaying = !isPlaying;
    playIcon.className = isPlaying ? 'bi bi-pause-circle-fill' : 'bi bi-play-circle-fill';

    if (isPlaying) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }

    updatePlayOverlays();
}



// Update progress
function updateProgress() {
    const percent = audioPlayer.currentTime / audioPlayer.duration;
    progressFilled.style.width = `${percent * 100}%`;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    totalTime.textContent = formatTime(audioPlayer.duration);
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Toggle favorite
function toggleFavorite(songId) {
    const index = favorites.indexOf(songId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites');
    } else {
        favorites.push(songId);
        showToast('Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderSongs();
    updateLikeButton();
}

// Update like button in player
function updateLikeButton() {
    if (!currentSong) return;

    const isFavorite = favorites.includes(currentSong.id);
    likeBtn.innerHTML = `<i class="${isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'}"></i>`;
}

// Play previous song
function playPrevious() {
    if (!currentSong) return;

    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    playSong(songs[prevIndex].id);
}

// Play next song
function playNext() {
    if (!currentSong) {
        playSong(songs[0].id);
        return;
    }

    let nextIndex;
    if (shuffleMode) {
        nextIndex = Math.floor(Math.random() * songs.length);
    } else {
        const currentIndex = songs.findIndex(s => s.id === currentSong.id);
        nextIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
    }

    playSong(songs[nextIndex].id);
}

// Toggle shuffle
function toggleShuffle() {
    shuffleMode = !shuffleMode;
    document.getElementById('shuffleBtn').style.color = shuffleMode ? 'var(--primary-color)' : 'var(--text-primary)';
}

// Toggle repeat
function toggleRepeat() {
    repeatMode = !repeatMode;
    document.getElementById('repeatBtn').style.color = repeatMode ? 'var(--primary-color)' : 'var(--text-primary)';
}

// Update volume
function updateVolume(percent) {
    audioPlayer.volume = percent;
    document.getElementById('volumeFilled').style.width = `${percent * 100}%`;
}

// Create playlist
function createPlaylist() {
    const name = document.getElementById('playlistName').value;
    const description = document.getElementById('playlistDescription').value;

    if (!name) return;

    const playlist = {
        id: Date.now(),
        name,
        description,
        songs: []
    };

    playlists.push(playlist);
    localStorage.setItem('playlists', JSON.stringify(playlists));

    renderPlaylists();
    createPlaylistModal.classList.remove('active');
    playlistForm.reset();

    showToast(`Playlist "${name}" created successfully`);
}

// Open Add to Playlist Modal
function openAddToPlaylistModal() {
    if (playlists.length === 0) {
        showToast('Create a playlist first');
        return;
    }

    renderPlaylistOptions();
    addToPlaylistModal.classList.add('active');
    selectedPlaylistId = null;
}

// Add song to playlist
function addSongToPlaylist() {
    if (!selectedSongId || !selectedPlaylistId) {
        showToast('Please select a playlist');
        return;
    }

    const playlist = playlists.find(p => p.id === selectedPlaylistId);
    if (!playlist) return;

    if (playlist.songs.includes(selectedSongId)) {
        showToast('Song already in playlist');
        addToPlaylistModal.classList.remove('active');
        return;
    }

    playlist.songs.push(selectedSongId);
    localStorage.setItem('playlists', JSON.stringify(playlists));

    const song = songs.find(s => s.id === selectedSongId);
    showToast(`Added "${song.title}" to "${playlist.name}"`);

    addToPlaylistModal.classList.remove('active');
}

// Open Delete Playlist Modal
function openDeletePlaylistModal(playlistName) {
    playlistToDelete.textContent = playlistName;
    deletePlaylistModal.classList.add('active');
}

// Delete playlist
function deletePlaylist() {
    if (!playlistToDeleteId) return;

    const playlistIndex = playlists.findIndex(p => p.id === playlistToDeleteId);
    if (playlistIndex === -1) return;

    const playlistName = playlists[playlistIndex].name;
    playlists.splice(playlistIndex, 1);
    localStorage.setItem('playlists', JSON.stringify(playlists));

    renderPlaylists();
    deletePlaylistModal.classList.remove('active');

    showToast(`Playlist "${playlistName}" deleted`, 'error');

    // If we're currently viewing the deleted playlist, navigate to home
    if (pageTitle.textContent === playlistName) {
        navigateToPage('home');
    }
}

// Show playlist
function showPlaylist(playlistId) {
    if (playlistId === 'liked') {
        const likedSongs = songs.filter(song => favorites.includes(song.id));
        renderSongs(likedSongs);
        pageTitle.textContent = 'Liked Songs';
        pageSubtitle.textContent = `${likedSongs.length} songs`;
    } else {
        const playlist = playlists.find(p => p.id == playlistId);
        if (playlist) {
            const playlistSongs = songs.filter(song => playlist.songs.includes(song.id));
            renderSongs(playlistSongs);
            pageTitle.textContent = playlist.name;
            pageSubtitle.textContent = playlist.description || `${playlistSongs.length} songs`;
        }
    }
}

// Navigate to page
function navigateToPage(page) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    switch (page) {
        case 'home':
            renderSongs();
            pageTitle.textContent = 'PlayList';
            pageSubtitle.textContent = "Welcome To JattBeatz";
            break;
        case 'browse':
            const hipHopSongs = songs.filter(song => hipHopArtists.includes(song.artist));
            renderSongs(hipHopSongs);
            pageTitle.textContent = 'Hip-Hop';
            pageSubtitle.textContent = 'Explore hip hop songs';
            break;
        case 'radio':
            const Extractsong = songs.filter(song => Extractsongs.includes(song.artist));
            renderSongs(Extractsong);
            pageTitle.textContent = 'Other Songs';
            pageSubtitle.textContent = 'Explore Extract songs';
            break;
        case 'favorites':
            showPlaylist('liked');
            break;
        default:
            renderSongs();
            pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);
            pageSubtitle.textContent = 'Discover new music';
    }
}

// Load song duration automatically
function loadSongDuration(songId, src) {
    const tempAudio = new Audio();
    tempAudio.src = src;

    tempAudio.addEventListener('loadedmetadata', () => {
        const durationElement = document.getElementById(`duration-${songId}`);
        if (durationElement) {
            durationElement.textContent = formatTime(tempAudio.duration);
        }
    });

    tempAudio.addEventListener('error', () => {
        const durationElement = document.getElementById(`duration-${songId}`);
        if (durationElement) {
            durationElement.textContent = '--:--';
        }
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = 'toast show';
    if (type === 'error') {
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize app
init();

// Theme toggle for light/dark mode
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    } else {
        body.classList.remove('dark-theme');
        themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
    localStorage.setItem('theme', theme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
