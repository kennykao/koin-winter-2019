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

const ChallangeName = styled.div`
  font-weight: 10;
`
const ValueDiv = styled.div``
const DescriptionCard = ({ value, challange, image }) => {
  return (
    <>
      {challange ? (
        <DescriptionCardContainer>
          <ValueDiv>
            <ValueSection style={{ color: "#272343" }}>
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
                  <b style={{ fontWeight: 50 }}>{challange[keyName].type}</b>
                  {": "}
                  {challange[keyName].points}
                </ChallangeSection>
              )
            })}
          </div>
        </DescriptionCardContainer>
      ) : null}
    </>
  )
}

export default DescriptionCard
