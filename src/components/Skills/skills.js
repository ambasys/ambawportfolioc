import React from 'react'
import './skills.css';
import FE from '../../assets/front-end.png';
import BE from '../../assets/backend.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate full stack web developer with experiences in creating visually appealing and user friendly website. I have a strong understanding of web design and development. I have also a keen eye for details.I am proficient in html, css, javascript and php as one stack. I am also experinced with MERN(Mongodb, Express js, React js and Node js) stack as well.</span>
        <div className='skillBars'>

            <div className='skillBar'>
                <img src={FE} className='skillBarImg' alt='UIDesign' />
                <div className='skillBarText'>
                    <h2>Front-End development</h2>
                    <p>I have the experience to develop front end applications using html,css,javascript. I am also experienced with javascript frameworks such as react.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={BE} className='skillBarImg' alt='WebDesign' />
                <div className='skillBarText'>
                    <h2>Back-End development</h2>
                    <p>I am experienced in back-end development with PHP and Node js</p>
                </div>
            </div>

        </div>

    </section>
  );
}

export default Skills