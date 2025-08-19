type ABC = { a: number; b: number; c: number };

function sum({ a, b }: ABC) {
  console.log(a + b);
}

function sum2(x: ABC) {
  const a = x.a;
  const b = x.b;
  const c = x.c;
  console.log(a + b + c);
}
