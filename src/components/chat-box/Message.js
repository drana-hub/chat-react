import React from 'react'

export default function Message({user, text}) {
  const nativeUser = window.sessionStorage.getItem('username');
  return (
    <div className='msg'>
      <div className={user === nativeUser ? 'right-msg' : 'left-msg'}>{user}: {text}</div>
    </div>
    
  )
}
