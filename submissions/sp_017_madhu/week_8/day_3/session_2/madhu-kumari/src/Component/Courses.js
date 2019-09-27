import React from "react";

const Courses = props => {
    if (props.name == "fullstack") {
      return (
        <React.Fragment>
          <h1> FullStack Development </h1>
          <h3> What you will learn: </h3>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> JavaScript </li>
          </ul>
          <Link to="/courses/fullstack/price">Price</Link>
          <Route
            path="/courses/fullstack/price"
            render={() => {
              return (
                <React.Fragment>
                  <p> Price is $0 </p>
                </React.Fragment>
              );
            }}
          />
        </React.Fragment>
      );
    }

    if (props.name == "android") {
        return (
          <React.Fragment>
            <h1> Android Development </h1>
            <h3> What you will learn: </h3>
            <ul>
              <li> Java </li>
              <li> Kotlin </li>
              <li> Android Studio </li>
            </ul>
          </React.Fragment>
        );
      }
    };



export default Courses;
