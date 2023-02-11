let messages = [
  'Привет! Есть ли новости?',
  ':)',
  'Начал работать над заданием.',
  'Ленюсь.',
  'Но дело движется.'
];

messages.push('Готово');

let index1 = messages.indexOf('Ленюсь.');
messages[index1] = 'Стараюсь';
let index2 = messages.indexOf(':)');
messages.splice(index2, 1);

console.log(messages);