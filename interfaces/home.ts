interface IndividualLeaderboardData {
    id: number,
    score: number,
    playedAt: string
}

export interface LeaderboardData {
  data: Array<IndividualLeaderboardData>
}
