export function capitalize(string = '') {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1).fill('').map((_, i) => start + i)
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(target.col, current.col)
  const rows = range(target.row, current.row)
  const ids = cols.reduce((acum, col) => {
    rows.forEach((row) => acum.push(`${row}:${col}`))
    return acum
  }, [])
  return ids
}

export function nextSelector(key, {col, row}) {
  const MIN_VALUE = 0
  switch (key) {
    case 'Enter': {
      break
    }
    case 'Tab': {
      col++
      break
    }
    case 'ArrowLeft': {
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    }
    case 'ArrowRight': {
      col++
      break
    }
    case 'ArrowDown': {
      row++
      break
    }
    case 'ArrowUp': {
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
    }
  }
  return `[data-id="${row}:${col}"]`
}
