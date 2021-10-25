import React, { Component } from 'react';

// reference: https://mailtrap.io/blog/react-contact-form/
class Contact extends Component {
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
      }
    
      resetForm(){
        this.setState({name: "", email: "", message: ""})
      }
    
      render() {
        return(
          <div className="contact">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
      }
    
      onNameChange(event) {
          this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
          this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
          this.setState({message: event.target.value})
      }

    // render() {
    //     return (
    //         <div class="contact">
    //             Contact
    //         {/* <a href="https://codepen.io/naafi" target="_blank"><i class="fab fa-codepen"></i></a>
    //         <a href="https://github.com/naaficodes" target="_blank"><i class="fab fa-github"></i></a>
    //         <a href="https://Instagram.com/iam_naafi" target="_blank"><i class="fab fa-instagram"></i></a>
    //         <a href="https://www.facebook.com/abdul.w.naafi" target="_blank"><i class="fab fa-facebook-f"></i></a>
    //         <a href="https://Linkedin.com/in/naafi" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    //         <a href="https://medium.com/@iam_naafi" target="_blank"><i class="fab fa-medium-m"></i></a> */}
    //         </div>
    //     )
    // }
}
export default Contact