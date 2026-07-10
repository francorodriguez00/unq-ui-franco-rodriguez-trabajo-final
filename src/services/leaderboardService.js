const STORAGE_KEY = "leaderboard";

export function getLeaderboard() {
    const leaderboard = localStorage.getItem(STORAGE_KEY);
    return leaderboard ? JSON.parse(leaderboard) : [];
}

export function saveScore(score) {
    const leaderboard = getLeaderboard();
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a);
    const topTen = leaderboard.slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topTen));
}