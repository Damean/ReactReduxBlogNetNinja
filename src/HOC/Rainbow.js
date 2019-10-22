import React from 'react'

export default function Rainbow(WrappedComponent) {

  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
