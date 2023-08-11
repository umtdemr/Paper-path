import { useRef, useEffect } from 'react';
import Paper, { Point, Path } from 'paper';

const draw1 = () => {
    const myPath = new Path();
    myPath.strokeColor = 'red';
    myPath.add(new Point(300, 100));
    myPath.add(new Point(500, 50)); 

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