import React from "react";
import "./Dashboard.css";
import gallery from "../../assets/product-cg.png";
import quote from "../../assets/product-mobile.png";
import invoice from "../../assets/product-store.png";
import settings from "../../assets/product-studio-manager.png";

function Dashboard() {
  return (
    <div className="outerContainer">
      <div className="container">
        <div className="header">
          <p>Dashboard</p>
        </div>
        <div className="subHeader">
          <p>PRODUCTS</p>
        </div>
        <div className="content">
          <div className="box">
            <div className="contentHeader">
              <img src={gallery} alt="" />
              <p>Client Gallery</p>
            </div>
            <div className="options">
              <ul>
                <li>New Collection</li>
                <li>Manage Collection</li>
                <li>View Homepage</li>
                <li>Feedbacks</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="contentHeader">
              <img src={quote} alt="" />
              <p>Enquiry</p>
            </div>
            <div className="options">
              <ul>
                <li>
                  <p> View Order</p>
                </li>
                <li>View Client Activities</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="contentHeader">
              <img src={invoice} alt="" />
              <p>Accounts</p>
            </div>
            <div className="options">
              <ul>
                <li>
                  <p>Invoices</p>
                </li>
                <li>View Payments</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="contentHeader">
              <img src={settings} alt="" />
              <p>Settings</p>
            </div>
            <div className="options">
              <ul>
                <li>
                  <p>Bank Account Details</p>
                </li>
                <li>Google Drive Integration Settings</li>
                <li>Social Media Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
