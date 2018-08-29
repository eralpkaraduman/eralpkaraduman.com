import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: start;
`;

const IndexPage = ({ data }) => {
  const [{node}] = data.allFile.edges;
  return (
    <div className='row start-xs'>
      <div className='col-xs'>
        <StyledContainer
          dangerouslySetInnerHTML={ { __html: node.childMarkdownRemark.html } }
        />
      </div>
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexContentQuery {
    allFile(limit: 1, filter: {sourceInstanceName: {eq: "index-markdown-content"}}) {
      edges {
        node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
