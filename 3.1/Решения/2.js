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

function printMessages() {
  let messages = user.messages;
  let n = messages.length;
  console.log('Всего сообщений: ' + n);
  for (let i = 0; i < n; i++ ) {
      let message = messages[i];
      let from = message.from;
      let text = message.text;
      console.log(from + ' | ' + text);
  }
}

printMessages();