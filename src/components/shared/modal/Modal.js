// import { findByLabelText } from '@testing-library/dom'
import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  // display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  width: '80%',
  height: '600px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, onClose, small,  name, id, date_local, YT, wikipedia, details }) {
  // export default function Modal(props) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={{color:'white'}}>{id}</div>
        <h1 style={{color:'black'}}>{name} </h1>
        {date_local}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}