import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
    render() {
        return (
            <div className='outer-wrapper'>
                <Header />
                <div>
                    <h1>Content section</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;