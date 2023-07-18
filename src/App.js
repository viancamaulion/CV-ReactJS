import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import id from './images/ID.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-header">
      <div className="card-container">
        <div className="card-header col-md-offset-2 col-md-8">
          <img src={id} className="idpic" alt="id" />
          <div>
            <p className="name"><b>Vianca Andrea D. Maulion</b></p>
            <p className="bionote">IT Undergrad, Web and Mobile App Development Specialization</p> 
            <ul className="profile">
              <li><FontAwesomeIcon icon={faLocationDot}/> Address: Jupiter, Taal, Batangas</li>
              <li><FontAwesomeIcon icon={faEnvelope}/> Email: vianca.maulion@gmail.com </li>
              <li><FontAwesomeIcon icon={faPhone}/> Phone Number: 0908 594 4447</li>
              <li><FontAwesomeIcon icon={faLinkedin}/><a className="App-link"
                href="https://www.linkedin.com/in/viancamaulion/"> Vianca Maulion</a></li>
              <li><FontAwesomeIcon icon={faInstagramSquare}/><a className="App-link"
                href="https://www.instagram.com/viapilotservice/"> Via Pilot Service Inc.</a></li>
              </ul>
          </div>
        </div>
          <div>
            <p className="profilecategory"><b>Skills</b></p>
            <p id="underline"></p>
            <ul>
              <li>Front & Backend Coding</li>
              <li>Test Automation</li>
              <li>Financial Management</li>
              <li>Prototyping, Figma</li>
              <li>3D Visualization, Blender</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          <div>
            <p className="profilecategory"><b>Education</b></p>
            <p id="underline"></p>
            <div className="card-header col-md-offset-2 col-md-8" id="gap">
              <div>
                <p><b>University of Santo Tomas</b></p>
                <p className="subtext">BS Information Technology<br></br>2019 – 2023</p>
              </div>

              <div>
                <p><b>Fame Academy of Science and Technology Inc.</b></p>
                <p className="subtext">Science, Technology, Engineering, Mathematics (STEM)<br></br>2013 – 2019</p>
              </div>

              <div>
                <p><b>Commission on Higher Education</b></p>
                <p className="subtext">Scholarship Grantee<br></br>Dec 2019 – 2023</p>
              </div>
            </div>
          </div>

          <div>
            <p className="profilecategory"><b>Projects & Experiences</b></p>
            <p id="underline"></p>
            <ul className="experiences">
              <li><i><b> C# Library Management System for FAST Inc. (Nov 2019)</b></i>
                <ul>
                  <li>Self-taught C# Developer</li>
                  <li>Designed the system interface and coded the back-end functionalities through Visual Studio and Microsoft Access.</li>
                </ul>
              </li>
              <br></br>

              <li><i><b> Via Pilot Service Inc. (June 2021 – Present)</b></i>
                <ul>
                  <li>Business Owner</li>
                  <li>Catered gaming services to clients across the globe, primarily from the Philippines, Australia, Canada, and America.</li>
                  <li>Manages twelve (12) employees working on a part-time basis.</li>
                  <li>Designs the business’ marketing materials and utilizes social media managing skills.</li>
                </ul>
              </li>
              <br></br>

              <li><i> <b>PolaChrome Website and Inventory Management System (March 2022)</b></i>
                <ul>
                  <li>Front-end Developer</li>
                  <li>Created a web design for the said system</li>
                  <li>Collaborated with the team via GitHub in performing front-end duties.</li>
                </ul>
              </li>
              <br></br>

              <li><i><b> BoostIT: A Task Management Mobile Application for Students	(December 2022)</b></i>
                <ul>
                  <li>Front-end Developer</li>
                  <li>Created a web design for the said system</li>
                  <li>Collaborated with the team via GitHub in performing front-end duties.</li>
                </ul>
              </li>
              <br></br>

              <li><i><b> PurpleBug Inc. (Jan 2023 – Present)</b></i>
                <ul>
                  <li>Quality Assurance Specialist</li>
                  <li>Led a team of interns for a comprehensive presentation on "AI and Chatbots," highlighting their applications, benefits, and future implications in diverse industries.</li>
                  <li>Mentored newly onboarded IT/QA interns, ensuring their successful integration into the company.</li>
                  <li>Performed manual and automated testing on company games & websites while effectively communicating bug reports to developers.</li>
                </ul>
              </li>
              
            </ul>
          </div>

          <div>
            <p className="profilecategory"><b>Certificates & Awards</b></p>
            <p id="underline"></p>
            <div className="card-header col-md-offset-2 col-md-8" id="gap">
              <div>
                <p><b>Cum Laude</b></p>
                <p className="subtext">GWA: 1.459</p>
              </div>

              <div>
                <p><b>IT Passport Certification, Level 1</b></p>
                <p className="subtext">Issued on November 2022 by PHILNits Foundation Inc.</p>
              </div>

              <div>
                <p><b>3rd Best Capstone, IT Research Colloquium 2023</b></p>
                <p className="subtext">Issued on May 2023 by UST CICS</p>
              </div>
            </div>
          </div>

          <div>
            <p className="profilecategory"><b>Character References</b></p>
            <p id="underline"></p>

            <div className="card-header col-md-offset-2 col-md-8" id="gap">
              <div>
                <p><b>Alma V. Perol</b></p>
                <p className="subtext">Capstone Adviser, UST <br></br>avperol@ust.edu.ph</p>
              </div>

              <div>
                <p><b>John Raymund M. Estremadura</b></p>
                <p className="subtext">Instructor Specialist, FAST Inc.<br></br>0927 249 2118</p>
              </div>

              <div>
                <p><b>Hughe Ruaporo Uchia</b></p>
                <p className="subtext">Client, Australia<br></br>henryruaporo@hotmail.com</p>
              </div>

              <div>
                <p><b>Daniel Cesar C. Cambay</b></p>
                <p className="subtext">OJT Supervisor, PurpleBug Inc.<br></br>0916 427 7354 / danielcesarcambay@gmail.com</p>
              </div>

            </div>
          </div>
          </div>
      </body>
    </div>
  );
}

export default App;