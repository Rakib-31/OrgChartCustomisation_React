import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../css/modal.css';
 
Modal.setAppElement(document.getElementById('showQuestionModal'))
 
export default function QuestionModal(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const questionSet = [
    'Are you feeling any pain today?',
    'Are you happy today?',
    'Which part of the body?',
    'How did you sleep today?'
  ]

  useEffect(() => {
    setIsOpen(props.showQuestionModal);
  });

  function showModal(){
      
          return (
            <div className="text-center" onClick={()=>props.closeModal(false)}>
            
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Example Modal" 
              centered
            >
                <div className="text-center ml-4">
                <h4>Select a Question</h4>
                {
                  questionSet.map((question, key) =>{
                    return (
                      <div key={key}>
                        <input onClick={(e) => props.selectedQuestion(e.target.value)} 
                        className="form-control" 
                        style={{width: '300px', cursor: 'pointer'}}  
                        type="text" value={question}/>
                      </div>
                    )
                  })
                }
                  
                </div>
              </Modal>
          </div>
          );
      
  }
 
    return (

        <div>{showModal()}</div>
      
    );
}