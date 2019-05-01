// create a variable called mousePosition and set the parameters x and y to equal 0
const mousePosition = {
  x: 0,
  y: 0
};

let drawId;
const getRandomNumber = function(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener("mousemove", function(e) {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

function draw() {
  return setInterval(function() {
    // setInternval to call the function draw above.
    const container = document.getElementById("wrap");
    const color = `background:rgb(${getRandomNumber(0, 255)},${getRandomNumber(
      0,
      255
    )}, ${getRandomNumber(0, 255)});`;
    const ballSize = getRandomNumber(10, 30);
    const size = `height:${ballSize}px; width:${ballSize}px;`;
    const left = `left:${getRandomNumber(
      mousePosition.x - ballSize,
      mousePosition.x
    )}px;`;
    const top = `top:${getRandomNumber(
      mousePosition.y - ballSize,
      mousePosition.y
    )}px;`;
    const style = `${left}${top}${color}${size}`;

    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style = style;

    ball.addEventListener("animationend", function(e) {
      // Added an eventlistener to remove the animationed.
      e.target.remove();
    });

    container.appendChild(ball);
  }, 50);
}

window.addEventListener("mouseover", draw);
window.addEventListener("mouseout", clearInterval);

 

          
