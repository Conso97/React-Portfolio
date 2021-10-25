import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <section class="sectionRow" id="contact-me" style={{bottom: 0, position: 'absolute'}}>
            <h3>Contact Me</h3>
            <div class="columnAlignment">
                <ul>
                    <li><a href="https://github.com/Conso97" target="_blank">206.557.0388</a></li>
                    <li><a href="https://conso97.github.io/" target="_blank">Conso4u@website.com</a></li>
                    <li><a href="https://github.com/Conso97" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/conso97/" target="_blank">LinkedIn</a></li>
                    <li><a href="mailto:conso4u@gmail.com/"target="Gmail">Conso4u@gmail.com</a></li>
                </ul>
            </div>
         </section>
        )
    }
}
export default Footer