import { useRef, useEffect } from 'react';
import Paper from 'paper';

interface IPaperMouseEvent extends MouseEvent {
    point: paper.Point;
}

const draw1 = () => {
    const myPath = new Paper.Path();
  
    Paper.view.onMouseDown = () => {
        myPath.strokeColor = {
            hue: Math.random() * 360,
            saturation: 1,
            brightness: 1
        }
      myPath.strokeWidth = 3;
    };
  
    Paper.view.onMouseDrag = (event: IPaperMouseEvent) => {
      myPath.add(event.point);
    };
  };

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
  
    useEffect(() => {
      const canvas = canvasRef.current;
      Paper.setup(canvas!);
      draw1();
    }, []);

    return <canvas 
        ref={canvasRef} 
        id="canvas" 
        resize="true"
    />
}