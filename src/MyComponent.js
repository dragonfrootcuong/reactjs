import React from 'react';
class MyComponent extends React.Component
{
    render(){
        return (
            <section>
                <h1>My Component</h1>
                <p>This is my Component</p>
                {this.props.children}
            </section>
        );
    };
}

export default MyComponent;