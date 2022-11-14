import React from 'react'

const StatusProgress = ({ status, Icon, time, enable }) => {
  return (
    <div className="text-center">
      <div className={`rounded-full w-[90px] h-[90px] mx-auto flex justify-center items-center  ${enable ? 'text-ActiveColor bg-ActiveColor/10' : 'text-Black25 bg-Black5'}`}>
        <Icon size={55} />
      </div>
      <h6>{status}</h6>
      <p>{time}</p>
    </div>
  )
}

export default StatusProgress
