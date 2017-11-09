import React from 'react';
import ReactDOM from 'react-dom';

class VisionPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            desc : props.desc,
            name : props.user,
            picture : "profile.jpg",
            role : "Explorer",
            link : "vision-page.html",
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
            <div class="post-item">

              <div class="caption wrapper-lg">
                  <div class="col-lg-12 text-center">
                      <h4>What We're Doing</h4>
                      <hr></hr>
                  </div>

                <div class="post-sum text-center">
                    <i class="fa fa-quote-left pull-left"></i>
                    <br></br>
                        <p>{this.state.desc}</p>
                    <i class="fa fa-quote-right pull-right"></i>
                </div>

              </div>
            </div>
      );
   }
}

export default VisionPage;