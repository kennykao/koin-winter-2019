import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import DescriptionCard from "./DescriptionCard"
import ChallengeForm from "./ChallengeForm"

const DescriptionCardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
`

const winterDiv = []

const connectList = [
  { type: "Do your DT", points: "1 point each day" },
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
  { type: "Call your peer or leader", points: "2 points" },
  { type: "Meet up with a GP member in person", points: "2 points" },
  {
    type: "Video chat your peers (3+ people)",
    points: "5 points (only one person gets to post it)",
  },
  { type: "Do any other core value activity with a friend", points: "1 point" },
]
const reachingOutList = [
  { type: "Do the dishes", points: "1 point" },
  {
    type: "Serve your family by cooking a meal from scratch",
    points: "2 points",
  },
  {
    type: "Serve your family by cleaning a room (that’s not yours)",
    points: "2 points",
  },
  { type: "Volunteer somewhere for a day", points: "3 points" },
  {
    type: "Share the gospel or your testimony with somebody",
    points: "5 points",
  },
]

const IndexPage = () => (
  <Layout>
    <DescriptionCardContainer>
      <DescriptionCard value={"Connecting with God"} challange={connectList} />
      <DescriptionCard value={"Training Up"} challange={trainingUpList} />
    </DescriptionCardContainer>

    <DescriptionCardContainer>
      <DescriptionCard value={"Getting Close"} challange={gettingCloseList} />
      <DescriptionCard value={"Reaching Out"} challange={reachingOutList} />
    </DescriptionCardContainer>

    <h1>Hi people</h1>
    <p>Welcome to Koin winter workout. Here is some random text to read </p>
    <ChallengeForm />
    <br />
    <Link to="/results">View results here</Link>
  </Layout>
)

export default IndexPage
