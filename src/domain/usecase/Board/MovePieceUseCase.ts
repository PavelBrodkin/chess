import { injectable } from 'tsyringe';
import { IBoard } from '../../entity/Board/structures/interfaces';
import { BoardModel } from '../../entity/Board/model/BoardModel';
import { IMovePieceUseCase } from './interface';

@injectable()
export class MovePieceUseCase implements IMovePieceUseCase {
  /**
   * Не обязательно возвращать из use case модель board для дальнейшего слияния,
   * так как передается observable структура, которая обновится самостоятельно внутри use case
   * */

  execute(structure: IBoard, fromCell: string, toCell: string): void {
    const model = new BoardModel(structure);
    model.updatePosition(fromCell, toCell);
  }
}
