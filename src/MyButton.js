import React from 'react';
export default class MyButton extends React.Component
{
    render(){
        return(
            <button>{this.props.children}</button>
        );
    }
}