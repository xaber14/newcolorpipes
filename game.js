const COLORS = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  yellow: "#eab308",
  purple: "#a855f7",
  orange: "#f97316",
  cyan: "#06b6d4",
  pink: "#ec4899"
};

const LEVELS = [
  {
    size: 5,
    difficulty: "Mudah",
    pairs: {
      red: [[0, 0], [1, 3]],
      blue: [[1, 2], [2, 1]],
      green: [[2, 2], [3, 3]],
      yellow: [[3, 2], [4, 0]],
      purple: [[4, 1], [4, 4]]
    }
  },
  {
    size: 5,
    difficulty: "Mudah",
    pairs: {
      red: [[0, 0], [1, 4]],
      blue: [[1, 3], [2, 2]],
      green: [[2, 3], [3, 2]],
      yellow: [[3, 1], [4, 1]],
      purple: [[4, 2], [4, 4]]
    }
  },
  {
    size: 5,
    difficulty: "Mudah",
    pairs: {
      red: [[0, 0], [1, 2]],
      blue: [[1, 1], [2, 1]],
      green: [[2, 2], [3, 3]],
      yellow: [[3, 2], [4, 0]],
      purple: [[4, 1], [4, 2]],
      orange: [[4, 3], [4, 4]]
    }
  },
  {
    size: 5,
    difficulty: "Mudah",
    pairs: {
      red: [[0, 0], [3, 1]],
      blue: [[2, 1], [1, 2]],
      green: [[2, 2], [3, 3]],
      yellow: [[2, 3], [0, 4]],
      purple: [[1, 4], [2, 4]],
      orange: [[3, 4], [4, 4]]
    }
  },
  {
    size: 5,
    difficulty: "Mudah",
    pairs: {
      red: [[0, 0], [4, 1]],
      blue: [[3, 1], [0, 1]],
      green: [[0, 2], [4, 2]],
      yellow: [[4, 3], [1, 3]],
      purple: [[0, 3], [2, 4]],
      orange: [[3, 4], [4, 4]]
    }
  },
  {
    size: 6,
    difficulty: "Sedang",
    pairs: {
      red: [[0, 0], [1, 5]],
      blue: [[1, 4], [2, 0]],
      green: [[2, 1], [3, 5]],
      yellow: [[3, 4], [4, 1]],
      purple: [[4, 2], [5, 5]],
      orange: [[5, 4], [5, 0]]
    }
  },
  {
    size: 6,
    difficulty: "Sedang",
    pairs: {
      red: [[0, 0], [0, 4]],
      blue: [[0, 5], [2, 0]],
      green: [[2, 1], [2, 5]],
      yellow: [[3, 5], [4, 0]],
      purple: [[4, 1], [5, 5]],
      orange: [[5, 4], [5, 2]],
      cyan: [[5, 1], [5, 0]]
    }
  },
  {
    size: 6,
    difficulty: "Sedang",
    pairs: {
      red: [[0, 0], [1, 3]],
      blue: [[1, 2], [2, 0]],
      green: [[2, 1], [3, 3]],
      yellow: [[3, 2], [4, 1]],
      purple: [[4, 2], [5, 5]],
      orange: [[5, 4], [5, 0]]
    }
  },
  {
    size: 7,
    difficulty: "Sulit",
    pairs: {
      red: [[0, 0], [1, 5]],
      blue: [[1, 4], [2, 0]],
      green: [[2, 1], [3, 5]],
      yellow: [[3, 4], [4, 1]],
      purple: [[4, 2], [5, 4]],
      orange: [[5, 3], [6, 1]],
      cyan: [[6, 2], [6, 6]]
    }
  },
  {
    size: 7,
    difficulty: "Sulit",
    pairs: {
      red: [[0, 0], [0, 5]],
      blue: [[0, 6], [2, 0]],
      green: [[2, 1], [3, 6]],
      yellow: [[3, 5], [4, 1]],
      purple: [[4, 2], [5, 5]],
      orange: [[5, 4], [6, 0]],
      cyan: [[6, 1], [6, 4]],
      pink: [[6, 5], [6, 6]]
    }
  },
  {
    size: 7,
    difficulty: "Sulit",
    pairs: {
      red: [[0, 0], [1, 4]],
      blue: [[1, 3], [2, 0]],
      green: [[2, 1], [2, 6]],
      yellow: [[3, 6], [4, 1]],
      purple: [[4, 2], [5, 5]],
      orange: [[5, 4], [5, 0]],
      cyan: [[6, 0], [6, 4]],
      pink: [[6, 5], [6, 6]]
    }
  },
  {
    size: 8,
    difficulty: "Sulit",
    pairs: {
      red: [[0, 0], [1, 5]],
      blue: [[1, 4], [2, 2]],
      green: [[2, 3], [3, 4]],
      yellow: [[3, 3], [4, 4]],
      purple: [[4, 5], [5, 2]],
      orange: [[5, 1], [6, 5]],
      cyan: [[6, 6], [7, 3]],
      pink: [[7, 2], [7, 0]]
    }
  },
  {
    size: 9,
    difficulty: "Ahli",
    pairs: {
      red: [[0, 0], [1, 6]],
      blue: [[1, 5], [2, 4]],
      green: [[2, 5], [3, 3]],
      yellow: [[3, 2], [4, 7]],
      purple: [[4, 8], [5, 0]],
      orange: [[6, 0], [7, 8]],
      cyan: [[7, 7], [8, 1]],
      pink: [[8, 2], [8, 8]]
    }
  },
  {
    size: 10,
    difficulty: "Ahli",
    pairs: {
      red: [[0, 0], [1, 6]],
      blue: [[1, 5], [2, 5]],
      green: [[2, 6], [3, 1]],
      yellow: [[3, 0], [5, 9]],
      purple: [[5, 8], [6, 3]],
      orange: [[6, 4], [7, 4]],
      cyan: [[7, 3], [8, 8]],
      pink: [[8, 9], [9, 0]]
    }
  },
  {
    size: 11,
    difficulty: "Master",
    pairs: {
      red: [[0, 0], [1, 6]],
      blue: [[1, 5], [2, 9]],
      green: [[2, 10], [4, 2]],
      yellow: [[4, 3], [5, 3]],
      purple: [[5, 2], [7, 10]],
      orange: [[7, 9], [8, 5]],
      cyan: [[8, 6], [9, 1]],
      pink: [[9, 0], [10, 10]]
    }
  },
  {
    size: 12,
    difficulty: "Master",
    pairs: {
      red: [[0, 0], [1, 5]],
      blue: [[1, 4], [3, 11]],
      green: [[3, 10], [4, 6]],
      yellow: [[4, 7], [6, 0]],
      purple: [[6, 1], [7, 5]],
      orange: [[7, 4], [9, 11]],
      cyan: [[9, 10], [10, 6]],
      pink: [[10, 7], [11, 0]]
    }
  }
];

const STORAGE_KEY = "colorPipesProgressV2";
const THEME_KEY = "colorPipesTheme";
const board = document.getElementById("board");
const screens = {
  menu: document.getElementById("menuScreen"),
  levels: document.getElementById("levelScreen"),
  game: document.getElementById("gameScreen")
};

let currentLevel = 0;
let paths = {};
let active = null;
let moveHistory = [];
let moves = 0;
let elapsed = 0;
let timerId = null;
let progress = loadProgress();
let theme = loadTheme();

const endpointMap = new Map();

document.getElementById("playButton").addEventListener("click", () => openLevel(firstOpenLevel()));
document.getElementById("levelsButton").addEventListener("click", showLevels);
document.getElementById("levelHomeButton").addEventListener("click", showMenu);
document.getElementById("gameHomeButton").addEventListener("click", showMenu);
document.getElementById("resetButton").addEventListener("click", resetLevel);
document.getElementById("undoButton").addEventListener("click", undoMove);
document.getElementById("themeToggle").addEventListener("click", toggleTheme);
document.getElementById("nextButton").addEventListener("click", () => {
  const next = Math.min(currentLevel + 1, LEVELS.length - 1);
  openLevel(next);
});

renderLevelList();
applyTheme();
showMenu();

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("screen-active"));
  screens[name].classList.add("screen-active");
}

function showMenu() {
  stopTimer();
  updateMenuStats();
  showScreen("menu");
}

function showLevels() {
  stopTimer();
  renderLevelList();
  showScreen("levels");
}

function openLevel(index) {
  currentLevel = index;
  resetLevelState();
  renderBoard();
  updateHud();
  document.getElementById("completeOverlay").classList.remove("show");
  document.getElementById("gameTitle").textContent = `Level ${index + 1}`;
  document.getElementById("difficultyLabel").textContent = LEVELS[index].difficulty;
  showScreen("game");
  startTimer();
}

function renderLevelList() {
  const levelList = document.getElementById("levelList");
  levelList.innerHTML = "";

  LEVELS.forEach((level, index) => {
    const button = document.createElement("button");
    const saved = progress.levels[index];
    button.className = `level-card ${saved?.completed ? "completed" : ""}`;
    button.innerHTML = `
      <strong>Level ${index + 1}<b>${saved?.completed ? "✓" : ""}</b></strong>
      <span>${level.size}x${level.size} · ${level.difficulty}</span>
      <span>${saved?.completed ? `${formatTime(saved.bestTime)} · ${saved.bestMoves} moves` : "Belum selesai"}</span>
    `;
    button.addEventListener("click", () => openLevel(index));
    levelList.appendChild(button);
  });
}

function renderBoard() {
  const level = LEVELS[currentLevel];
  endpointMap.clear();
  board.innerHTML = "";
  board.className = `board board-${level.size}`;
  board.style.setProperty("--size", level.size);

  Object.entries(level.pairs).forEach(([color, pair]) => {
    pair.forEach((point) => endpointMap.set(cellKey(point[0], point[1]), color));
  });

  for (let row = 0; row < level.size; row += 1) {
    for (let col = 0; col < level.size; col += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.innerHTML = '<span class="pipe"></span><span class="dot"></span>';
      board.appendChild(cell);
    }
  }

  paintBoard();
}

function startPath(cell, pointerId) {
  const point = getPoint(cell);
  const color = endpointMap.get(cellKey(point.row, point.col));
  if (!color || isWon()) return;

  pushHistory();
  paths[color] = [[point.row, point.col]];
  clearColorFromOtherPaths(color);
  active = { color, path: paths[color], changed: false };
  board.setPointerCapture?.(pointerId);
  paintBoard();
}

function extendPath(cell) {
  if (!active || isWon()) return;
  const point = getPoint(cell);
  const current = active.path[active.path.length - 1];
  if (!current || samePoint(current, [point.row, point.col])) return;

  const previousIndex = indexOfPoint(active.path, [point.row, point.col]);
  if (previousIndex >= 0) {
    active.path.splice(previousIndex + 1);
    active.changed = true;
    paintBoard();
    return;
  }

  if (!isAdjacent(current, [point.row, point.col])) return;

  const endpointColor = endpointMap.get(cellKey(point.row, point.col));
  if (endpointColor && endpointColor !== active.color) return;

  removeCellFromOtherPaths(point.row, point.col, active.color);
  active.path.push([point.row, point.col]);
  active.changed = true;
  paintBoard();
}

function endPath() {
  if (!active) return;

  const color = active.color;
  const path = paths[color];
  if (!isColorConnected(color)) {
    paths[color] = [path[0]];
  }

  active = null;
  moves += 1;
  updateHud();
  paintBoard();
  checkWin();
}

function resetLevel() {
  pushHistory();
  resetLevelState(false);
  renderBoard();
  updateHud();
  startTimer();
}

function undoMove() {
  const snapshot = moveHistory.pop();
  if (!snapshot) return;
  paths = clonePaths(snapshot.paths);
  moves = snapshot.moves;
  elapsed = snapshot.elapsed;
  active = null;
  document.getElementById("completeOverlay").classList.remove("show");
  startTimer();
  paintBoard();
  updateHud();
}

function checkWin() {
  const level = LEVELS[currentLevel];
  const connected = Object.keys(level.pairs).every((color) => isColorConnected(color));
  const filled = getFilledCount() === level.size * level.size;

  if (connected && filled) {
    stopTimer();
    saveProgress();
    document.getElementById("completeStats").textContent = `${formatTime(elapsed)} · ${moves} moves`;
    document.getElementById("completeOverlay").classList.add("show");
    renderLevelList();
  }
}

function saveProgress() {
  const previous = progress.levels[currentLevel] || {};
  progress.levels[currentLevel] = {
    completed: true,
    bestTime: previous.bestTime ? Math.min(previous.bestTime, elapsed) : elapsed,
    bestMoves: previous.bestMoves ? Math.min(previous.bestMoves, moves) : moves
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { levels: {} };
  } catch {
    return { levels: {} };
  }
}

function resetLevelState(clearHistory = true) {
  const colors = Object.keys(LEVELS[currentLevel].pairs);
  paths = {};
  colors.forEach((color) => {
    paths[color] = [];
  });
  if (clearHistory) moveHistory = [];
  moves = 0;
  elapsed = 0;
  active = null;
}

function paintBoard() {
  const occupancy = buildOccupancy();
  const connections = buildConnections();
  const level = LEVELS[currentLevel];

  [...board.children].forEach((cell) => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const key = cellKey(row, col);
    const endpointColor = endpointMap.get(key);
    const pathColor = occupancy.get(key);
    const color = pathColor || endpointColor;
    const pipe = cell.querySelector(".pipe");

    cell.className = "cell";
    if (col === level.size - 1) cell.classList.add("edge-right");
    if (row === level.size - 1) cell.classList.add("edge-bottom");
    pipe.className = "pipe";
    cell.style.setProperty("--path-color", color ? COLORS[color] : "transparent");
    if (pathColor) {
      cell.classList.add("path");
      (connections.get(key) || []).forEach((direction) => pipe.classList.add(`pipe-${direction}`));
    }
    if (endpointColor) cell.classList.add("endpoint");
    if (active && pathColor === active.color) cell.classList.add("active");
    cell.setAttribute("aria-label", color ? `${color} cell` : "empty cell");
  });

  const filled = getFilledCount();
  document.getElementById("fillInfo").textContent = `${filled}/${level.size * level.size}`;
}

function buildOccupancy() {
  const map = new Map();
  Object.entries(paths).forEach(([color, path]) => {
    path.forEach(([row, col]) => map.set(cellKey(row, col), color));
  });
  return map;
}

function buildConnections() {
  const map = new Map();
  Object.values(paths).forEach((path) => {
    path.forEach(([row, col], index) => {
      const directions = [];
      const previous = path[index - 1];
      const next = path[index + 1];
      if (previous) directions.push(directionTo([row, col], previous));
      if (next) directions.push(directionTo([row, col], next));
      map.set(cellKey(row, col), directions);
    });
  });
  return map;
}

function removeCellFromOtherPaths(row, col, activeColor) {
  const key = cellKey(row, col);
  Object.entries(paths).forEach(([color, path]) => {
    if (color === activeColor) return;
    const index = path.findIndex(([r, c]) => cellKey(r, c) === key);
    if (index >= 0) {
      paths[color] = path.slice(0, Math.max(1, index));
    }
  });
}

function clearColorFromOtherPaths(activeColor) {
  const activeCells = new Set(paths[activeColor].map(([row, col]) => cellKey(row, col)));
  Object.entries(paths).forEach(([color, path]) => {
    if (color === activeColor) return;
    paths[color] = path.filter(([row, col], index) => index === 0 || !activeCells.has(cellKey(row, col)));
  });
}

function isColorConnected(color) {
  const pair = LEVELS[currentLevel].pairs[color];
  const path = paths[color];
  if (!path || path.length < 2) return false;
  const start = path[0];
  const end = path[path.length - 1];
  return (
    (samePoint(start, pair[0]) && samePoint(end, pair[1])) ||
    (samePoint(start, pair[1]) && samePoint(end, pair[0]))
  );
}

function getFilledCount() {
  return buildOccupancy().size;
}

function isWon() {
  return document.getElementById("completeOverlay").classList.contains("show");
}

function pushHistory() {
  moveHistory.push({
    paths: clonePaths(paths),
    moves,
    elapsed
  });
  if (moveHistory.length > 60) moveHistory.shift();
}

function clonePaths(source) {
  return Object.fromEntries(
    Object.entries(source).map(([color, path]) => [color, path.map((point) => [...point])])
  );
}

function updateHud() {
  document.getElementById("moves").textContent = moves;
  document.getElementById("timer").textContent = formatTime(elapsed);
  paintBoard();
}

function updateMenuStats() {
  const completed = Object.values(progress.levels).filter((level) => level.completed);
  const bestTime = completed.length ? Math.min(...completed.map((level) => level.bestTime)) : null;
  const bestMoves = completed.length ? Math.min(...completed.map((level) => level.bestMoves)) : null;
  document.getElementById("completedCount").textContent = completed.length;
  document.getElementById("bestTime").textContent = bestTime ? formatTime(bestTime) : "--:--";
  document.getElementById("bestMoves").textContent = bestMoves || "--";
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
}

function applyTheme() {
  document.body.classList.toggle("light-mode", theme === "light");
  document.getElementById("themeToggle").textContent = theme === "light" ? "Tema: Light" : "Tema: Dark";
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

function startTimer() {
  stopTimer();
  timerId = setInterval(() => {
    elapsed += 1;
    document.getElementById("timer").textContent = formatTime(elapsed);
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function firstOpenLevel() {
  const index = LEVELS.findIndex((_, levelIndex) => !progress.levels[levelIndex]?.completed);
  return index >= 0 ? index : 0;
}

function getPoint(cell) {
  return {
    row: Number(cell.dataset.row),
    col: Number(cell.dataset.col)
  };
}

function cellKey(row, col) {
  return `${row},${col}`;
}

function samePoint(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

function isAdjacent(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) === 1;
}

function directionTo(from, to) {
  if (to[0] < from[0]) return "up";
  if (to[0] > from[0]) return "down";
  if (to[1] < from[1]) return "left";
  return "right";
}

function indexOfPoint(path, point) {
  return path.findIndex((cell) => samePoint(cell, point));
}

board.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".cell");
  if (!cell) return;
  event.preventDefault();
  startPath(cell, event.pointerId);
});

board.addEventListener("pointermove", (event) => {
  if (!active) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const cell = element?.closest(".cell");
  if (!cell || !board.contains(cell)) return;
  event.preventDefault();
  extendPath(cell);
});

board.addEventListener("pointerup", endPath);
board.addEventListener("pointercancel", endPath);
board.addEventListener("lostpointercapture", () => {
  if (active) endPath();
});
