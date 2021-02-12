export interface IndividualLeaderboardData {
    id: number,
    score: number,
    user: {
      name: string
    }
}

export interface LeaderboardData {
  data: Array<IndividualLeaderboardData>
}
