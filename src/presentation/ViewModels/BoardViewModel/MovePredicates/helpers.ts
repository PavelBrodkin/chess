import { IPositionInfo } from '../../../../domain/entity/Board/structures/interfaces';
import { EPlayerName } from '../../../ui/modules/Board';

// Todo comments

export const isCollide = (
  availablePointers: string[],
  positions: Record<string, IPositionInfo>,
  player: EPlayerName
) => {
  if (!availablePointers.length) {
    return [];
  }
  const firstAvailablePointer = availablePointers[0];

  if (
    positions[firstAvailablePointer].piece &&
    positions[firstAvailablePointer].player === player
  ) {
    return [];
  }

  const pieceCollision = availablePointers.find(
    (pointer) => positions[pointer].player
  );

  if (pieceCollision) {
    const firstPieceCollisionIndex = availablePointers.indexOf(pieceCollision);
    return availablePointers.slice(0, firstPieceCollisionIndex + 1);
  }

  return availablePointers;
};
