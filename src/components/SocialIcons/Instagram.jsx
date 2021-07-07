import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Facebook = ({ userName }) => (
    <CircleIcon href={`https://facebook.com/${userName}`} iconName="InstagramIcon" />
);

Facebook.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default Facebook;
