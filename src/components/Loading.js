import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div style={{width:'99vw',height:'99vh',display:'flex',justifyContent:'center'}} >
        <div className="align-self-center">
          <div className="d-flex">loading...</div>
        </div>
    </div>
  )
}

export default Loading