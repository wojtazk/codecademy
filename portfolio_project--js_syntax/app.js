// I've got the wishes from https://www.143greetings.com/christmas-eve-messages.html ;)

const messageIntros = [
  'Happy Christmas Eve to all!',
  'Happy Christmas Eve, everyone!',
  'Christmas Eve greetings!',
  'Have a good time & enjoy a merry Christmas Eve, everyone.',
  'Merry Christmas, my loved ones.',
  "During this holiday season, I'm sending you tons of prayers and love.",
];
const messageBodies = [
  'I hope your Christmas Eve is joyful,',
  'When you wake up,',
  'I hope your holiday packing is finished,',
  'I hope everyone has a cozy,',
  'I wish I had 5$,',
];
const messageEndings = [
  'no matter where you are.',
  'I wish your stockings were popping up with gifts.',
  'and now you can enjoy a ink of eggnog beside the Christmas tree.',
  'enjoy with family and friends. Merry Christmas to all!',
];

const randomIndex = (arrSize) => Math.floor(Math.random() * arrSize);
console.log(
  `${messageIntros[randomIndex(messageIntros.length)]} ${
    messageBodies[randomIndex(messageBodies.length)]
  } ${messageEndings[randomIndex(messageEndings.length)]}`
);
