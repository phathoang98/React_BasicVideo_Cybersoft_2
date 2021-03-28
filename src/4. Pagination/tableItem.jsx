import React, { Component } from 'react';

class TableItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>
                    <span>{this.props.data.title}</span>
                </td>
            </tr>
        )
    }
}

export default TableItem;