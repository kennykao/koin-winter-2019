import React from "react"
import styled from "styled-components"

const DescriptionCardContainer = styled.div`
  border: 1px solid black;
  font-family: "Roboto", sans-serif;
  display: inline-block;
  vertical-align: middle;
  padding: 50px 50px;
`

const ChallangeSection = styled.div``

const DescriptionCard = ({ value, challange }) => {
  return (
    <DescriptionCardContainer>
      {" "}
      <div> {value} </div>
      <div>
        {Object.keys(challange).map((keyName, i) => {
          return (
            <ChallangeSection>
              {challange[keyName].type}
              {": "}
              {challange[keyName].points}
            </ChallangeSection>
          )
        })}
      </div>
    </DescriptionCardContainer>
  )
}

export default DescriptionCard
