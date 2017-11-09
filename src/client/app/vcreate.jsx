import React from 'react';
import {render} from 'react-dom';
import VisionCreate from './VisionCreate.jsx';

const axios = require('axios');

class VCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    }
    
//    componentDidMount() {
//        axios.get('/api/get_posts')
//          .then(res => {
//            this.setState({ posts: res.data });
//          });
//      }

    
    render () {
        
        const posts = [];
    
        console.log(this.state);
        
        for(let post of this.state.value) {
            posts.push(<VisionCreate {...post}/>);
        }
        
        
        return (               
            <div>
                <VisionCreate {...posts} />
            </div>            
        );
    }
}

render(<VCreate/>, document.getElementById('vcreate'));
