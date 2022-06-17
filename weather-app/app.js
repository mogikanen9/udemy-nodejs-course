const winston = require('winston');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const w = require('./weather');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      filename: 'mylog.log',
      level: 'info'
    })
  ]
});


const myargs = yargs();

// Customize yargs version
myargs.version('1.0.0')


const printWeather = (location) => {

  w.currentWeather(location, (error, { temperature, feelslike } = {}) => {
    if (error) {
      logger.error('Smth went worng and the weather could not be obtained');
    } else if (temperature && feelslike) {
      logger.info(`The temperature in ${location} is ${temperature}. However it feels like ${feelslike}`);
    }

  });
}

myargs.command({
  command: 'current',
  describe: 'Check current weather',
  builder: {
    location: {
      describe: 'Location name, ex: Toronto',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    logger.debug(`Getting weather for location ${argv.location}`);
    printWeather(argv.location);
  }
});

myargs.parse(hideBin(process.argv));