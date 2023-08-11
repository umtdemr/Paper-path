import { useRef, useEffect } from 'react';
import Paper, { Point, Path } from 'paper';

const draw1 = () => {
    const myPath = new Path();
    const myPath2 = new Path();
    myPath.strokeColor = 'red';
    myPath2.strokeColor = 'blue';
    myPath.add(new Point(300, 50));
    myPath.add(new Point(300, 100));
    myPath.add(new Point(400, 100)); 
    myPath.add(new Point(400, 50)); 
    myPath.add(new Point(300, 50)); 

    myPath2.add(new Point(360, 50));
    myPath2.add(new Point(360, 100));
    myPath2.add(new Point(500, 100)); 
    myPath2.add(new Point(500, 50)); 
    myPath2.add(new Point(360, 50));  
    // const intersections = myPath.getIntersections(myPath2);
    // console.log(intersections)
    // for (let i = 0; i < intersections.length; i++) {
    //     console.log(intersections[i])
    //     new Path.Circle({
    //         center: intersections[i].point,
    //         radius: 5,
    //         fillColor: '#009dec'
    //     })
    // }

    const d =myPath.intersect(myPath2);
    d.position.x += 200
    // d.remove()
    // myPath.remove();
    // d.position.x += 500

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