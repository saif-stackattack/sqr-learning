import React from 'react'
import styled from 'styled-components';
import exam from '../assets/exam.svg'
import tutorials from '../assets/tutorials.svg';
import plan from '../assets/plan.svg';
import './About.css';





const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
    img{
        width: 200px;
        height: 160px;
    }
`;








const About = () => {
    return (
        <>
        <Container id="about">
          <div className="child1">
              <h3>Exams</h3>
              <img src={exam} alt="exams" />
              <p>Exam questions with with corrections and working out!</p>
          </div>
          <div className="child2">
          <h3>Tutorials</h3>
          <img src={tutorials} alt="exams" />
          <p>Video tutorials to guide you through problems.</p>
          </div>
          <div className="child3">
          <h3>Scheduling</h3>
          <img src={plan} alt="exams" />
          <p>Planned out timetables to fit your schedule!</p>
          </div>
        </Container>
       </>
    )
}

export default About