function knightMovesPath(start, target) {
  const directions = [
    [-2, -1], [-1, -2], [1, -2], [2, -1],
    [2, 1], [1, 2], [-1, 2], [-2, 1]
  ];

  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
  const visited = new Set();
  const queue = [[...start, [start]]]; // [x, y, path]

  while (queue.length > 0) {
    const [x, y, path] = queue.shift();
    const key = `${x},${y}`;

    if (x === target[0] && y === target[1]) {
      return path; // full path from start to target
    }

    if (visited.has(key)) continue;
    visited.add(key);

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (isValid(newX, newY)) {
        queue.push([newX, newY, [...path, [newX, newY]]]);
      }
    }
  }

  return null;
}

const path = knightMovesPath([0, 0], [7, 7]);
console.log(`Moves: ${path.length - 1}`);
console.log("Path:");
for (let [x, y] of path) {
  console.log(`[${x}, ${y}]`);
}
