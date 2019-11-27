import chalk from 'chalk';

const log = message => {
  console.log(`${chalk.yellow('INFO:')} ${message}`);
};

export default log;
