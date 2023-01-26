let user = {
  name: "Иван Иванов",
  login: "killer504",
  reputation: 97,
  messages: [
    {from: "administrator", text: "Вы получили предупреждение за публикацию рекламы на форуме"},
    {from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем DonkeyKong"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем Netologist"},
    {from: "Brian Kerninghan", text: "hello, world"}
  ]
};

function printChatUsers() {
  let messages = user.messages;
  let n = messages.length;
  let users = [];
  for (let i = 0; i < n; i++ ) {
      let message = messages[i];
      let from = message.from;
      if (!users.includes(from)) {
          users.push(from);
      }
  }
  console.log('В чате пользователей: ' + users.length);
  
  let usersString = '';
  for (let i = 0; i < users.length; i++ ) {
     usersString += users[i] + ', ';
  }
  usersString = usersString.slice(0, -2);
  console.log('Вот они: ' + usersString);
}

printChatUsers();