import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap';

const blockedip = () => {
  const errObj = {
    pageTitle: 'IP Blocked',
    title: 'Your IP is not permitted to view this page',
    icon: <FontAwesomeIcon icon={faLock} className="text-danger" />,
    message: null,
    bullets: [
      'Reason: Your IP is not whitelisted',
      'Result: Denied access to requested information',
      'Resolution: Add IP address to system',
    ],
  };

  return (
    <Container>
      <br />
      <br />
      <br />
      <Card>
        <Card.Header>
          <center>
            <h1>
              {errObj.icon}
              &nbsp;
              {errObj.title}
            </h1>
          </center>
        </Card.Header>
        <Card.Body>
          {
            errObj.bullets.map((bullet, index) => <h4 key={index.toString()}>{bullet}</h4>)
          }
        </Card.Body>
      </Card>
    </Container>
  );
};

export { blockedip };
