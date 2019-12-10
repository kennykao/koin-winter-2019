import styled from "styled-components"
import React, { useState } from "react"
import Text from "@splunk/react-ui/Text"

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

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
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
  )
}

export default ChallengeForm
