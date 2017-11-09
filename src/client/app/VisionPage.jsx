import React from 'react';
import ReactDOM from 'react-dom';

class VisionPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            desc : props.desc,
            name : props.name,
            picture : props.picture,
            role : props.role,
            link : props.link,
            details : {
                interests : props.interests,
                location : props.location,
                endorsers : props.endorsers,
                posts : props.posts
            },
            id : props.id,
            date : props.date  
        };
    }
    
    render() {
        return (
          <section>
              <section class="vbox">
                <section class="scrollable wrapper">
                   
                    {this.state.title}
                    
                </section>
              </section>
            </section>
      );
   }
}

export default VisionPage;