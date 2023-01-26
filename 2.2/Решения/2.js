let messages = [
  "Я принесла тебе утренний чай. Обычно ты еще спишь.",
  "Вы приносите мне чай по утрам?",
  "А ты как думаешь, откуда он берётся?",
  "Не знаю. Я думал, это само собой разумеющееся."
];

let searchText = 'чай';

for (let i = 0; i < messages.length; i++) {
 let message = messages[i];

 if (message.includes(searchText)) {
     console.log(message);
 }
}