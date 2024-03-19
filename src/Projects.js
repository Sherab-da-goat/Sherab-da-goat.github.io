import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {

  const [activeItem, setActiveItem] = useState(null);

  const activeTheLink = () => {
    console.log("clicked")
  }

  return (
    <div className="projects-main">
    <div className="stagePerspective parallaxPerspective perspective-origin-tt-bb">
      <div className="stageContainer" style={{ opacity: 1, height: '2327px' }}>
        <main className="stage" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          <ul className="projects isHovering">
            <li className="projectsLi" data-barba="HomeTransition" onClick={() => activeTheLink()}>
              <div className="projectContainer">
                <a href="/work/studiomega/"  data-barba="HomeTransition">Studio<br />Mega</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/thebrigade/" data-barba="HomeTransition">The<br />Brigade</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/push/" data-barba="HomeTransition">Push</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/onxmaps/" data-barba="HomeTransition">onX Maps</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/iconmotosports/"  data-barba="HomeTransition">Icon Moto-<br />Sports</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/parliament/" data-barba="HomeTransition">Parlia-<br />ment</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/haydenshapes/" data-barba="HomeTransition">Hayden-<br />shapes</a>
              </div>
            </li>
            <li className="projectsLi" data-barba="HomeTransition">
              <div className="projectContainer">
                <a href="/work/zervice/" data-barba="HomeTransition">Zervice</a>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
    </div>

  )
}
