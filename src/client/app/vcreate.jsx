import React from 'react';
import {render} from 'react-dom';
import VisionCreate from './VisionCreate.jsx';

const axios = require('axios');

class VCreate extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render () {
        
        return (               
            <div>
                <VisionCreate />
            </div>            
        );
    }
}

render(<VCreate/>, document.getElementById('vcreate'));
