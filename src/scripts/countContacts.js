import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const count = (await readContacts()).length;
    return count;
  } catch (error) {
    console.log('помилка', error.message);
  }
};

console.log(await countContacts());
