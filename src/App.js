import { useEffect, useState } from "react";

const boardWidth = 8;
const colors = ["blue", "purple", "red", "yellow", "orange", "green"];

const App = () => {
  const [currentColorArray, setCurrentColorArray] = useState([]);

  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < boardWidth * boardWidth; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomColorArray.push(randomColor);
    }
    setCurrentColorArray(randomColorArray);
  };

  useEffect(() => {
    createBoard();
  }, []);

  console.log(currentColorArray);

  return (
    <div className="app">
      <div className="game">
        {currentColorArray.map((color, index) => (
          <img key={index} style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
};

export default App;
