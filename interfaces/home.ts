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

export interface VisitorCount {
  count: number
}

export interface PointsAndRank {
  score: number,
  rank: number
}