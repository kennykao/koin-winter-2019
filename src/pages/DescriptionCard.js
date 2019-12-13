import React from "react"
import styled from "styled-components"

const DescriptionCardContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: inline-block;
  vertical-align: middle;
  padding: 50px 50px;
`
const ValueSection = styled.div`
  font-weight: 600;
  font-size: 26px;
  padding-bottom: 15px;
`
const ChallangeSection = styled.div``

const ImageDiv = styled.div`
  width: 30px;
  height: 30px;
  float: right;
  text-align: center;
`

const ValueDiv = styled.div``
const DescriptionCard = ({ value, challange, image }) => {
  return (
    <DescriptionCardContainer>
      <ValueDiv>
        <ValueSection style={{ color: "#272343" }}>
          {" "}
          {value}
          {image ? (
            <ImageDiv>
              <img src={require("../images/" + image + ".png")} />
            </ImageDiv>
          ) : null}
        </ValueSection>
      </ValueDiv>
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
