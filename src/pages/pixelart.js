import React from 'react'
import styled from 'styled-components';
import Layout from "../components/layout"

const StyledContainer = styled.div`
  text-align: start;
`;

const PixelartPage = ({ data }) => {
  return (
    <Layout>
      <div className='row start-xs'>
        <div className='col-xs'>
          <pre>{JSON.stringify(data.allFile.nodes, null, 2)}</pre>
        </div>
      </div>
    </Layout>
  )
}

export default PixelartPage;

export const pageQuery = graphql`
query PixelartContentQuery {
  allFile(filter: {
    sourceInstanceName: {eq: "pixelart-content"},
    extension: {in: ["mp4", "png"]},
    name: {eq: "large"}
  }) {
    nodes {
      extension
      relativeDirectory
      publicURL
      name
    }
  }
}`;








