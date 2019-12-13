import React from "react"
import styled from "styled-components"
import TabLayout from "@splunk/react-ui/TabLayout"
import Table from "@splunk/react-ui/Table"

const DivSpacer = styled.div`
  padding-top: 30px;
`
const mockData = [
  {
    name: "kenny",
    team: "1",
    activity: "dishes",
    points: "5",
  },
]

const realData = []
let fetchData

/*
const tallyPoints(data) => {
  let team1Points = 0;
  let team2Points = 0;
  realData.map(item=> {
    item.points
  })
  return [team1Points, team2Points]
}
*/
const ResultsViewer = () => {
  return (
    <>
      <TabLayout defaultActivePanelId="team1">
        <TabLayout.Panel label=" Team 1" panelId="team1">
          <DivSpacer />
          <Table>
            <Table.Head>
              <Table.HeadCell> Name </Table.HeadCell>
              <Table.HeadCell> Team </Table.HeadCell>
              <Table.HeadCell> Activity </Table.HeadCell>
              <Table.HeadCell> Points </Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {mockData.map(row => (
                <Table.Row key={row.name}>
                  <Table.Cell> {row.name} </Table.Cell>
                  <Table.Cell> {row.team} </Table.Cell>
                  <Table.Cell> {row.activity} </Table.Cell>
                  <Table.Cell> {row.points} </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </TabLayout.Panel>
        <TabLayout.Panel label=" Team 2" panelId="team2">
          <Table>
            <Table.Head>
              <Table.HeadCell> Name </Table.HeadCell>
            </Table.Head>
          </Table>
        </TabLayout.Panel>
        <TabLayout.Panel label=" Team 3" panelId="team3">
          <Table>
            <Table.Head>
              <Table.HeadCell> Name </Table.HeadCell>
            </Table.Head>
          </Table>{" "}
        </TabLayout.Panel>
      </TabLayout>
    </>
  )
}

export default ResultsViewer
