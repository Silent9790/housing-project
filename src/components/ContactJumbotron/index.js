import React from 'react';
import axios from 'axios';

class ContactJumbotron extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({firstname: '', lastname: '', email: '', message: ''})
  }
  
  render() {
    return (
              <div>
                <div className="row">
                  <form
                    className="col s12"
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST"
                  >
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value={this.state.firstname}
                          onChange={this.onFirstnameChange.bind(this)}
                        ></input>
                        <label for="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          value={this.state.lastname}
                          onChange={this.onLastnameChange.bind(this)}
                        ></input>
                        <label for="last_name">Last Name</label>
                      </div>
                    </div>
        
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                        ></input>
                        <label for="email">Email</label>
                      </div>
                    </div>
        
                    <div class="row">
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea
                            id="icon_prefix2"
                            class="materialize-textarea"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                          ></textarea>
                          <label for="icon_prefix2">Message here</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
        
                  </form>
                </div>
              </div>
            );
  }

  onFirstnameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  onLastnameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactJumbotron;
