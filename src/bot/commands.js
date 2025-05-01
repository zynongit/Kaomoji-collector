const kaomojis = require('./kaomoji.json');

exports.handleKaomojiCommand = (command) => {
  const args = command.split(' ');
  const action = args[1]; // Ex: "find", "add", "list"

  switch (action) {
    case 'list':
      return `Categorias disponíveis: ${Object.keys(kaomojis).join(', ')}`;
    case 'find':
      const keyword = args[2];
      return findKaomojiByKeyword(keyword);
    default:
      return getRandomKaomoji(action || 'all');
  }
};

function getRandomKaomoji(category) {
  const list = kaomojis[category] || Object.values(kaomojis).flat();
  return list[Math.floor(Math.random() * list.length)];
}

function findKaomojiByKeyword(keyword) {
  // Implemente busca por tags (ex: "table" → ┻━┻)
}
