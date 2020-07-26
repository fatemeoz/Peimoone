import React, { Component } from 'react';
import { Link as RouterLink} from "react-router-dom";

export class Link extends Component {
    render() {
        return (
            <RouterLink style={{ textDecoration: "none" }} to={this.props.to}>
                {this.props.children}
            </RouterLink>
        )
    }
}

export default Link
