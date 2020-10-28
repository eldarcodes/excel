export function capitalize(string = '') {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    ;[end, start] = [start, end]
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
