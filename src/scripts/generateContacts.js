import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const allContacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const contact = await createFakeContact();
      allContacts.push(contact);
    }
    await writeContacts(allContacts);
    console.log(`${number} контакт(ів) додано.`);
  } catch (error) {
    console.log('помилка', error.message);
  }
};

generateContacts(5);
