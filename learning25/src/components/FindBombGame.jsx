import React, { useMemo, useState } from 'react'

const FindBombGame = () => {
var gridSize= 6
const totalTiles = gridSize*gridSize;
const [clickedTiles,setclickedTiles]=useState([])
const [gameover,setgameover]=useState(false)
const [msg,setmsg] = useState("Find bomb")
const [resetKey, setResetKey] = useState(0);

const clickHandler = (index)=>{
    if(gameover) return
// alert(index)
    setclickedTiles([...clickedTiles,index])
    if(index==bombPosition){
        setgameover(true)
        setmsg("Game over ")
        // alert("game over")
    }
}
console.log(clickedTiles)

// const bombPosition = Math.floor(Math.random()*totalTiles)
const bombPosition = useMemo(() => {
    return Math.floor(Math.random() * totalTiles);
}, [resetKey]);

console.log(bombPosition)

const resetGame = () => {
    setclickedTiles([]);
    setgameover(false);
    setmsg("Find bomb");
    setResetKey(prev => prev + 1); //  triggers useMemo
};


  return (
    <div style={{textAlign:"center"}}> 
      <h1>Game</h1>
    <h2>{msg}</h2>

        <div style={{
            display:"grid",
            gridTemplateColumns: `repeat(${gridSize},50px)`,
            gap:"10px",
            justifyContent:"center"
        }}>
           {
            Array.from({length:totalTiles}).map((_,index)=>{
                return(
                    // each box inside grid
                    <div style={{
                        width:"50px",
                        height:"50px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        border:"1px solid black",
                        backgroundColor:  clickedTiles.includes(index) ? "grey" : "lightpink" ,
                        cursor:"pointer"
                    }}  onClick={()=>clickHandler(index)}>


                              {gameover && index == bombPosition ? "💣" : index}
                    </div>
                )
            })
           }
        </div>
        {gameover &&  <h1>SCORE = {clickedTiles.length-1}</h1> }

    {gameover && (
     <button
        onClick={resetGame}
        style={{ marginTop: "20px", padding: "10px 20px" }}
    >
        Restart Game
    </button> )
    }


    </div>
  )
}

export default FindBombGame
// step 1 grid and print ui of boxes
// step 2 clickhandler function
// step 3 clicked tiles color change by  storing clicked tiles  
// step 4 generate bomb at a position and print it on cpnsole , but use useMemo for storing same bomb ata same position over the game slot 
// step 5 check if bomb tile is clicked is yes than game over and  messege printing 
// sep 6 score