import { useEffect, useState } from "react";
import Cell from "./cell";



const matrix = [['', '',''], ['','',''], ['', '','']];
const characters = 'ABC';
let guessedLeter = characters.charAt(Math.floor(Math.random() * 3));

const randomizeMatrix = function (arr) {
     return (
          arr.map((row) => { return row.map((item) => { return item = characters.charAt(Math.floor(Math.random() * 3)) }) }))
};

export default function Board() {
     const [board, setBoard] = useState(randomizeMatrix(matrix));
     const [guessLeter, setguessLeter]= useState('')
     const [isGameStarting, setGameStarting] = useState(false);
     const [showLeters, setShowLeters] = useState(false)
     const [showAllCell, setShowAll] = useState(false)
     const [numberOfLeters, setNumberOfLeters] = useState(false)
     const[gameResult, setGameResult] = useState('')

     let newArr = board.flat(3);
     let currentMatrix = newArr.filter(item => item === guessedLeter).length;
     

     const checkStartGame = () => {
          if(!isGameStarting)
          startGame()
     }

     const startGame = () => {
          setGameStarting(true);
          setShowLeters(true)
          setShowAll(true)
          setguessLeter(guessedLeter);
          setNumberOfLeters(currentMatrix)
          
          setTimeout(() => {
               setShowLeters(false)
               setShowAll(false)
          }, 5000)
     }

     const handleLeterClick = (leter) => {
          if (leter !== guessLeter) {
               return showAll(leter);
          } else {
          return changeClass()
          }
     }

     const showAll = (leter) => {
          setShowAll(true)
          setGameResult('Oooops,you lost :(')
          return setShowLeters(leter !== guessLeter)
     }

     const changeClass = () => {
          setShowLeters(true)
          setNumberOfLeters(numberOfLeters - 1);
          setGameResult('Yeah, right choice :)')
          return true
     }

     useEffect(() => {
     if (numberOfLeters === 0) {
          setGameResult('Yeah, you did it!)')
          setShowAll(true)
     }
     },[numberOfLeters])
     
     let index = 0;
     return (
          <div className="game" key={'board'}>
               <span className="title">Guess letter {guessLeter}</span>
               <div className="game_wrapper">
               <div className="wrapper_board">
               {board.map((row) =>
                    <div key={'row' + index}>{row.map((leter) => {
                         return <Cell
                              currentLeter={leter}
                              key={index += 1}
                              showLeters={showLeters}
                              onClick={handleLeterClick}
                              showAll={showAllCell}
                         />
                    })}</div>)}
                    </div>
                    <div className="result">
                         <span className="game_result">{gameResult}</span>
                    </div>
                    </div>

               <button className='startBtn' key={'startBtn'}
                    onClick={()=> checkStartGame()}>START GAME</button>
          </div>
     );
} 



     
