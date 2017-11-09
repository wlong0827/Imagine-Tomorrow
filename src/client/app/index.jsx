import React from 'react';
import {render} from 'react-dom';
import VisionPost from './VisionPost.jsx';
import customData from './test-data.json';

class App extends React.Component {

    render () {
        const posts = [];
    
        for(var key in customData) {
            posts.push(<VisionPost {...customData[key]}/>);
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
