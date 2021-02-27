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

export interface GlobalLeaderboardData {
  user_name: string;
  point: number;
}


export interface VisitorCount {
  count: number
}

export interface PointsAndRank {
  score: number,
  rank: number,
  total: number
}