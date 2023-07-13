// const fs = require("fs/promises");
// const { nanoid } = require("nanoid");
// const path = require("path");

// const contactsPath = path.join(__dirname, "contacts.json");

// async function listContacts() {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   return JSON.parse(data);
// }

// async function getContactById(id) {
//   const contacts = await listContacts();
//   const result = contacts.find((contact) => contact.id === id);
//   return result || null;
// }

// async function removeContact(id) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === id);

//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return result;
// }

// async function addContact({ name, email, phone }) {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// }

// async function updateById(id, data) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === id);

//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { id, ...data };
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[index];
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateById,
// };
