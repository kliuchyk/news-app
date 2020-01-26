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

  let spinner = null;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    spinner = (
      <div className="mx-auto p-3" style={{ width: 100 }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const newsList = (
    <>
      <h1 className="text-center p-3">Popular News</h1>
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
    </>
  );

  return (
    <Container>
      {loading && spinner}
      {!loading && newsList}
    </Container>
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
