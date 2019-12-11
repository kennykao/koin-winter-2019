import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import DescriptionCard from "./DescriptionCard"
import ChallengeForm from "./ChallengeForm"

const DescriptionCardContainer = styled.div``

const winterDiv = []

const connectList = [
  { type: "Do your DT", points: "1 Point each day" },
  { type: "Read a book of the Bible", points: "2 points" },
  { type: "Prayer retreat (go some where and pray)", points: "3 points" },
  { type: "Memorize a chapter of Bible ", points: "10 points" },
]
const trainingUpList = [
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Learn a a recipe by cooking it 3 times", points: "5 points " },
  { type: "Read a Christian book", points: "10 points " },
]
const gettingCloseList = [
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
]
const reachingOutList = [
  { type: "Do your DT", points: "1 Point each day" },
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
  { type: "Exercise 5x in a week", points: "5 points " },
]

const IndexPage = () => (
  <Layout>
    <DescriptionCardContainer>
      <DescriptionCard value={"Connecting w/ God"} challange={connectList} />
      <DescriptionCard value={"Connecting w/ God"} challange={trainingUpList} />
    </DescriptionCardContainer>

    <DescriptionCardContainer>
      <DescriptionCard
        value={"Connecting w/ God"}
        challange={gettingCloseList}
      />
      <DescriptionCard
        value={"Connecting w/ God"}
        challange={reachingOutList}
      />
    </DescriptionCardContainer>

    <h1>Hi people</h1>
    <p>Welcome to Koin</p>
    <p>Some text here</p>
    <ChallengeForm />
  </Layout>
)

export default IndexPage
