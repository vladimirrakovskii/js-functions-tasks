import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default (emails) => {
  const res = {};
  if (emails.length === 0) {
    return res;
  }
  for (const email of emails) {
    const domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {
      if (!Object.hasOwn(res, domain)) {
        res[domain] = 0;
      }
      res[domain] += 1;
    }
  }

  return res;
}
// END
