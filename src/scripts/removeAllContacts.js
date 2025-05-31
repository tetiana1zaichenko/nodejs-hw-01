import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('усі контакти видалено');
  } catch (error) {
    console.log('помилка', error.message);
  }
};

removeAllContacts();
