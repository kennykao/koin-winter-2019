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
const trainingUpList = [{ type: "Do your DT", points: "1 Point each day" }, {}]
const gettingCloseList = [
  { type: "Do your DT", points: "1 Point each day" },
  {},
]
const reachingOutList = [{ type: "Do your DT", points: "1 Point each day" }, {}]

const IndexPage = () => (
  <Layout>
    <DescriptionCardContainer>
      <DescriptionCard value={"Connecting w/ God"} challange={connectList} />
      <DescriptionCard value={"Connecting w/ God"} challange={trainingUpList} />
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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
