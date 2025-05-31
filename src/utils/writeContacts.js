import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані записані');
  } catch (error) {
    console.log('Помилка', error.message);
    throw error;
  }
};
