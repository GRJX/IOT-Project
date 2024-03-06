// Format datetime to YYYYMMDD-hhmmss
const now = new Date();
const year = now.getUTCFullYear();
const month = padZero(now.getUTCMonth()+1);
const date = padZero(now.getUTCDate());
const hours = padZero(now.getUTCHours());
const minutes = padZero(now.getUTCMinutes());
const seconds = padZero(now.getUTCSeconds());

const dateTime = `${year}${month}${date}-${hours}${minutes}${seconds}`;

function padZero(num) {
  return num.toString().padStart(2, '0');
}

module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['src/features/'],
    format: [
      'progress',
      `json:reports/${dateTime}_results.json`,
      `html:reports/${dateTime}_results.html`
    ],
    publish: true,
    publishQuiet: true,
    dryRun: false,
    require: ['src/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register']
  }
};

