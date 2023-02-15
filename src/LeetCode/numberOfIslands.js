/**
 * @param {string[][]} grid
 * @return {number}
 */

export function numIslands(grid) {
  const withIslandInfo = grid.map(row => {
    return row.map(cell => {
      const obj = {};
      obj.value = cell;
      obj.islandNumber = null;
      return obj;
    });
  });

  let numberOfIslands = 0;
  const islands = {};

  for (let i = 0; i < withIslandInfo.length; i++) {
    for (let j = 0; j < withIslandInfo[i].length; j++) {
      const currentCell = withIslandInfo[i][j];
      if (i > 0 && currentCell.value === '1') {
        const northernNeighbor = withIslandInfo[i-1][j];
        if (northernNeighbor.value === '1') {
          currentCell.islandNumber = islands[numberOfIslands];
        }
      }
      if (j > 0 && currentCell.value === '1') {
        const westNeighbor = withIslandInfo[i][j-1];
        if (westNeighbor.value === '1') {
          currentCell.islandNumber = islands[numberOfIslands];
        }
        if (i > 0 && currentCell.value === '1') {
          const northernNeighbor = withIslandInfo[i-1][j];
          if (northernNeighbor.value === '1') {
            currentCell.islandNumber = islands[numberOfIslands];
          }
        }
      }
      else if (currentCell.value === '1'){
        if (j > 0 && currentCell.value === '1') {
          const westNeighbor = withIslandInfo[i][j-1];
          if (westNeighbor.value === '1') {
            currentCell.islandNumber = islands[numberOfIslands];
          }
        } else {
          numberOfIslands += 1;
          islands[numberOfIslands] = 1;
          currentCell.islandNumber = numberOfIslands;
        }
      }
    }
  }
  // console.log('withIslandInfo: ', withIslandInfo);
  // console.log('numberOfIslands: ', numberOfIslands);
  console.log('islands: ', islands);
  return numberOfIslands;
}
