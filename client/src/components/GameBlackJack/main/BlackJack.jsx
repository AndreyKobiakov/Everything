import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import Modal from '../modal/Modal';
import './css/BlackJack.css';
import img from './css/cardTable.png';

export default function BlackJack() {
  const [modalActive, setModalActive] = useState(false);
  const [resultGame, setResultGame] = useState('You win!');
  const [deckNumber, setDeckNumber] = useState('');
  const [deck, setDeck] = useState([]);
  const [compDeck, setCompDeck] = useState([]);
  const [card, setCard] = useState(2);
  const [cardCom, setCardCom] = useState(2);
  const setTheDeck = 'AS,6S,7S,8S,9S,0S,JS,QS,KS,AD,6D,7D,8D,9D,0D,JD,QD,KD,AC,6C,7C,8C,9C,0C,JC,QC,KC,AH,6H,7H,8H,9H,0H,JH,QH,KH';
  const [userCounter, setUserCounter] = useState(0);
  const [comCounter, setComCounter] = useState(0);

  const dictionary = {
    ACE: '11', KING: '4', QUEEN: '3', JACK: '2', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  };
  useEffect(() => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((res) => res.json())
      .then((data) => {
        setDeckNumber(data.deck_id);
        fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/shuffle/?cards=${setTheDeck}`);
      });
  }, []);
  const addCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckNumber}/draw/?count=${card}`)
      .then((res) => res.json())
      .then((data) => {
        setDeck([...deck, ...(data.cards ? data.cards.map((el) => el) : [])]);
        setCard(1);
      });
  };

  useEffect(() => {
    setUserCounter(deck.reduce((acc, el) => acc + (dictionary[el.value]) * 1, 0));
  }, [deck]);

  useEffect(() => {
    setComCounter(compDeck.reduce((acc, el) => acc + (dictionary[el.value]) * 1, 0));
  }, [compDeck]);

  const enough = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckNumber}/draw/?count=${cardCom}`)
      .then((res) => res.json())
      .then((data) => {
        setCompDeck([...compDeck, ...(data.cards ? data.cards.map((el) => el) : [])]);
        setCardCom(1);
      });
  };
  useEffect(() => {
    if (comCounter < 16) {
      fetch(`https://deckofcardsapi.com/api/deck/${deckNumber}/draw/?count=${cardCom}`)
        .then((res) => res.json())
        .then((data) => {
          setCompDeck([...compDeck, ...(data.cards.map((el) => el))]);
          setCardCom(1);
        });
    }
  }, [comCounter]);
  useEffect(() => {
    if (userCounter > 21 || (userCounter < comCounter && comCounter <= 21)
    || (userCounter === comCounter && comCounter >= 16)) {
      setTimeout(
        () => {
          setModalActive(true);
          setResultGame('You lose(');
        },
        1000,
      );
    }
    if ((userCounter > comCounter && userCounter < 21 && comCounter >= 16)
    || comCounter > 21 || userCounter === 21) {
      setTimeout(() => setModalActive(true), 1000);
    }
  }, [userCounter, comCounter]);
  return (
    <Layout
      background={`url(${img})`}
    >
      <Modal active={modalActive} setActive={setModalActive} resultGame={resultGame} />
      <div className="Father">
        <div className="ComDeck">
          {compDeck && compDeck?.map((el) => (
            <img
              className="cardImg"
              src={el.image}
              key={el.code}
              alt=""
            />
          ))}
        </div>
        <div className="scoreCom">
          <h3 className="h3texte">
            {`Casino:  ${comCounter}`}
          </h3>
        </div>
        <div className="button">
          <button
            onClick={addCard}
            type="button"
            className="btn btn-outline-info btnGame"
          >
            Game

          </button>
          <button
            onClick={enough}
            type="button"
            className="btn btn-outline-danger btnGame"
          >
            Enough

          </button>
        </div>
        <div className="YouDeck">
          {deck && deck?.map((el) => (
            <img
              className="cardImg"
              src={el.image}
              key={el.code}
              alt=""
            />
          ))}
        </div>
        <div className="YouScore">
          <h3 className="h3texte">
            {` You score:  ${userCounter}`}
          </h3>
        </div>
      </div>
    </Layout>
  );
}
