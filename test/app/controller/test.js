function test (a, ...list) {
  console.log(a);
  console.log(...list);
  testAnother(...list);
}

function testAnother(...list) {
  console.log(list);
}
test(1, 2, 4);