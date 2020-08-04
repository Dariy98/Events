import Maze from './maze.js' ;

window.addEventListener('load', () => {
    let x = 1;
    let y = 1;
    let newX = 1;
    let newY = 1;

    const maze = new Maze(gamefield);
    maze.init({width: 25, height: 35, cellSize: 20});
    maze.addEventListener('ready', () => {
        maze.setCell(x, y, Maze.CELLS.player);
        maze.setCell(21, 21, Maze.CELLS.exit);
    });

    document.addEventListener('keydown', (e) => {
        maze.gamefield.setCellClass(x, y, Maze.CELLS.empty);

        if(e.key === 'ArrowLeft') {
            newX = newX - 1;
        }

        if(e.key === 'ArrowRight') {
            newX = newX + 1;
        }

        if(e.key === 'ArrowDown') {
            newY = newY +1;
            e.preventDefault()
        }

        if(e.key === 'ArrowUp') {
            newY = newY - 1;
        }

        if(maze.getCell(newX, newY) === 'permanent') {
            newX = x;
            newY = y;
        }

        x = newX;
        y = newY;
        
        if(maze.getCell(newX, newY) === 'exit') {
            alert("Game over.");
        }
        
        maze.setCell(newX, newY, Maze.CELLS.player);
    });
})