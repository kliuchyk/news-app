import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import NewsItem from '../components/NewsItem';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/fetchNewsActions';

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
      {news.map(({ title, description, urlToImage, author, content }) => (
        <NewsItem
          key={title}
          title={title}
          description={description}
          urlToImage={urlToImage}
          author={author}
          content={content}
        />
      ))}
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
