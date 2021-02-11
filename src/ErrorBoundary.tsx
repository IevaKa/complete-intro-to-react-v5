// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component, ErrorInfo } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
<<<<<<< HEAD
  public state = { hasError: false, redirect: false };

=======
  public state = {
    redirect: "",
    hasError: false
  };
>>>>>>> b9b0ab77add25ebb0080b89223a92503735c3732
  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  public render() {
    if (this.state.redirect) {
<<<<<<< HEAD
      return <Redirect to="/" noThrow />;
=======
      return <Redirect to="/" />;
>>>>>>> b9b0ab77add25ebb0080b89223a92503735c3732
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
