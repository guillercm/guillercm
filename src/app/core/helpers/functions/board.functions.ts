import { PlayerBoardPiece } from "@laCarreraPorLaDona/core/services/sockets/interfaces/player-board piece.interface";
import { GamePlayer } from "../../interfaces/game-player.interface";

export const calculatePlayersBoardPieces = (boardPieceSize: number, gamePlayers: GamePlayer[]) => {
  const playerBoardPieces: PlayerBoardPiece[] = [];
  const columns = 5;
  const playerBoardPieceSize = boardPieceSize / 3.5;

  gamePlayers.forEach((gamePlayer: GamePlayer) => {
    const position = gamePlayer.board.position;
    const { turn } = gamePlayer;
    const row = Math.floor(position / columns);
    const column = position % columns;
    const isRowEven = row % 2 === 0;
    const adjustedColumn = isRowEven ? column : (columns - 1 - column);
    let top = row * boardPieceSize;
    let left = adjustedColumn * boardPieceSize;

    const gridSize = 3;
    const x = turn % gridSize;
    const y = Math.floor(turn / gridSize);

    const finalPosition = {
      top: top + (playerBoardPieceSize * y) + (playerBoardPieceSize / 5),
      left: left + (playerBoardPieceSize * x) + (playerBoardPieceSize / 5)
    };

    playerBoardPieces.push({
      color: gamePlayer.color,
      size: playerBoardPieceSize,
      position: finalPosition
    })
  })
  return playerBoardPieces;
}
