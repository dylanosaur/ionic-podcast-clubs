import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function FriendsGrid(props) {


  
    return (
        <Container>
            <Row>
                {Array.from(Array(10).keys()).map((item) => item)}
            </Row>
            <Row>
                {Array.from(Array(7).keys()).map((item) => item)}
            </Row>
      </Container>
    );
  }