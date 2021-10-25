import React, { Component } from 'react';
// import { Tile } from 'react-native-elements';

class Portfolio extends Component {
    render() {
        return (
            <div class="condiv portfolio">
                {/* <section class="sectionRow" id="work"> */}
                    {/* <h3>Work</h3> */}
                    <div class="columnAlignment">
                        {/* <!-- Project 1 --> */}

                        {/* <Tile
                            imageSrc={require('../Profile.jpg')} title="Project 1 - The Collector" icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                            contentContainerStyle={{ height: 70 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>A website that allows the user to search the Marvel Universe for their favorite characters or to explore new characters. Once they have searched a character they will be presented with Merch.</Text>
                                <Text><a href="https://github.com/Conso97/The-Collector.git" target="_blank" alt="Got to project 1" class="">The Collector GitHub</a></Text>
                            </View>
                        </Tile>; */}

                        <a href=" https://conso97.github.io/The-Collector/" target="_blank" alt="Got to project 1" class="imageContainer">
                            {/* <img src="../css/Collector.jpg" alt="Coding 1" class="projectImage"> */}
                            <div class="project-title">
                                <h4>Project 1 - The Collector</h4>
                                <h5>A website that allows the user to search the Marvel Universe for their favorite characters or to explore new characters. Once they have searched a character they will be presented with Merch.
                                </h5>
                            </div>
                        </a>

                        <a href="https://github.com/Conso97/The-Collector.git" target="_blank" alt="Got to project 1" class="">The Collector GitHub</a>
                        
                        {/* <!-- Project 2 --> */}
                        <a href="https://conso97.github.io/password-generator/" target="_blank" alt="Got to project 2" class="imageContainer">
                            {/* <img src="../css/Password-Generator.jpg" alt="Coding 1" class="projectImage"> */}
                            <div class="project-title">
                                <h4>Project 2 - Password Generator</h4>
                                <h5>A secure password generating javascript webpage, that enables employees to generate random passwords based on the criteria they’ve selected.</h5>
                            </div>
                        </a>
                        <a href="https://github.com/Conso97/password-generator.git" target="_blank" alt="Got to project 1" class="">Password-Generator GitHub</a>
                        {/* <!-- Project 3 --> */}
                        <a href="https://conso97.github.io/med-quiz/" target="_blank" alt="Got to project 3" class="imageContainer">
                            {/* <img src="../css/Med-quiz.jpg" alt="Coding 1" class="projectImage"> */}
                            <div class="project-title">
                                <h4>Project 3 - Med Quiz</h4>
                                <h5>A timed Medical quiz with multiple-choice questions that features dynamically updated HTML and CSS powered by JavaScript code.</h5>
                            </div>
                        </a>
                        <a href="https://github.com/Conso97/med-quiz.git" target="_blank" alt="Got to project 1" class=""> Medical-Quiz GitHub</a>
                        {/* <!-- Project 4 --> */}
                        <a href="https://conso97.github.io/work-day-scheduler/" target="_blank" alt="Got to project 4" class="imageContainer">
                            {/* <img src="../css/work-scheduler.jpg" alt="Coding 1" class="projectImage"> */}
                            <div class="project-title">
                                <h4>Project 4 - Work Day Scheduler</h4>
                                <h5>a user friendly calendar application that allows the addition of important events, features CSS powered by jQuery, js and updated HTML.</h5>
                            </div>
                        </a>
                        <a href="https://github.com/Conso97/work-day-scheduler.git" target="_blank" alt="Got to project 1" class=""> Work-Day Scheduler GitHub</a>
                        {/* <!-- Project 5 --> */}
                        <a href="https://conso97.github.io/horiseon-website/" target="_blank" alt="Got to project 5" class="imageContainer">
                            {/* <img src="../css/Horiseon-Web.jpg" alt="Coding 1" class="projectImage"> */}
                            <div class="project-title">
                                <h4>Project 5 - Horeson Website</h4>
                                <h5> An optimized and accessible fixed webpage of what the responsive version of the stater code does. Providing accessibility where posible, through manipulation of HTML and CSS.</h5>
                            </div>
                        </a>
                        <a href="https://github.com/Conso97/horiseon-website.git" target="_blank" alt="Got to project 1" class=""> Horeson-Website GitHub</a>
                    </div>
                {/* </section> */}
                
            </div>
        )
    }
}
export default Portfolio