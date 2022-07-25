import React, { Component } from 'react';
import { ThemeContext } from '../hooks/UseContext';

class ClassContext extends Component {
    themeStyle(dark){
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc': '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        dark => {
                            return <div style={this.themeStyle(dark)}>Class Theme</div>
                        }
                    }
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default ClassContext;