import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "title",
            desc : "desc",
            post : "post",
            owner : props.owner,
            link : "vision-page.html",
            categories : {
                interests : "interest",
                location : "location",
                endorsements : "endorsements",
                posts : "posts"
            }
        }
    }
    
    render() {
        <div class="post-item">   
            <div class="caption wrapper-lg">
                <div class="row" style="margin-bottom:10px; position: relative">
                    <User/>
                    
                    <div class="col-lg-9" style="position:absolute;top:10%; margin-left:28%">
                        <h3 class="post-title">
                            <a href={this.state.link}>
                                <font color="#16a085">Vision:</font> {this.state.title}
                            </a>
                        </h3>
                    </div>
                    
                </div>
                        
                <div class="post-sum">
                    <p>
                        {this.state.desc}
                        <br>
                    </p>
                </div>
                        
                <div class="text-muted">
                    <i class="fa fa-heart icon-muted"></i> {this.state.categories.interests} &nbsp;&nbsp;
                    <i class="fa fa-globe icon-muted"></i> {this.state.categories.locations} &nbsp;&nbsp;
                    <i class="fa fa-users icon-muted"></i> {this.state.categories.endorsements} Endorsements &nbsp;&nbsp;
                    <i class="fa fa-comment-o icon-muted"></i> {this.state.categories.posts} Posts
                </div>
            
            </div>
        </div>
    }
}

<!--
<div class="col-lg-3">
  <a href="vision-profile.html">
      <span class="thumb avatar pull-left m-r">                        
        <img src="images/profile.jpg" style="border:3px solid #16a085" alt="...">
      </span>
      <span class="hidden-nav-xs clear">
        <span class="block m-t-xs">
          <strong class="font-bold text-lt text-md">William Long</strong> 
        </span>
        <span class="text-muted text-sm font-bold block">Visionary</span>
      </span>
    </a>
</div>-->
