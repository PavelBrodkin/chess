export interface IPositionInfo {
  player: string;
  piece: string;
}

export interface IBoard {
  positions: Record<string, IPositionInfo>;
}
