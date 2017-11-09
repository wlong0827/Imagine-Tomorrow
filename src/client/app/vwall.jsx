import React from 'react';
import {render} from 'react-dom';
import VisionPost from './VisionPost.jsx';
import VisionPage from './VisionPage.jsx';
import customData from './test-data.json';

const axios = require('axios');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    
    componentDidMount() {
        axios.get('/api/get_posts')
          .then(res => {
            this.setState({ posts: res.data });
          });
      }

    
    render () {
        
        const posts = [];
    
        console.log(this.state);
        
        for(let post of this.state.posts) {
            posts.push(<VisionPost {...post}/>);
        }
        
        
        return (               
            <div>
                {posts}
                <div class="text-center m-t-lg m-b-lg">
                    <ul class="pagination pagination-md">
                      <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
                    </ul>
                  </div>
            </div>            
        );
    }
}

render(<App/>, document.getElementById('app'));
