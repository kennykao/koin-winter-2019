import React, { useState } from "react"
import P from "prop-types"
import styled from "styled-components"
import Button from "@splunk/react-ui/Button"
import ControlGroup from "@splunk/react-ui/ControlGroup"
import Text from "@splunk/react-ui/Text"
import Link from "@splunk/react-ui/Link"

const StyledControlGroup = styled(ControlGroup)``

const StyledLink = styled(Link)`
  white-space: nowrap;
`

const StyledTextArea = styled.div`
  min-height: 22px;
  padding: 8px 16px;
  cursor: not-allowed;
  word-break: break-all;
  color: gray;
  background-color: white;
  border-radius: 1px;
`

const StyledText = styled(Text)``

/*
export const validate = ({ state }) => {
  const errors = []
  Object.keys(requiredFields).forEach(field => {
    const requiredField = requiredFields[field]
    if (!requiredField.isValid(state[field])) {
      errors.push(requiredField.name)
    }
  })
  return errors.length ? errors : null
}
*/
const ChallengeForm = () => {
  //input values
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  //TODO find out teams
  const teams = []
  //
  const activities = []

  function handleChangeName(event) {
    setName(event.target.value)
  }
  function handleChangeDate(event) {
    setDate(event.target.value)
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  //send ajax request to backend/DB somewhere
  function handleSubmit(event) {
    console.log(description)
    console.log(name)
    event.preventDefault()
  }

  /*
<form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" value={name} onChange={handleChangeName} />
  </label>
  <label>
    Date:
    <input type="text" value={date} onChange={handleChangeDate} />
  </label>
  <input type="submit" value="Submit" />
</form>
*/

  return (
    <>
      Name
      <StyledControlGroup labelPosition="top" label="Fields" hideLabel>
        <StyledText
          canClear
          autocomplete="name"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e, { value }) => {
            handleChangeName(e)
          }}
        />
      </StyledControlGroup>
      Date
      <StyledControlGroup labelPosition="top" label="Fields" hideLabel>
        <StyledText
          canClear
          autocomplete="Date"
          name="Date"
          placeholder="Date"
          value={date}
          onChange={(e, { value }) => {
            handleChangeDate(e)
          }}
        />
      </StyledControlGroup>
      Description
      <StyledControlGroup labelPosition="top" label="Fields" hideLabel>
        <StyledText
          canClear
          autocomplete="Description"
          name="Description"
          placeholder="Description"
          value={description}
          onChange={(e, { value }) => {
            handleChangeDescription(e)
          }}
        />
      </StyledControlGroup>
      <Button onClick={handleSubmit}> submit</Button>
    </>
  )
}

export default ChallengeForm
