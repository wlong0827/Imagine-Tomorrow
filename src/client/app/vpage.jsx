import React from 'react';
import {render} from 'react-dom';
import VisionPage from './VisionPage.jsx';
import customData from './test-data.json';

class VPage extends React.Component {

    render () {
        
        return (    
            <div>
                <VisionPage {...customData.post1} />
            </div>            
        );
    }
}

render(<VPage/>, document.getElementById('vpage'));
