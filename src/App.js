import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingCards from './loadingcard';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [newsData, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response);
        setNews(response?.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(true);
        setLoading(false);
      })
  }, []);

  return (
    <>
      {error != true ? (
        <div className="App">
          <h2 className='text-center mt-3'>Getting Post Data</h2>
          <Container>
            <Row>
              {loading ? (
                <>
                  <LoadingCards />
                  <LoadingCards />
                  <LoadingCards />
                  <LoadingCards />
                  <LoadingCards />
                  <LoadingCards />
                </>
              ) : newsData !== null && newsData.length <= 0 ? (
                <p>No data available</p>
              ) : (
                newsData.map((data) => (
                  <Col sm={12} md={4} key={data.id}>
                    <Card className='card' style={{ minHeight: '250px' }}>
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Asad</Card.Subtitle>
                        <Card.Text>
                          {data.body.slice(0, 80)}.
                        </Card.Text>
                        <Card.Link href="/">View Detail</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </div>
      ) : (

        <Alert className='text-center'  key='danger' variant='danger'>Something Went Wrong</Alert>

      )}
    </>
  );
}

export default App;