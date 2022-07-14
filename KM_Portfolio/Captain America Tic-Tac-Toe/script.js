



window.onload = function(){



    let buttonX = document.querySelector('#X');
    buttonX.addEventListener('click', turnX);
    
    
    
    
    
    function turnX(){
        document.querySelector('table').classList.remove('hide');
            document.querySelector("#startGameBoard").style.display = "none";
    
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector('p').classList.remove("hide");
        const gameSquares = document.querySelectorAll('td');
        for(let i = 0; i < gameSquares.length; i++){
        gameSquares[i].addEventListener('click', ()=>{
       gameSquares[i].textContent = buttonX.id;
                
    
    
    function matches(){
    const gameSquares = document.querySelectorAll('td');
    let zero = gameSquares[0].textContent;
    let  one = gameSquares[1].textContent;
    let two = gameSquares[2].textContent;
    let three = gameSquares[3].textContent;
    let four = gameSquares[4].textContent;
    let five = gameSquares[5].textContent;
    let six = gameSquares[6].textContent;
    let seven = gameSquares[7].textContent;
    let eight = gameSquares[8].textContent;
    
    
    if(zero === "X" && one  === "X" && two === "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(zero === "O" && one  === "O" && two === "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    else if(three == "X" && four  == "X" && five == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }
    else if(three == "O" && four  == "O" && five == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    
    else if(six == "X" && seven  == "X" && eight == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    } else if(six == "O" && seven  == "O" && eight == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    else if(zero == "X" &&  four == "X" &&  eight == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    } else if(zero == "O" &&  four == "O" &&  eight == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }  
    
     else if(two == "X" &&   four == "X" && six == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(two == "O" &&   four == "O" && six == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    
    else if(zero == "X" &&   three == "X" && six == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(zero == "O" &&   three == "O" && six == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    
    else if(one == "X" &&   four == "X" && seven == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    
    }else if(one == "O" &&   four == "O" && seven == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    
    
    else if(two == "X" &&   five == "X" &&   eight == "X"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(two == "O" &&   five == "O" &&   eight == "O"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }

    } 
    
    
    
    
    
    
                let gameBoard = document.querySelector("#startGameBoard");
                let toggleB = gameBoard.classList.toggle("gameButtons"); // toggle between "O" and "X"
                    
            if(gameSquares[i].textContent !== "" && toggleB == 1){
                    gameSquares[i].textContent = "X";
                document.querySelector('h2').textContent = "Player 1 Turn: X"
    
                    console.log(toggleB);
    
                    }else{
                        gameSquares[i].textContent = "O";
                    document.querySelector('h2').textContent = "Player 2 Turn: O"
    }
                    matches();
    });
                
    
    
    
    }
    }
    
    
    
    let buttonO = document.querySelector('#O');
    buttonO.addEventListener('click', turnO);
    
    function turnO(){
        
        document.querySelector('table').classList.remove('hide');
        document.querySelector("#startGameBoard").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector('p').classList.remove('hide');
    
        const gameSquares = document.querySelectorAll('td');
        for(let i = 0; i < gameSquares.length; i++){
                gameSquares[i].addEventListener('click', ()=>{
                gameSquares[i].textContent = buttonO.id;
    
    gameSquares[i].addEventListener('click', matchesO);
    
    function matchesO(){
    let zero = gameSquares[0].textContent;
    let  one = gameSquares[1].textContent;
    let two = gameSquares[2].textContent;
    let three = gameSquares[3].textContent;
    let four = gameSquares[4].textContent;
    let five = gameSquares[5].textContent;
    let six = gameSquares[6].textContent;
    let seven = gameSquares[7].textContent;
    let eight = gameSquares[8].textContent;

    if(zero === "O" && one  === "O" && two === "O"){
    
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if (zero === "X" && one  === "X" && two === "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    } 
    else if(three == "O" && four  == "O" && five == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(three == "X" && four  == "X" && five == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    else if(six == "O" && seven  == "O" && eight == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(six == "X" && seven  == "X" && eight == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    else if(zero == "O" &&  four == "O" &&  eight == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(zero == "X" &&  four == "X" &&  eight == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    } 
    if(two == "O" &&   four == "O" && six == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else  if(two == "X" &&   four == "X" && six == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    if(zero == "O" &&   three == "O" && six == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(zero == "X" &&   three == "X" && six == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    if(one == "O" &&   four == "O" && seven == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(one == "X" &&   four == "X" && seven == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    if(two == "O" &&   five == "O" &&   eight == "O"){
        document.querySelector('p').innerText = 'Player 1 Wins!';
    }else if(two == "X" &&   five == "X" &&   eight == "X"){
        document.querySelector('p').innerText = 'Player 2 Wins!';
    }
    
    }
    
    
            let gameBoard = document.querySelector("#startGameBoard");
            let toggleB = gameBoard.classList.toggle("gameButtons"); // toggle between "O" and "X"
    
                if(gameSquares[i].textContent !== "" && toggleB == 1){
                gameSquares[i].textContent = "O";
                document.querySelector('h2').textContent = "Player 1 Turn: O"
    
                }else{
                    gameSquares[i].textContent = "X";
                document.querySelector('h2').textContent = "Player 2 Turn: X"
    
                }
    
                matchesO();
                });
    
        
        }
    }
    
    
    }
    
    
    
    
    
    
    
    
    
    