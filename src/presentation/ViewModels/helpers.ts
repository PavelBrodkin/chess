import { IPositionInfo } from '../../domain/entity/Board/structures/interfaces';
import { TPlacements } from '../../domain/entity/Player/sturcures/interfaces';
import {
  BACKGROUND_COLORS,
  BLACK_PLAYER_INITIAL_PIECE_PLACEMENT,
  MAX_CELLS_COUNT,
  POINT_LETTERS,
  WHITE_PLAYER_INITIAL_PIECE_PLACEMENT
} from './constans';

export const calculateCellsMatrix = (): Array<string[]> =>
  POINT_LETTERS.reduce((acc, _, i) => {
    const row: string[] = [];
    for (let k = 0; k < MAX_CELLS_COUNT; k++) {
      const cell = `${POINT_LETTERS[k]}${i + 1}`;
      row.push(cell);
    }
    acc.push(row);
    return acc;
  }, [] as Array<string[]>).reverse();

const getPiecePlacementsEmptyDictionary = () =>
  POINT_LETTERS.reduce((acc, letter) => {
    for (let i = 0; i < MAX_CELLS_COUNT; i++) {
      acc[letter + (i + 1)] = {
        player: '',
        piece: ''
      };
    }
    return acc;
  }, {} as Record<string, IPositionInfo>);

const getPiecePlacementsByPlayer = (
  playerInitialPlacements: TPlacements,
  color: string
): Record<string, IPositionInfo> =>
  Object.entries(playerInitialPlacements).reduce((acc, [piece, placements]) => {
    placements.forEach((place) => {
      acc[place] = {
        player: color,
        piece
      };
    });
    return acc;
  }, {} as Record<string, IPositionInfo>);

export const getPiecePlacementDictionary = () => {
  const otherPlacements = getPiecePlacementsEmptyDictionary();
  const whitePlacements = getPiecePlacementsByPlayer(
    WHITE_PLAYER_INITIAL_PIECE_PLACEMENT,
    'white'
  );
  const blackPlacements = getPiecePlacementsByPlayer(
    BLACK_PLAYER_INITIAL_PIECE_PLACEMENT,
    'black'
  );

  return {
    ...otherPlacements,
    ...whitePlacements,
    ...blackPlacements
  };
};

export const getCellsColorByRow = (isEvenRow: boolean): string[] => {
  const copyBackgrounds = [...BACKGROUND_COLORS];
  return isEvenRow ? copyBackgrounds : copyBackgrounds.reverse();
};
