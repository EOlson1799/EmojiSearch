import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types";

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        //const [text, setText] = useState("")
    };

    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = e => {
        this.props.textChange(e);
    };


    render() {
        <div>
            <div>
                <input onChange={this.handleChange} />
            </div>
        </div>
    };
}