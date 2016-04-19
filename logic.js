let playerArray = new Array();

var startGame = function (){
  let startButton = document.createElement('button');
  startButton.style.height = "20px";
  startButton.style.width = "75px";
  startButton.style.marginLeft = "50%";
  startButton.style.marginTop = "35%";
  document.body.appendChild(startButton);
  startButton.innerHTML = "Start Game"

  startButton.addEventListener('click', function(){

    startButton.style.display = "none";

    let container = document.createElement('div');

    container.style.height = "300px";
    container.style.width = "300px";
    container.style.position = "relative";

    document.body.appendChild(container);

    let firstSquare = document.createElement('div');
    let secondSquare = document.createElement('div');
    let thirdSquare = document.createElement('div');
    let fourthSquare = document.createElement('div');

    firstSquare.style.height = "150px";
    firstSquare.style.width = "150px";
    firstSquare.style.backgroundColor = "blue";
    firstSquare.style.left = "25%";
    firstSquare.style.top = "10%";
    firstSquare.style.position = "absolute";
    firstSquare.addEventListener('click', function(){

      playerArray.push("1");
      console.info(playerArray);

    })

    secondSquare.style.height = "150px";
    secondSquare.style.height = "150px";
    secondSquare.style.width = "150px";
    secondSquare.style.backgroundColor = "red";
    secondSquare.style.left = "37%";
    secondSquare.style.top = "10%";
    secondSquare.style.position = "absolute";
    secondSquare.addEventListener('click', function(){

      playerArray.push("2");
      console.info(playerArray);

    })

    thirdSquare.style.height = "150px";
    thirdSquare.style.height = "150px";
    thirdSquare.style.width = "150px";
    thirdSquare.style.backgroundColor = "green";
    thirdSquare.style.left = "25%";
    thirdSquare.style.top = "27%";
    thirdSquare.style.position = "absolute";
    thirdSquare.addEventListener('click', function(){

      playerArray.push("3");
      console.info(playerArray);

    })

    fourthSquare.style.height = "150px";
    fourthSquare.style.height = "150px";
    fourthSquare.style.width = "150px";
    fourthSquare.style.backgroundColor = "yellow";
    fourthSquare.style.left = "37%";
    fourthSquare.style.top = "27%";
    fourthSquare.style.position = "absolute";
    fourthSquare.addEventListener('click', function(){
      
      playerArray.push("4");
      console.info(playerArray);

    })

    container.appendChild(firstSquare);
    container.appendChild(secondSquare);
    container.appendChild(thirdSquare);
    container.appendChild(fourthSquare);

    document.body.appendChild(firstSquare);
    document.body.appendChild(secondSquare);
    document.body.appendChild(thirdSquare);
    document.body.appendChild(fourthSquare);

  })

}
