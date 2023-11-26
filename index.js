const message = 'get-cells';
const message2 = 'get-cells-a1-d4';

const parts = message2.split('-');

if (parts.length > 2) {
  let startCell = 'A1';
  let endCell = 'Z1000';

  [, , startCell, endCell] = parts;
}
