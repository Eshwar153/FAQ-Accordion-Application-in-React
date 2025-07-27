/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
const FaqItem = ({question,answer}) =>{
   
  const [show,setShow]=useState(false);

  const toggleShow = () =>{
    setShow(!show);
  }

  return (<div className={`faq-item ${show ? "active": ""}`}>
    <div className="faq-item-header" onClick={toggleShow}>{question}</div>
    <div className="faq-item-body">
      <div className="faq-item-body-content">
    {answer}
      </div>
    </div>
  </div>)
}
const FaqAccordion = ({data})=>{
 return(<div className='faq-accordion'>
  <h2>FAQS</h2>
  {data.map((item)=>(
    <FaqItem key={item.id} question={item.question} answer={item.answer}/>
  ))}
 </div>)
}

const data = [
  {id:1, question:"What is React?", answer:"React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation."},
   {id:2, question:"Explain the MVC architecture.", answer:"The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components: Model, View, and Controller"},
   {id:3, question:"What is JSX?", answer:"JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM"}
];



function App() {
  return (
    <>
      <div className='App'>
      <FaqAccordion data={data}/>
      </div>
     
    </>
  )
}

export default App
