let messages = [
  ["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
  ["zloy-zloy", "У Алеши завтра День рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL."]
];

for (let i = 0; i < messages.length; i++) {
   let data = messages[i];
   let author = data[0];
   let message = data[1];
   
   console.log(author + ': ' + message);
}