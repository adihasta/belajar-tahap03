import React from 'react';
import bg from '../assets/bg.jpg';

class Jumbotron extends React.Component {
    render(){
        return (
            <img src={bg} className="img-fluid" />
        );
    }
}

export default Jumbotron;