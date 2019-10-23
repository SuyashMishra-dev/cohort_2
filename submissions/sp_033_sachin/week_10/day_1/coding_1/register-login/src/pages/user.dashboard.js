import React from 'react';

import { connect } from "react-redux";

const UserDashboardPage = ({currentUser}) => (
    <>
        Hi, this is UserDashboardPage page
        {
            currentUser.name
        }
        {
            currentUser.mobile
        }
        {
            currentUser.description
        }
    </>
)

const mapStateToProps = ({user : {currentUser}}) => ({
    currentUser
})

export default connect(mapStateToProps)(UserDashboardPage);