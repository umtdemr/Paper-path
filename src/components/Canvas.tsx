import { useRef, useEffect } from 'react';
import Paper, { Point, Path } from 'paper';

interface IPaperMouseEvent extends MouseEvent {
    point: paper.Point ;
}

let drawingCount = 0;

const draw1 = () => {
    const myPath = new Path();
    const lassoPath = new Path();
    myPath.strokeColor = '#000';
    myPath.strokeWidth = 3;
    lassoPath.strokeColor = 'red';
    lassoPath.strokeWidth = 3;
    lassoPath.dashArray = [5, 5];

    Paper.view.onMouseDown = () => {
        drawingCount++;
        if (drawingCount > 2) {
            myPath.removeSegments();
            lassoPath.removeSegments();
            drawingCount = 1;
        }
    };
  
    Paper.view.onMouseDrag = (event: IPaperMouseEvent) => {
        if (drawingCount === 1) {
            myPath.add(event.point);
        }
        else {
            lassoPath.add(event.point);
        }
    };
    Paper.view.onMouseUp = () => {
        if (drawingCount === 2) {
            const deletedPath = myPath.intersect(lassoPath, {
                trace: false
            });
            deletedPath.strokeColor = 'blue';

            const subtractedPath = myPath.subtract(lassoPath, {
                trace: false
            })
            subtractedPath.strokeColor = 'green';

            subtractedPath.position.x = myPath.position.x + myPath.bounds.width + 50;
            deletedPath.position.x = subtractedPath.position.x;
            deletedPath.position.y = subtractedPath.position.y + subtractedPath.bounds.height + 50;
        }
    }

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