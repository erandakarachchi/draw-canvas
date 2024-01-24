const init = () => {
  const canvas = document.getElementById("product-canvas");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;

  // adding draw functionality
  const originalPosition = { x: 0, y: 0 };

  const drawConfig = {
    isDrawing: false,
    isErasing: false,
    strokeColor: "red",
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawStroke = (event) => {
    const { isDrawing } = drawConfig;
    if (event.buttons !== 1 || !isDrawing) return;

    if (isDrawing) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "red";
      ctx.moveTo(originalPosition.x, originalPosition.y);
      setPosition(event);
      ctx.lineTo(originalPosition.x, originalPosition.y);
      ctx.stroke();
    }
  };

  const draw = (event) => {
    if (event.buttons !== 1 || !isDrawing) return;

    if (isDrawing) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "red";
      ctx.moveTo(originalPosition.x, originalPosition.y);
      setPosition(event);
      ctx.lineTo(originalPosition.x, originalPosition.y);
      ctx.stroke();
    }
  };

  const setPosition = (event) => {
    originalPosition.x = event.clientX - canvas.offsetLeft;
    originalPosition.y = event.clientY - canvas.offsetTop;
  };

  const eventHandler = (event) => {
    if (drawConfig.isDrawing) {
      drawStroke(event);
    }
  };

  // button events
  const btnClear = document.getElementById("btn-clear");
  btnClear.addEventListener("click", clearCanvas);

  const btnDraw = document.getElementById("btn-draw");
  btnDraw.addEventListener("click", () => {
    drawConfig.isDrawing = true;
  });

  // canvas events
  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    setPosition(event);
  });

  canvas.addEventListener("mousemove", (event) => {
    eventHandler(event);
  });

  canvas.addEventListener("mouseup", (event) => {
    isDrawing = false;
  });

  canvas.addEventListener("mouseleave", (event) => {
    isDrawing = false;
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  init();
});
