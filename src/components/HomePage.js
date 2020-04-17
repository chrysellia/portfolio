import React,{ Component } from 'react';
import './HomePage.styles.scss';
import { FaMapMarkerAlt, FaPhone, FaPlus } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

class HomePage extends Component {
    render(){
        return(
            <>
                <div className="header">
                    <div className="nom">CHRYSOSTOME<br/> PRISCILLIA<br/>
                    <p className="profession">Web Application Developper</p>
                    </div>
                    <div className="contact">
                        <div className="adresse">
                            <FaMapMarkerAlt/>&nbsp;
                            Antananarivo,Madagascar,Antananarivo,101
                        </div>
                        <div className="telephone">
                            <FaPhone/>&nbsp;
                            +261 34 63 625 81
                        </div>
                        <div className="email">
                            <MdEmail/>&nbsp;
                            priscilliachryso@gmail.com
                        </div>
                    </div>
                    <div className="image">
                        <img src="../image/Chrysellia-cv.jpg" alt=""></img>
                    </div>
                </div>
                
                <div className="body-content">
                    <div className="body-skills">
                        <div className="skill-title">
                            <FaPlus/>&nbsp;
                            SKILLS
                            <div className="bar-progression">
                                <div className="bar-left"></div>
                                <div className="bar-right"></div>
                            </div>
                        </div><br/>
                        <div>ReactJS</div>
                        <div className="skill-react">
                            <div className="skill-react-left"></div>
                            <div className="skill-react-right"></div>
                        </div>
                        <div>JavaScript</div>
                        <div className="skill-js">
                            <div className="skill-js-left"></div>
                            <div className="skill-js-right"></div>
                        </div>
                        <div>React Native</div>
                        <div className="skill-native">
                            <div className="skill-native-left"></div>
                            <div className="skill-native-right"></div>
                        </div>
                        <div>PHP & Symfony</div>
                        <div className="skill-symfony">
                            <div className="skill-symfony-left"></div>
                            <div className="skill-symfony-right"></div>
                        </div>
                        <div>MySQL</div>
                        <div className="skill-mysql">
                            <div className="skill-mysql-left"></div>
                            <div className="skill-mysql-right"></div>
                        </div>
                    </div>
                    <div className="experience-title">
                        <div className="experience-customize">
                            <div className="experience-name">
                                    <FaPlus/>&nbsp;
                                    WORK
                                <div className="bar-progression">
                                    <div className="bar-experience-left"></div>
                                    <div className="bar-experience-right"></div>
                                </div>
                        </div>
                        </div><br/>
                        <div className="body-experience">
                            <div className="experience-name"><br/>
                                <li>Turing.mg</li>
                                <div className="list-decoration">Antananarivo</div>
                                <div className="list-decoration"><strong>WEB APPLICATION DEVELOPPER</strong></div>
                                <div className="experience-content">
                                    <li>Meeting of clients with several companies</li>
                                    <li>Development of software for a commercial company and marketing for the management of employees, sales and materials</li>
                                    <li>Training of young people in computer literacy</li>
                                    <li>Monitoring of software functionality by checking errors and bugs</li>
                                    <li>Conception and development of several applications such as e-commerce site for clothing and foodservice delivery</li>
                                </div>
                            </div>
                            <div className="experience-periode">
                                <div>SEPT 2018-PRESENT</div>
                            </div>
                        </div><br/>

                        <div className="education-title">
                            <div className="education-customize">
                                <div className="education-name">
                                    <FaPlus/>&nbsp;
                                    EDUCATION
                                    <div className="bar-progression">
                                        <div className="bar-education-left"></div>
                                        <div className="bar-education-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                        <div className="body-education">
                            <div className="education-parcours">
                                <div className="education-site">
                                    <li>Institut d'Etudes Politiques Madagascar</li>
                                    <div className="list-decoration">Antananarivo</div>
                                    <div className="list-decoration"><strong>BACHELOR'S DEGREE OF SCIENCE</strong></div><br/>
                                </div>&nbsp;
                                <div className="education-periode">
                                    2019
                                </div>
                            </div>
                            <div className="education-content">
                                <li>Related courses to the field of political science(public administration, economy, international relations,...)</li>
                                <li>Overview of international news with presentation and debates</li>
                                <li>Students field trips (rural and urban communities, embassies) to prepare a project organized by the clubs of the university</li>
                                <li>Monitoring of software functionality by checking errors and bugs</li>
                                <li>Participation and organization of conferences by student</li>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </>
        )
    }
}

export default HomePage;