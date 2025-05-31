import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts === 0) {
      console.log('Не має контактів');
      return;
    } else {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт видалено.');
    }
  } catch (error) {
    console.log('помилка', error.message);
  }
};

removeLastContact();
