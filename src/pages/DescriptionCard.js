import React from "react"
import styled from 'styled-components';


const DescriptionCardContainer = styled.div``

const DescriptionCard = ({value, challange}) => {
  return() {
    <div>
    {value}
  {challange.map(key,value => {
    {key}
    {value}
  })}
    </div>
  }

}

export default DescriptionCard
