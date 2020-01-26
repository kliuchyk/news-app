import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'react-bootstrap';

function ProfileDetails({ name }) {
  return (
    <div>
      <h1 className="text-center p-3">Profile Details</h1>
      <Jumbotron fluid>
        <Container>
          <h1>Hello {name}!</h1>
          <p>
            This page will be modified in the nearest future so the user will be
            able to edit some profile data.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.user.name
  };
};

export default connect(mapStateToProps)(ProfileDetails);
