import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import IdleDetector from "react-idle-detector";

import httpClient from "./api/httpClient";

// Auth
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";

// Layout
import Layout from "./HOC/Layout";
import LandingPage from "./HOC/LandingPage";

// Home / Protected
import Home from "./Containers/home/Home";
import PersonalProfile from "./Containers/home/PersonalProfile/PersonalProfile";
import UserManagement from "./UserManagement/UserManagement";
import PendingRequests from "./PendingRequests/PendingRequests";
import BusinessEntityManagement from "./BusinessEntityManagement/BusinessEntityManagement";
import Faq from "./Containers/home/Faq/Faq";

// Utils
const clearSessionAndRedirect = () => {
  localStorage.clear();
  window.location.href = "/login";
};

/**
 * Session timeout handler
 */
const handleSessionTimeout = () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  alert("Your session has expired. Please login again.");

  httpClient
    .get("/logout")
    .finally(() => {
      clearSessionAndRedirect();
    });
};

class App extends Component {
  render() {
    return (
      <>
        {navigator.onLine ? (
          <IdleDetector
            events={["mousemove", "keydown", "scroll"]}
            idleTime={20 * 60 * 1000} // 20 minutes
            onNoActivity={handleSessionTimeout}
          >
            <Switch>
              {/* ---------- Public Routes ---------- */}
              <Route path="/" exact component={Login} />
              <Route path="/login" exact component={Login} />
              <Route path="/registration" exact component={Registration} />

              {/* ---------- Protected Routes ---------- */}
              <Route path="/home" exact component={Home} />
              <Route path="/faq" component={Faq} />
              <Route path="/pendingRequests" component={PendingRequests} />
              <Route path="/userManagement" component={UserManagement} />
              <Route path="/personalProfile" component={PersonalProfile} />
              <Route
                path="/businessEntityManagement"
                component={BusinessEntityManagement}
              />

              {/* ---------- Layout Wrapped Routes ---------- */}
              <Layout>
                {/* Add additional routes wrapped with Layout here */}
              </Layout>

              {/* ---------- Landing ---------- */}
              <Route path="/landing" component={LandingPage} />
            </Switch>
          </IdleDetector>
        ) : (
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            Service temporarily unavailable. Please check your connection.
          </div>
        )}
      </>
    );
  }
}

export default App;

