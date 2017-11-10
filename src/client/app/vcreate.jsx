import React from 'react';
import {render} from 'react-dom';
import VisionCreate from './VisionCreate.jsx';

const axios = require('axios');

class VCreate extends React.Component {

    constructor(props) {
        super(props);
    }
    
    var vision = {
        title : props.title,
        desc : props.desc,
        user : {
            name : props.user,
            picture : "profile.jpg",
            role : "Visionary"
        },
        link : "vision-page.html",
        details : {
            interests : props.interests.join(', '),
            location : props.location,
            endorsers : props.endorsers,
            posts : "100"
        },
        id : props.id,
        date : props.date  
    }
//    componentDidMount() {
//        axios.post('/api/create_post', {
//            [json object to create here]
//          })
//        .then(response => {
//          console.log(response, 'Signature added!');
//        })
//        .catch(err => {
//          console.log(err, 'Signature not added, try again');
//        });
//      }
    
    render () {
        
        return (               
            <div>
                <VisionCreate />
            </div>            
        );
    }
}

render(<VCreate/>, document.getElementById('vcreate'));
