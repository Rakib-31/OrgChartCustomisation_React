
import QuestionModal from '../modal/QuestionModal';
import EditModal from '../modal/EditModal';

import React, { useState } from 'react';
import OrgChart from '../component/MyChart';

function FlowGraph() {

  let response = [];
  const node = [
    {id: 1,title: '', question: 'Select Question' }        
  ];

  const [nodes, setNodes] = useState(node);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [id, setId] = useState(null);
  const [passEditData, setPassEditData] = useState({});

  const addChild = (id) => {
    let arr = [...nodes];
    let myId = arr.length+1;
    arr.push({id: myId, name: 'name'+myId, title: 'title'+myId, pid: id});
    setNodes(arr);
    console.log(id)
  }

  const selectedQuestion = (ques) => {
    let arr = [...nodes];
    arr.map(res => {
      if(res.id === id){
        res.question = ques;
      }
    });
    setNodes(arr);
  }

  const openModal = (status) => {
    setShowQuestionModal(status)
  }

  const closeModal = (status) => {
    setShowQuestionModal(status);
    setShowEditModal(status);
  }

  const nodeId = (id) => {
    setId(id);
  }

  const passIdForEdit = (id) => {
    let info = nodes.filter(res => res.id === id);
    console.log(info[0]);
    setPassEditData(info[0]);
    setShowEditModal(true);
  }

  const changeHandler = (event) => {
    console.log(event.target.value);
    [event.target.name] = event.target.value;
  }

  const saveData = (data) => {
    console.log(data);
    let arr = [...nodes];
    arr.map(res => {
      if(res.id === data.id){
        res.title = data.title;
        res.question = data.question;
        response.push(res);
      }
    });
    setNodes(arr);
  }

  return (
    <div id="showQuestionModal" style={{height: '100%'}}>
      <QuestionModal
        closeModal={closeModal}
        selectedQuestion={selectedQuestion}
        showQuestionModal={showQuestionModal}
      />
      <EditModal
        closeModal={closeModal}
        showEditModal={showEditModal}
        passEditData={passEditData}
        changeHandler={changeHandler}
        saveData={saveData}
      />
      <OrgChart 
        passIdForEdit={passIdForEdit} 
        nodeId={nodeId} 
        openModal={openModal} 
        nodes={nodes} 
        addChild={addChild}
      />

    </div>
  );
}

export default FlowGraph;