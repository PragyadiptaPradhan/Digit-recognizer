import React, { useRef, useEffect } from "react";

const CANVAS_SIZE = 280; // 10x scale of 28x28

function Canvas({ onPredict }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

  let drawing = false;

  const startDrawing = (e) => {
    drawing = true;
    draw(e);
  };

  const endDrawing = () => {
    drawing = false;
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.beginPath();
  };

  const handlePredict = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      onPredict(blob);
    }, 'image/png');
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "2px solid #333", touchAction: "none" }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />
      <div style={{ marginTop: 10 }}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handlePredict}>Predict</button>
        <br />
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={clearCanvas}>Clear</button>
      </div>
    </div>
  );
}

export default Canvas;
