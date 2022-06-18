<script setup lang="ts">
import p5 from "p5"
const canvasWidth = 1200
const canvasHeight = 800

let aliveColor = "#41B883"
let gridColor = "#374151"

function themeToggle() {
  toggleDarkMode()
  const darkTheme = isDark()
  if (darkTheme) {
    gridColor = "#3c423e"
  } else {
    gridColor = "#374151"
  }
}

onMounted(() => {
  if (isDark()) {
    gridColor = "#3c423e"
  } else {
    gridColor = "#374151"
  }
})

// P5 Sketch
const sketch = (p5: p5) => {
  // Variables
  let resolution = 25
  let grid
  let cols = canvasWidth / resolution
  let rows = canvasHeight / resolution

  // Functions
  function make2DArray(cols, rows) {
    return new Array(cols).fill(null).map(() => new Array(rows).fill(0))
  }

  function renderGrid(grid) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution
        let y = j * resolution
        if (grid[i][j] == 1) {
          drawAliveCell(x, y)
        }
      }
    }
  }
  function drawAliveCell(x, y) {
    p5.push()
    p5.noStroke()
    p5.fill(aliveColor)
    p5.rect(x, y, resolution, resolution)
    p5.pop()
  }

  function countNeighbors(grid, x, y) {
    let sum = 0
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols
        let row = (y + j + rows) % rows
        sum += grid[col][row]
      }
    }
    sum -= grid[x][y]
    return sum
  }
  function drawGridLines() {
    for (let i = 0; i <= rows; i++) {
      p5.push()
      p5.stroke(gridColor)
      p5.line(
        0,
        (i / rows) * canvasHeight,
        canvasWidth,
        (i / rows) * canvasHeight
      )
      p5.pop()
    }
    for (let i = 0; i <= cols; i++) {
      p5.push()
      p5.stroke(gridColor)
      p5.line(
        (i / cols) * canvasWidth,
        0,
        (i / cols) * canvasWidth,
        canvasWidth
      )
      p5.pop()
    }
  }

  function nextGen(grid) {
    const nextGen = grid.map((arr) => [...arr])
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let cellState = grid[i][j]
        let neighbors = countNeighbors(grid, i, j)

        if (cellState == 0 && neighbors == 3) {
          nextGen[i][j] = 1
        } else if (cellState == 1 && (neighbors < 2 || neighbors > 3)) {
          nextGen[i][j] = 0
        } else {
          nextGen[i][j] = grid[i][j]
        }
      }
    }
    return nextGen
  }

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
    p5.frameRate(15)
    grid = make2DArray(cols, rows)
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p5.floor(p5.random(2))
      }
    }
  }

  p5.draw = () => {
    p5.clear(0, 0, 0, 0)

    renderGrid(grid)
    drawGridLines()
    grid = nextGen(grid)
  }
}
</script>

<template>
  <div class="flex relative w-screen justify-center t-20">
    <P5Wrapper class="pt-20" :sketch="sketch" />
    <div
      class="i-carbon-sun text-xl m-4 absolute right-0"
      @click="toggleDarkMode()"
    />
  </div>
</template>
