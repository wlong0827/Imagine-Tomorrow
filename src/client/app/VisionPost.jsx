import React from 'react';
import ReactDOM from 'react-dom';

class VisionPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            desc : props.desc,
            name : props.user,
            picture : "profile.jpg",
            role : "Visionary",
            link : "vision-page.html",
            details : {
                interests : props.interests.join(', '),
                location : props.location,
                endorsers : props.endorsers,
                posts : "100"
            },
            id : props.id,
            date : props.date  
        };
    }
    
    render() {
        return (
          <div class="post-item">
                
              <div class="caption wrapper-lg">
                  <div class="row" >

                    <div class="col-lg-4">
                      <a href="vision-profile.html">
                          <span class="thumb avatar pull-left m-r">      
                            <img src={"images/" + this.state.picture} class={"img-" + this.state.role.toLowerCase()} alt="..." />
                          </span>
                          <span class="hidden-nav-xs clear">
                            <span class="block m-t-xs">
                              <strong class="font-bold text-lt text-md">{this.state.name}</strong> 
                            </span>
                            <span class="text-muted text-sm font-bold block">{this.state.role}</span>
                          </span>
                        </a>
                     </div>

                      <div class="col-lg-8 pull-left m-t-sm">
                          <h4 class="post-title"><a href="vision-page.html"><font color="#16a085">Vision:</font> {this.state.title}</a></h4>
                      </div>
                </div>
            <div class="post-sum m-t-sm">
                <p>{this.state.desc}</p>
            </div>
            <div class="text-muted">
              <i class="fa fa-heart icon-muted"></i> {this.state.details.interests} &nbsp;&nbsp;
              <i class="fa fa-globe icon-muted"></i> {this.state.details.location} &nbsp;&nbsp;
              <i class="fa fa-users icon-muted"></i> 1 Endorsement(s) &nbsp;&nbsp;
              <i class="fa fa-comment-o icon-muted"></i> {this.state.details.posts} Posts
            </div>
          </div>
        </div>
      );
   }
}

export default VisionPost;