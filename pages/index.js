import Layout from '../components/Layout'
import Paragraph from  '../components/Paragraph'
import H1 from  '../components/H1'

const Index = () => (
  <div >
    <Layout>
      <H1>Paragraph Title</H1>
      <Paragraph>
        Since flexbox is a whole module and not a single property, it involves a
        lot of things including its whole set of properties. Some of them are
        meant to be set on the container (parent element, known as "flex
        container") whereas the others are meant to be set on the children
        (said "flex items").
      </Paragraph>
      <Paragraph>
        If "regular" layout is based on both block and inline flow directions,
        the flex layout is based on "flex-flow directions". Please have a
        look at this figure from the specification, explaining the main
        idea behind the flex layout.
      </Paragraph>
    </Layout>
  </div>
)

export default Index
