let user = {
  name: 'Лев Толстой',
  login: 'leo_tolstoy',
  reputation: 97,
  total: 900,
  chats: {}
}

user.chats.mama =  [
  {author: "вы", text: "Устал и загрустил"},
  {author: "вы", text: "Ленюсь"},
  {author: "wife", text: "zzz"},
];

user.chats.wife = [
  {author: "вы", text: "Устал и загрустил"},
  {author: "вы", text: "Ленюсь"},
  {author: "wife", text: "zzz"},
];


for (let i = 0; i < user.chats.wife.length; i++) {
  let message = user.chats.wife[i];
  console.log(message.author + ': ' + message.text);
}