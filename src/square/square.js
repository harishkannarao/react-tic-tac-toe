import React from 'react';

export class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                data-testid="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;