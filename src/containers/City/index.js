import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'

export default class City extends Component {
    render() {
        return (
            <Link to="/user">
                城市
            </Link>
        );
    };
}