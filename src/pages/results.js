import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ResultsViewer from "./resultsViewer"
import Layout from "../components/layout"

const DivSpacer = styled.div`
  padding-top: 30vh;
`

const SecondPage = () => (
  <Layout>
    <ResultsViewer />
    <DivSpacer />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
