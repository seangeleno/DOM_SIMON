  var playerArray = new Array();
  var currentCombo = new Array();

  var startGame = function (){
    let startButton = document.createElement('button');
    startButton.style.height = "20px";
    startButton.style.width = "75px";
    startButton.style.marginLeft = "50%";
    startButton.style.marginTop = "35%";
    document.body.appendChild(startButton);
    startButton.innerHTML = "Start Game"

    startButton.addEventListener('click', function(){

      document.body.removeChild(startButton);
      // startButton.style.display = "none";

      function newStyle () {
         var headID = document.getElementsByTagName('head')[0];
         var newScript = document.createElement('style');
         newScript.href = './newStyle.css';
         newScript.type = 'text/css';
         newScript.rel = 'stylesheet';
         headID.appendChild(newScript);
      }();

      let container = document.createElement('div');

      container.style.height = "300px";
      container.style.width = "300px";
      container.style.position = "relative";
      container.style.left = "45%";
      container.style.transform = "rotate (360deg)";
      container.style.transition = "all 2s";

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
      firstSquare.style.display = "inline-block";


      firstSquare.addEventListener('click', function(){

        playerArray.push("4");
        console.info(playerArray);

      })

      secondSquare.style.height = "150px";
      secondSquare.style.width = "150px";
      secondSquare.style.backgroundColor = "red";
      // secondSquare.style.left = "37%";
      // secondSquare.style.top = "10%";
      secondSquare.style.position = "absolute";
      secondSquare.style.display = "inline-block";
      // secondSquare.style.left = "150px";
      secondSquare.style.top = "150px";
      secondSquare.addEventListener('click', function(){

        playerArray.push("3");
        console.info(playerArray);

      })

      thirdSquare.style.height = "150px";
      thirdSquare.style.width = "150px";
      thirdSquare.style.backgroundColor = "green";
      // thirdSquare.style.left = "25%";
      // thirdSquare.style.top = "27%";
      thirdSquare.style.position = "absolute";
      thirdSquare.style.display = "inline-block";
      thirdSquare.style.left = "150px";
      thirdSquare.addEventListener('click', function(){

        playerArray.push("2");
        console.info(playerArray);

      })

      fourthSquare.style.height = "150px";
      fourthSquare.style.width = "150px";
      fourthSquare.style.backgroundColor = "yellow";
      // fourthSquare.style.left = "37%";
      // fourthSquare.style.top = "27%";
      fourthSquare.style.display = "inline-block";
      fourthSquare.style.position = "absolute";
      firstSquare.style.left = "150px";
      firstSquare.style.top = "150px";
      fourthSquare.addEventListener('click', function(){

        playerArray.push("1");
        console.info(playerArray);

      })

      container.appendChild(firstSquare);
      container.appendChild(secondSquare);
      container.appendChild(thirdSquare);
      container.appendChild(fourthSquare);

    })

  }

  //randomizer function
  var randomizer = () => {
    return Math.floor(Math.random()*4);
  }

  var callRandom = function(){
    for ( let i = 0; i < playerArray.length; i++){

    setTimeout(() => {
      currentCombo.push(randomizer());
      console.info('The random array is ' + currentCombo);
      }, 1000 * i);
    }
  };
