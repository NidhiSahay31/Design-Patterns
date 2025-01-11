// app.ts
import Logger from './logger';

function main() {
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  logger1.log('This is the first log message.');
  logger2.log('This is the second log message.');

  console.log('Are logger1 and logger2 the same instance?', logger1 === logger2); // true
}

main();
