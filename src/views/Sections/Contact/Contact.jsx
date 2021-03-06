import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email, instagram, facebook } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h3 className="mt-0">{header}</h3>
          <hr className="divider my-3" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={3} className="auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" rel="noreferrer" target="_blank" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>

        <Col lg={3} className="auto text-center">
          <Icon iconName="InstagramIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" rel="noreferrer" target="_blank" href="https://www.instagram.com/levivictor/">
            {instagram}
          </a>
        </Col>

        <Col lg={3} className="auto text-center">
          <Icon iconName="FacebookIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100003360483491">
            {facebook}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
