import React from 'react'

export default class Chap3MyComponentState extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            Headline: 'My Component State (Loading)',
            body: 'Content is loading...'
        }
    }

    render(){
        return(
            <div>
            <h1>{this.state.Headline}</h1>
            <p>{this.state.body}</p>
            </div>
        );
    };
}