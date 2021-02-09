import emojiList from './emojiList.json'

export default function filterEmoji(text, maxElements) {
    return emojiList.
    filter(emoji => {
        return emoji.title.toLowerCase().includes(text.toLowerCase()) 
        || emoji.keywords.includes(text);
    }).slice(0, maxElements);
}