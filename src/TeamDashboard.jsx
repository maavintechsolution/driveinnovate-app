import React from 'react';

const TeamDashboard = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar/Menu */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          {/* ...existing code... */}
          <div className="app-brand demo">
            {/* SVG Logo and Brand */}
            {/* ...existing code... */}
            <span className="app-brand-text demo menu-text fw-bold ms-2">DI</span>
          </div>
          {/* ...existing code... */}
        </aside>
        {/* /Sidebar/Menu */}
        <div className="layout-page">
          {/* Navbar */}
          <nav className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            {/* ...existing code... */}
            <div className="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">
              {/* ...existing code... */}
            </div>
          </nav>
          {/* /Navbar */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Dashboard Content */}
              <div className="row">
                {/* Welcome Card */}
                <div className="col-xxl-8 mb-6 order-0">
                  <div className="card">
                    <div className="d-flex align-items-start row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 className="card-title text-primary mb-3">Welcome Jindal Steel 🎉</h5>
                          <p className="mb-6">You have done 7% more fuel saving today.<br />Check your fleet report further.</p>
                          <a href="#" className="btn btn-sm btn-outline-primary">View Fleet</a>
                        </div>
                      </div>
                      <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-6">
                          <img src="../assets/img/illustrations/man-with-laptop.png" height="175" alt="View Badge User" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ...existing code... */}
              </div>
              {/* ...existing code... */}
            </div>
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                  <div className="mb-2 mb-md-0">&copy; {new Date().getFullYear()}, made with ❤️ by Maavin Solutions</div>
                  <div className="d-none d-lg-inline-block"></div>
                </div>
              </div>
            </footer>
            {/* /Footer */}
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
};

export default TeamDashboard;
