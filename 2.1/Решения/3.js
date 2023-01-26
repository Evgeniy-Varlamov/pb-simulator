let messages = [
  'Привет! Есть ли новости?',
  ':)',
  'Начал работать над заданием.',
  'Ленюсь.',
  'Но дело движется.'
];

let removedMessage = 'Но дело движется.';

let index = messages.indexOf(removedMessage);
if (index >= 0) {
  messages.splice(index, 1);
}
console.log(messages);