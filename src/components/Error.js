import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export const Error = ((props) => {
        return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
                <div id="list">
                        {props.error.map(err => {
                                return <div className="error-msg">
                                        <i className="fa fa-times-circle"></i>
                                        <p>Error! No menu generated for {err}</p>
                                </div>
                        })
                        }
                </div>

        </div>);
});

const mapStateToProps = (state) => {

        return {
                error: state.errorList
        };

};

export default connect(mapStateToProps)(Error);

