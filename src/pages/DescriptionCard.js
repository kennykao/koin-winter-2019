import React from "react"
import styled from "styled-components"

const DescriptionCardContainer = styled.div`
  width: 40%;
  margin-right: 20px;
  border: 1px solid;
  font-family: "Roboto", sans-serif;
  display: flex;
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
