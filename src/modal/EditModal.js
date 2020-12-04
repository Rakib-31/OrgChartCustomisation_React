import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../css/modal.css';
 
Modal.setAppElement(document.getElementById('showQuestionModal'))
 
export default function EditModal(props){

  const [modalIsOpen,setIsOpen] = useState(false);
  const [container, setContainer] = useState({});

  useEffect(() => {
    setContainer({
      id: props.passEditData.id,
      title: props.passEditData.title,
      question:  props.passEditData.question
    });
    console.log(props.passEditData);
  }, [props.passEditData]);

  useEffect(() => {
    setIsOpen(props.showEditModal);
  });

  const saveData = (event) => {
    event.preventDefault();
    props.saveData(container);
    props.closeModal(false);
  }

  const formData = () => {
    if(props.passEditData){
      return (
        <div style={{marginTop: '15%'}} className="text-center ml-4">
          <h4 className="text-primary">Edit and Save the data</h4><br/>
          <form onSubmit={saveData}>
            <div class="text-left">
              <label ><small className="text-muted">Title</small></label>
            <input 
              onChange={(e) => setContainer({...container, title: e.target.value})} 
              className="form-control" 
              style={{width: '285px'}} 
              type="text" 
              name="title"
              id="title"
              value={container.title}
            />
            </div>
            <div class="text-left">
              <label ><small className="text-muted">Question</small></label>
              <input 
                onChange={(e) => setContainer({...container, question: e.target.value})} 
                className="form-control" 
                style={{width: '285px'}} 
                type="text" 
                name="ques"
                id="ques"
                value={container.question}
              />
            </div>
            <button type="submit" className="btn btn-success mr-2 mt-4">Save</button>
            <button className="btn btn-danger ml-2 mt-4" onClick={()=>props.closeModal(false)}>Cancel</button>
          </form>
        </div>
      );

    }
    else return '';
  }

 
  return (

    <div className="text-center">     
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal" 
      >
        {formData()}
      </Modal>
    </div> 
  );
}