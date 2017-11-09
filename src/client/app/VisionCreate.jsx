import React from 'react';
import ReactDOM from 'react-dom';

class VisionCreate extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title : 'title',
            desc : 'desc',
            country : 'country',
            education : false,
            health : false,
            economy : false,
            food : false,
            environment : false,
            rights : false,
            entrepreneurship : false,
            art : false,
            science : false,
            fundraising : 'fundraising',
            facebook : 'facebook',
            chat : 'chat',
            other : 'other',
            guidelines : false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        alert('Form submitted ' + this.state.join(', '));
        event.preventDefault();
    }
    
    render() {
        return (
            <form id="wizardform" onSubmit={this.handleSubmit}>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <ul class="nav nav-tabs font-bold">
                      <li><a href="#step1" data-toggle="tab">Basic Info</a></li>
                      <li><a href="#step2" data-toggle="tab">Categories</a></li>
                      <li><a href="#step3" data-toggle="tab">Resources</a></li>
                      <li><a href="#step4" data-toggle="tab">Completed!</a></li>
                    </ul>
                  </div>
                  
                    <div class="panel-body">
                    <p>Thanks for contributing by posting a Vision! Fill out this form wizard to give us the essential information about your Vision for the Arab World. </p>
                    <div class="line line-lg"></div>
                    <h4>Progress Bar</h4>
                    <div class="progress progress-xs m-t-md">
                      <div class="progress-bar bg-success"></div>
                    </div>
                    <div class="tab-content">
                      <div class="tab-pane " id="step1">                            
                        <p>Vision Title:</p>
                          <input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" class="form-control" data-trigger="change" data-required="true" placeholder="e.g. Assimilating Youth Refugees"></input>
                        <p class="m-t">Vision Description:</p>
                          <textarea value={this.state.desc} onChange={this.handleInputChange} class="form-control" rows="5" data-minwords="6" data-required="true" placeholder="Through our food ministry we have found that the greatest needs in the Refugee community are (ESL) classes and Work Training/Experience. Because of this need, we have begun an ESL class, supplemented with Computers and the Rosetta Stone Language Software. We have also opened a Thrift Store to help provide work experience and job skills to our Refugee Friends. We of course will gladly accept donations of clothing, furniture and household items for our thrift store!"></textarea>
                      </div>

                    <div class="tab-pane" id="step2">
                        <p>Interest Categories:</p>
                <div class="form-group">
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.education} onChange={this.handleInputChange}></input>
                        <i></i>
                        Education
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.health} onChange={this.handleInputChange}></input>
                        <i></i>
                        Health
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.economy} onChange={this.handleInputChange}></input>
                        <i></i>
                        Economy and Finance
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.food} onChange={this.handleInputChange}></input>
                        <i></i>
                        Food and Agriculture
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.environment} onChange={this.handleInputChange}></input>
                        <i></i>
                        Environment
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.rights} onChange={this.handleInputChange}></input>
                        <i></i>
                        Human Rights
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.entrepreneurship} onChange={this.handleInputChange}></input>
                        <i></i>
                        Entrepreneurship
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.arts} onChange={this.handleInputChange}></input>
                        <i></i>
                        Arts and Culture
                      </label>
                    </div>
                    <div class="checkbox i-checks">
                      <label>
                          <input type="checkbox" checked={this.state.science} onChange={this.handleInputChange}></input>
                        <i></i>
                        Science and Technology
                      </label>
                    </div>
                    </div>
                    <p>Country:</p>
                    <select class="form-control" data-required="true" value={this.state.country} onChange={this.handleInputChange}>
                        <option>Algeria</option>
                        <option>Bahrain</option>
                        <option>Egypt</option>
                        <option>Iraq</option>
                        <option>Jordan</option>
                        <option>Kuwait</option>
                        <option>Lebanon</option>
                        <option>Libya</option>
                        <option>Mauritania</option>
                        <option>Morocco</option>
                        <option>Oman</option>
                        <option>Palestine</option>
                        <option>Qatar</option>
                        <option>Saudi Arabia</option>
                        <option>Somalia</option>
                        <option>Sudan</option>
                        <option>Syria</option>
                        <option>Tunisia</option>
                        <option>United Arab Emirates</option>
                        <option>Yemen</option>
                      </select>
                    </div>
                    
                    <div class="tab-pane" id="step3">
                        <p>Include any useful links to other Resources</p>
                        <div class="input-group m-b">
                          <span class="input-group-addon">
                            <i class="fa fa-money"></i>
                          </span>
                              <input type="text" value={this.state.fundraising} onChange={this.handleInputChange}  class="form-control" placeholder="e.g. www.gofundme.com/myproject"></input>
                        </div>

                        <div class="input-group m-b">
                          <span class="input-group-addon">
                            <i class="fa fa-facebook"></i>
                          </span>
                              <input type="text" value={this.state.facebook} onChange={this.handleInputChange}  class="form-control" placeholder="e.g. Facebook Events/Groups"></input>
                        </div>

                        <div class="input-group m-b">
                          <span class="input-group-addon">
                            <i class="fa fa-comments"></i>
                          </span>
                              <input type="text" value={this.state.chat} onChange={this.handleInputChange} class="form-control" placeholder="e.g. groupme.com/mygroup"></input>
                        </div>

                        <div class="input-group m-b">
                          <span class="input-group-addon">
                            <i class="fa fa-desktop"></i>
                          </span>
                              <input type="text" value={this.state.other} onChange={this.handleInputChange}  class="form-control" placeholder="e.g. Other Websites"></input>
                        </div>

                        <div class="checkbox i-checks">
                          <label>
                              <input type="checkbox" checked={this.state.guidelines} onChange={this.handleInputChange} name="check" checked data-required="true"></input> I agree to the <a href="about.html" class="text-info">Guidelines</a>
                          </label>
                        </div>
                    </div>
                            
                        <div class="tab-pane text-center" id="step4">
                            <h4 class="font-thin m-t-xl">Congrats! Your Vision has been Posted!</h4>
                            <div class="row m-t-lg">
                                <button class="btn btn-rounded btn-sm btn-success" action="submit"><i class="fa fa-fw fa-check-square-o"></i> See your Vision Now</button>
                            </div>
                        </div>

                      <ul class="pager wizard m-b-sm">
                        <li class="previous first" style={{display:'none'}}><a href="#">First</a></li>
                        <li class="previous"><a href="#">Previous</a></li>
                        <li class="next last" style={{display:"none"}}><a href="vision-wall.html">Last</a></li>
                        <li class="next"><a href="#">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
      );
   }
}

export default VisionCreate;