process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// 1-stdin.js

// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// process.stdin.setEncoding('utf8');

// process.stdin.on('data', (data) => {
//   const name = data.trim();
//   if (name) {
//     process.stdout.write(`Your name is: ${name}\n`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
// });
