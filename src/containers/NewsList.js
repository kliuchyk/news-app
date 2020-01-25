import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import NewsItem from '../components/NewsItem';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/fetchNewsActions';
import { Container, Row, Col } from 'react-bootstrap';

function NewsList({ error, loading, news, fetchNews }) {
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <h1>Popular News</h1>
      <Container>
        <Row>
          {news.map(({ title, description, urlToImage, url }) => (
            <Col key={title}>
              <NewsItem
                title={title}
                description={description}
                urlToImage={urlToImage}
                url={url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    error: state.news.error,
    loading: state.news.loading,
    news: state.news.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => {
      dispatch(fetchNews());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
