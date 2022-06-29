import React from 'react'
import styled from 'styled-components'

function About() {
    
    const createLibrariesList = () => {
        const libraries = ['react', 'react-redux', 'react-router-dom', 'styled components', 'throttle-debounce', 'axios'];
        return libraries.map(library => {return <Item><Text>{library}</Text></Item>})
    }

  return (
    <Container>
        <Section>
            <H1>About</H1>
            <Text>This page was created to tackle a take-home challenge. Design idea was inspired by how I perceive an online art gallery would
                display their art.
            </Text>
        </Section>
        <Section>
            <H1> Tools </H1>
            <Subsection>
                <H1>Programming Language</H1>
                <Text>
                    JavaScript
                </Text>
            </Subsection>
            <Subsection>
                <H1>Libraries</H1>
                <List>
                    {createLibrariesList()}
                </List>
            </Subsection>
        </Section>
        <Section>
            <H1> How this page can be improved </H1>
            <Subsection>
                <H1>Design</H1>
                <Text> I like the simple design but I believe it can be significantly improved. 
                    Critical things to improve on is responsiveness/flexibility
                </Text>
            </Subsection>
            <Subsection>
                <H1>Selection Box</H1>
                <Text>
                    A box that shows what the user has selected. Ideally this would replace the box at the bottom of the page.
                </Text>
            </Subsection>
            <Subsection>
                <H1>Cache</H1>
                <Text>
                    The images are large and can take a long time to load. Caching would help the page be faster.
                </Text>
            </Subsection>
            <Subsection>
                <H1>Infinite Scrolling or Lazy Load</H1>
                <Text>
                    As mentioned in Cache, it takes a long time to load so, rendering only what is needed would be better
                </Text>
                <H1>Query Params</H1>
                <Text>
                    Search functionality usually have query params added into the URL. 
                </Text>
            </Subsection>
        </Section>
    </Container>
  )
}

const Container = styled.div``

const Section = styled.section`
`

const Subsection = styled.div`
    padding-left: 0.5rem;
    margin: 1rem;
`

const H1 = styled.h1`
    margin-bottom: 5px;
`
const Text = styled.p`
    padding-left: 1rem;
    padding-bottom: 1rem;
`

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Item = styled.li`
        list-style:none;
`


export default About