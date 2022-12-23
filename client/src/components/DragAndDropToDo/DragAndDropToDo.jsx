import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitToDo } from '../../redux/actions/toDoActions';
import './DragAndDropToDo.css';

export default function DragAndDropToDo() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-shadow
  const toDo = useSelector((toDo) => toDo.toDo.toDoS);
  const [toDoList, setToDoList] = useState(toDo);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [input, setInput] = useState('');

  const inputHandler = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const submitHandler = (e) => {
    dispatch(submitToDo(e, input));
    setInput('');
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };
  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'item');
    e.target.style.boxShadow = '0 5px 5px gray';
  };
  const dragStartHandler = (e, board, card) => {
    setSelectedBoard(board);
    setSelectedCard(card);
  };
  const dropCardHandler = (e, board) => {
    board.items.push(selectedCard);
    const currentIndex = selectedBoard.items.indexOf(selectedCard);
    selectedBoard.items.splice(currentIndex, 1);
    setToDoList(toDoList.map((el) => {
      if (el.id === board.id) {
        return board;
      }
      if (el.id === selectedBoard.id) {
        return selectedBoard;
      }
      return el;
    }));
    e.target.style.boxShadow = 'none';
  };
  const dropHandler = (e, board, card) => {
    e.preventDefault();
    const currentIndex = selectedBoard.items.indexOf(selectedCard);
    selectedBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(card);
    board.items.splice(dropIndex + 1, 0, selectedCard);
    setToDoList(toDoList.map((el) => {
      if (el.id === board.id) {
        return board;
      }
      if (el.id === selectedBoard.id) {
        return selectedBoard;
      }
      return el;
    }));
    e.target.style.boxShadow = 'none';
  };
  return (
    <div className="cardHome">
      {toDo ? toDo.map((board) => (
        <div key={board.id} className="card">
          <div
            className="card__title"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            {board.title}
          </div>
          {board.items.map((card) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, card)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, card)}
              draggable
              className="item"
              key={card.id}
            >
              {card.text}
            </div>
          ))}
        </div>
      ))
        : null}
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={input} name="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
