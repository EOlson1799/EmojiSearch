import React from 'react'

export default function App() {

    const [eList, setEList] = filterEmoji("", 10)

    function handleTextChange(e) {
        setEList(filterEmoji(e.target.value));
    };

    return (
        <div>
            <SearchInput textChange={handleTextChange} />
            <EmojiResults emojis = {eList} />
        </div>
    );
}