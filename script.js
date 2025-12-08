// Temuujin giin TOP10 durtai volleyballin toglogchid =
const playersDatabase = [
  {
    id: 1,
    name: "Yuki Ishikawa",
    gender: "male",
    position: "Outside Hitter",
    team: "Hitachi Rivale",
    age: 30,
    height: "178cm",
    jersey: "4",
    career: "National Team Captain",
    achievements: "Olympic Gold Medalist (2016)",
    birthDate: "1994-01-15",
    hometown: "Fukuoka Prefecture",
    photo:
      "https://tse2.mm.bing.net/th/id/OIP.sEvbYsQT3mqAc0gF0_Eh9QHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Yuji Nishida",
    gender: "Male",
    position: "Opposite",
    team: "Hamamatsu Daiichi Seiko",
    age: 27,
    height: "188cm",
    jersey: "8",
    career: "National Team Member",
    achievements: "Asian Championship Winner (2019)",
    birthDate: "1997-06-20",
    hometown: "Shizuoka Prefecture",
    photo:
      "https://th.bing.com/th/id/R.7ca045543040b2ec71e5a1e9f24d6cb2?rik=VHBazLGgHqA%2fiA&riu=http%3a%2f%2fvoleibolife.com%2fwp-content%2fuploads%2f2024%2f08%2fYuji-Nishida-1024x576.jpg&ehk=np%2fTUgV18TCSL0Cz64nwdSM8QDBNbuCU0GcfUCy7Wos%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Sayo Iwanaga",
    gender: "Female",
    position: "Middle Blocker",
    team: "NECレッドロケッツ",
    age: 28,
    height: "182cm",
    jersey: "5",
    career: "National Team Player",
    achievements: "MVP 2020 V-League",
    birthDate: "1996-03-10",
    hometown: "Okayama Prefecture",
    photo:
      "https://tse3.explicit.bing.net/th/id/OIP.kpirJJqVaE3f7ir-T2C3TgHaLG?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Masahiro Yanagida",
    gender: "Male",
    position: "Setter",
    team: "Panasonic Panthers",
    age: 29,
    height: "181cm",
    jersey: "1",
    career: "National Team Setter",
    achievements: "Olympics Participant (2016, 2020)",
    birthDate: "1995-11-25",
    hometown: "Tokyo",
    photo:
      "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/E816WT/incheon-south-korea-28th-sep-2014-masahiro-yanagida-jpn-volleyball-E816WT.jpg",
  },
  {
    id: 5,
    name: "Momoka Ono",
    gender: "Female",
    position: "Setter",
    team: "Hisamitsu Springs",
    age: 26,
    height: "175cm",
    jersey: "2",
    career: "National Team Setter",
    achievements: "V-League Best Setter (2021)",
    birthDate: "1998-08-14",
    hometown: "Kumamoto Prefecture",
    photo:
      "https://tse3.mm.bing.net/th/id/OIP.ePVdL8OOd44oPbFpSSg5igAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    name: "Ran Takahashi",
    gender: "Male",
    position: "Middle Blocker",
    team: "Rikuzentakata Rikko",
    age: 25,
    height: "186cm",
    jersey: "11",
    career: "Rising Star",
    achievements: "V-League Rookie of the Year (2022)",
    birthDate: "1999-04-08",
    hometown: "Iwate Prefecture",
    photo:
      "https://tse4.mm.bing.net/th/id/OIP.QAR9NoilUBhNfcwhur9qtgHaLH?w=203&h=304&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
  },
  {
    id: 7,
    name: "Sakura Matsuda",
    gender: "Female",
    position: "Libero",
    team: "Toyota Queenseis",
    age: 27,
    height: "169cm",
    jersey: "1",
    career: "National Team Libero",
    achievements: "Defensive Specialist Award (2019)",
    birthDate: "1997-09-30",
    hometown: "Nagoya",
    photo:
      "https://c8.alamy.com/comp/2WY9WF4/tokyo-japan-credit-matsuo-5th-apr-2024-satomi-fukudome-jpn-volleyball-japan-womens-volleyball-national-team-training-session-in-tokyo-japan-credit-matsuo-kaflo-sportalamy-live-news-2WY9WF4.jpg",
  },
  {
    id: 8,
    name: "Taiji Miyaji",
    gender: "Male",
    position: "Outside Hitter",
    team: "JT Thunders",
    age: 28,
    height: "191cm",
    jersey: "3",
    career: "National Team Member",
    achievements: "V-League Champion (2021)",
    birthDate: "1996-07-12",
    hometown: "Aomori Prefecture",
    photo:
      "https://l450v.alamy.com/450v/exdgr5/saitama-japan-11th-july-2015-mai-yamaguchi-jpn-volleyball-fivb-volleyball-exdgr5.jpg",
  },
  {
    id: 9,
    name: "Emika Sugimori",
    gender: "Female",
    position: "Outside Hitter",
    team: "Saitama Ageo Medics",
    age: 24,
    height: "180cm",
    jersey: "6",
    career: "National Team Youth Player",
    achievements: "U20 World Champion (2018)",
    birthDate: "2000-02-17",
    hometown: "Saitama Prefecture",
    photo:
      "https://th.bing.com/th/id/R.25a26c5d72f28b594b6407df7964cad3?rik=XurxvQWh4dr4JQ&pid=ImgRaw&r=0",
  },
  {
    id: 10,
    name: "Kento Miyaura",
    gender: "Male",
    position: "Middle Blocker",
    team: "Volleyball Association",
    age: 26,
    height: "187cm",
    jersey: "9",
    career: "National Team Player",
    achievements: "Asian Games Silver (2018)",
    birthDate: "1998-05-22",
    hometown: "Kyoto Prefecture",
    photo:
      "https://tse1.mm.bing.net/th/id/OIP.hKFu0DR0yJSipBI01rrYbgHaL4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 11,
    name: "Risa Shoji",
    gender: "Female",
    position: "Middle Blocker",
    team: "Hisamitsu Springs",
    age: 29,
    height: "183cm",
    jersey: "3",
    career: "National Team Member",
    achievements: "Olympic Silver (2020)",
    birthDate: "1995-12-09",
    hometown: "Miyagi Prefecture",
    photo:
      "https://th.bing.com/th/id/R.d0c85641a16eb1df5f5a444fa6a7d338?rik=9AECX8W2ylcbgA&pid=ImgRaw&r=0",
  },
  {
    id: 12,
    name: "Issei Otake",
    gender: "Male",
    position: "Outside Hitter",
    team: "Panasonic Panthers",
    age: 30,
    height: "189cm",
    jersey: "7",
    career: "Veteran Player",
    achievements: "V-League MVP (2017)",
    birthDate: "1994-10-03",
    hometown: "Kanagawa Prefecture",
    photo:
      "https://tse2.mm.bing.net/th/id/OIP.p_qo_5CMbF2HvtvlkOGI2gHaL4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 13,
    name: "Akane Yamada",
    gender: "Female",
    position: "Opposite",
    team: "NECレッドロケッツ",
    age: 25,
    height: "184cm",
    jersey: "4",
    career: "National Team Rising Star",
    achievements: "V-League Rookie (2021)",
    birthDate: "1999-11-16",
    hometown: "Osaka Prefecture",
    photo:
      "https://tse3.mm.bing.net/th/id/OIP.nbnhmeZy6EPOAuNhhAh0DAHaL4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 14,
    name: "Daiji Sawamura",
    gender: "Male",
    position: "Libero",
    team: "Hamamatsu Daiichi Seiko",
    age: 27,
    height: "176cm",
    jersey: "1",
    career: "National Team Libero",
    achievements: "Best Libero Award (2020)",
    birthDate: "1997-08-11",
    hometown: "Hamamatsu",
    photo:
      "https://tse3.mm.bing.net/th/id/OIP.vJT9nTQr3yI1Q5bRjq6UvAHaJ4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 15,
    name: "Manami Ando",
    gender: "Female",
    position: "Outside Hitter",
    team: "Hitachi Rivale",
    age: 26,
    height: "179cm",
    jersey: "9",
    career: "National Team Player",
    achievements: "Pan-American Cup Winner (2022)",
    birthDate: "1998-01-23",
    hometown: "Hyogo Prefecture",
    photo:
      "https://tse2.mm.bing.net/th/id/OIP.Wb8kpQCgslOc15nann_9HgHaL4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.querySelector(".search-btn");
const positionFilter = document.getElementById("positionFilter");
const teamFilter = document.getElementById("teamFilter");
const genderFilter = document.getElementById("genderFilter");
const resetBtn = document.getElementById("resetBtn");
const playersGrid = document.getElementById("playersGrid");
const playerModal = document.getElementById("playerModal");
const playerDetail = document.getElementById("playerDetail");
const closeBtn = document.querySelector(".close");
const playerCount = document.getElementById("playerCount");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  populateTeamFilter();
  displayPlayers(playersDatabase);
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });
  positionFilter.addEventListener("change", handleFilter);
  teamFilter.addEventListener("change", handleFilter);
  genderFilter.addEventListener("change", handleFilter);
  resetBtn.addEventListener("click", resetFilters);
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === playerModal) closeModal();
  });
}

// Populate Team Filter
function populateTeamFilter() {
  const teams = [...new Set(playersDatabase.map((p) => p.team))].sort();
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamFilter.appendChild(option);
  });
}

// Handle Search
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    displayPlayers(playersDatabase);
    return;
  }

  const results = playersDatabase.filter(
    (player) =>
      player.name.toLowerCase().includes(query) ||
      player.team.toLowerCase().includes(query) ||
      player.position.toLowerCase().includes(query)
  );

  displayPlayers(results);
}

// Handle Filter
function handleFilter() {
  const position = positionFilter.value;
  const team = teamFilter.value;
  const gender = genderFilter.value;
  const query = searchInput.value.toLowerCase().trim();

  let results = playersDatabase;

  // Apply search query
  if (query !== "") {
    results = results.filter(
      (player) =>
        player.name.toLowerCase().includes(query) ||
        player.team.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query)
    );
  }

  // Apply filters
  if (position !== "") {
    results = results.filter((p) => p.position === position);
  }

  if (team !== "") {
    results = results.filter((p) => p.team === team);
  }

  if (gender !== "") {
    results = results.filter((p) => p.gender === gender);
  }

  displayPlayers(results);
}

// Reset Filters
function resetFilters() {
  searchInput.value = "";
  positionFilter.value = "";
  teamFilter.value = "";
  genderFilter.value = "";
  displayPlayers(playersDatabase);
}

// Display Players
function displayPlayers(players) {
  playersGrid.innerHTML = "";

  if (players.length === 0) {
    playersGrid.innerHTML =
      '<div class="no-results">No players found. Try adjusting your filters.</div>';
    playerCount.textContent = "Total: 0 players";
    return;
  }

  players.forEach((player) => {
    const playerCard = createPlayerCard(player);
    playersGrid.appendChild(playerCard);
  });

  playerCount.textContent = `Total: ${players.length} player${
    players.length !== 1 ? "s" : ""
  }`;
}

// Create Player Card
function createPlayerCard(player) {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
        <img src="${player.photo}" alt="${player.name}" class="player-photo">
        <div class="player-name">${player.name}</div>
        <div class="player-position">${player.position}</div>
        <div class="player-team">${player.team}</div>
        <div class="player-info">
            <span>Age: ${player.age}</span>
            <span>Height: ${player.height}</span>
        </div>
        <div class="player-stat">Jersey #${player.jersey}</div>
    `;

  card.addEventListener("click", () => showPlayerDetail(player));
  return card;
}

// Show Player Detail
function showPlayerDetail(player) {
  playerDetail.innerHTML = `
        <div class="player-detail-header">
            <img src="${player.photo}" alt="${player.name}" class="player-detail-photo">
            <h2>${player.name}</h2>
            <div class="player-detail-position">${player.position}</div>
        </div>

        <div class="detail-section">
            <h3>Team Information</h3>
            <div class="detail-row">
                <span class="detail-label">Team:</span>
                <span class="detail-value">${player.team}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Jersey Number:</span>
                <span class="detail-value">#${player.jersey}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Gender:</span>
                <span class="detail-value">${player.gender}</span>
            </div>
        </div>

        <div class="detail-section">
            <h3>Physical Information</h3>
            <div class="detail-row">
                <span class="detail-label">Age:</span>
                <span class="detail-value">${player.age}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Height:</span>
                <span class="detail-value">${player.height}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Birth Date:</span>
                <span class="detail-value">${player.birthDate}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Hometown:</span>
                <span class="detail-value">${player.hometown}</span>
            </div>
        </div>

        <div class="detail-section">
            <h3>Career Information</h3>
            <div class="detail-row">
                <span class="detail-label">Career:</span>
                <span class="detail-value">${player.career}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Achievements:</span>
                <span class="detail-value">${player.achievements}</span>
            </div>
        </div>
    `;

  playerModal.style.display = "block";
}

// Close Modal
function closeModal() {
  playerModal.style.display = "none";
}
