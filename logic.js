  var playerArray = new Array();
  var currentCombo = new Array();

  var startGame = function (){
    let startButton = document.createElement('button');
    startButton.style.height = "20px";
    startButton.style.width = "75px";
    startButton.style.marginLeft = "50%";
    startButton.style.marginTop = "35%";
    document.body.appendChild(startButton);
    startButton.innerHTML = "Start Game";

    startButton.addEventListener('click', function(){

      document.body.removeChild(startButton);
      // startButton.style.display = "none";


      let container = document.createElement('div');

      container.style.height = "300px";
      container.style.width = "300px";
      container.style.position = "relative";
      container.style.left = "45%";

      document.body.appendChild(container);

      let firstSquare = document.createElement('div');
      let secondSquare = document.createElement('div');
      let thirdSquare = document.createElement('div');
      let fourthSquare = document.createElement('div');

      firstSquare.style.height = "150px";
      firstSquare.style.width = "150px";
      firstSquare.style.backgroundColor = "blue";

      firstSquare.style.position = "absolute";
      firstSquare.style.display = "inline-block";
      firstSquare.className = ('firstSquare');

      /*Event Listeners*/
      firstSquare.addEventListener('click', function(){

        playerArray.push("1");
        console.info(playerArray);

        //CSS injection
        // var newStyle = function () {
        //    const headID = document.getElementsByTagName('head')[0];
        //    const newScript = document.createElement('link');
        //    newScript.href = 'newStyle.css';
        //    newScript.type = 'text/css';
        //    newScript.rel = 'stylesheet';
        //    headID.appendChild(newScript);
        // }();


      });

      firstSquare.addEventListener('mouseover', function(){
        console.warn("I'm hovering on blue square");

        firstSquare.style.width = "350px";
        firstSquare.style.transition = "width 2s";

      });

      firstSquare.addEventListener('mouseout', function(){
        console.info("I'm leaving the blue square");

        firstSquare.style.width = "150px";
        firstSquare.style.transition = "width 2s";
      });

      /* Second Square - color GREEN */
      secondSquare.style.height = "150px";
      secondSquare.style.width = "150px";
      secondSquare.style.backgroundColor = "red";
      // secondSquare.style.left = "37%";
      // secondSquare.style.top = "10%";
      secondSquare.style.position = "absolute";
      secondSquare.style.display = "inline-block";
      // secondSquare.style.left = "150px";
      secondSquare.style.top = "150px";
      secondSquare.className = 'secondSquare';
      secondSquare.addEventListener('click', function(){

        playerArray.push("3");
        console.info(playerArray);

      });

      secondSquare.addEventListener('mouseover', function(){
        console.warn("I'm hovering on red square");

        secondSquare.style.width = "350px";
        secondSquare.style.transition = "width 2s";

      });

      secondSquare.addEventListener('mouseout', function(){
        console.info("I'm leaving the red square");

        secondSquare.style.width = "150px";
        secondSquare.style.transition = "width 2s";
      })


      /* Third Square - color red */
      thirdSquare.style.height = "150px";
      thirdSquare.style.width = "150px";
      thirdSquare.style.backgroundColor = "green";
      // thirdSquare.style.left = "25%";
      // thirdSquare.style.top = "27%";
      thirdSquare.style.position = "absolute";
      thirdSquare.style.display = "inline-block";
      thirdSquare.style.left = "150px";
      thirdSquare.className = "thirdSquare";
      thirdSquare.addEventListener('click', function(){

        playerArray.push("2");
        console.info(playerArray);

      })

      thirdSquare.addEventListener('mouseover', function(){
        console.warn("I'm hovering on green square");

        thirdSquare.style.width = "350px";
        thirdSquare.style.transition = "width 2s";

      });

      thirdSquare.addEventListener('mouseout', function(){
        console.info("I'm leaving the green square");

        thirdSquare.style.width = "150px";
        thirdSquare.style.transition = "width 2s";
      })

      fourthSquare.style.height = "150px";
      fourthSquare.style.width = "150px";
      fourthSquare.style.backgroundColor = "yellow";
      // fourthSquare.style.left = "37%";
      // fourthSquare.style.top = "27%";
      fourthSquare.style.display = "inline-block";
      fourthSquare.style.position = "absolute";
      fourthSquare.style.left = "150px";
      fourthSquare.style.top = "150px";
      fourthSquare.className = ('fourthSquare');
      fourthSquare.addEventListener('click', function(){

        playerArray.push("4");
        console.info(playerArray);

      });

      fourthSquare.addEventListener('mouseover', function(){
        console.warn("I'm hovering on yellow square");

        fourthSquare.style.width = "350px";
        fourthSquare.style.transition = "width 2s";

      });

      fourthSquare.addEventListener('mouseout', function(){
        console.info("I'm leaving the yellow square");

        fourthSquare.style.width = "150px";
        fourthSquare.style.transition = "width 2s";
      });

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
