import { IBoard } from '../../entity/Board/structures/interfaces';
import { IBoardModel } from '../../entity/Board/model/interfaces';

export interface IMovePieceUseCase {
  execute: (model: IBoard, fromCell: string, toCell: string) => void;
}
