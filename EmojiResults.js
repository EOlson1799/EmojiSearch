import React from 'react'

export default class EmojiResults extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        <div>
        {
            this.props.emojis.map(emoji => {
                <div>
                    { emoji.symbol }
                </div>
            })
        }
        </div>
    }
}