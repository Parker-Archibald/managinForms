const contacts = [];
let logged = [];

export const getContacts = () => {
  return contacts;
};

export const getLoggedIn = () => {
  return logged;
};

export const addContact = contact => {
  let result = false;
  if (
    contact.firstName &&
    contact.lastName &&
    contact.email &&
    contact.phone &&
    contact.password
  ) {
    contact.id = contacts.length;
    contacts.push(contact);
    result = true;
  }
  return result;
};

export const LoginNow = credentials => {
  let result = false;
  contacts.forEach(contact => {
    if (
      contact.email === credentials.email &&
      contact.password === credentials.password
    ) {
      result = true;
      for (let i = 0; i < contacts.length; i++) {
        if (
          credentials.email === contacts[i].email &&
          credentials.password === contacts[i].password
        ) {
          logged[0] = contacts[i];

        }
      }
    }
  });
  return result;
};

export const changePass = props => {
  for (let i = 0; i < contacts.length; i++) {
    if(props.email === contacts[i].email) {
      contacts[i].password = props.password;
    }
  }
};

export const dlcont = props => {
  for(let i = 0; i < contacts.length; i++) {
    if(props.email === contacts[i].email && props.password === contacts[i].password);
  }
  this.forceUpdate();
}
