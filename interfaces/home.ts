export interface IndividualLeaderboardData {
    name: string,
    point: number,
}

export interface LeaderboardData {
  data: Array<IndividualLeaderboardData>
}
