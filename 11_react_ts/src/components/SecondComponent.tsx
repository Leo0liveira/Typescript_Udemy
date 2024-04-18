import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p> SecondComponent </p>
        <p> O nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponent