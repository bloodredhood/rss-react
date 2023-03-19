import React, { Component } from 'react';
import './Error.css';
class Error extends Component {
    render() {
        return (React.createElement("div", { className: "error" },
            React.createElement("div", { className: "title" }, "Error 404"),
            React.createElement("div", { className: "descr" },
                ' ',
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, fugit hic! Molestiae veritatis facere cupiditate eligendi quidem dicta qui! Natus veniam nulla rerum fugit porro eius facilis! Molestias, maxime quo.")));
    }
}
export default Error;
