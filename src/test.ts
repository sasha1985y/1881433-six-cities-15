type Point = {
  x: number;
  y: number;
}

type PointPL = keyof Point;
let myPL: PointPL = 'y'