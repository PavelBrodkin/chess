import { injectable } from 'tsyringe';
import { IBoard } from '../../entity/Board/structures/interfaces';
import { BoardModel } from '../../entity/Board/model/BoardModel';
import { IMovePieceUseCase } from './interface';
import type { IBoardModel } from '../../entity/Board/model/interfaces';

@injectable()
export class MovePieceUseCase implements IMovePieceUseCase {
  execute(structure: IBoard, fromCell: string, toCell: string): IBoardModel {
    const model = new BoardModel(structure);
    const piece = model.item.positions[fromCell].piece;

    const isNextPositionBusy = model.item.positions[toCell].piece;

    if (!piece || isNextPositionBusy) {
      return model;
    }

    model.updatePosition(fromCell, toCell);
    return model;
  }
}
