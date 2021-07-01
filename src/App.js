import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import avatar from "./img/avatars/avatar.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body
          data-theme="default"
          data-layout="fluid"
          data-sidebar-position="left"
          data-sidebar-behavior="sticky"
        >
          <div class="wrapper">
            <nav id="sidebar" class="sidebar">
              <div class="sidebar-content js-simplebar">
                <a class="sidebar-brand" href="index.html">
                  <img src={logo} height="50px"></img>
                </a>
                <ul class="sidebar-nav">
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="map"></i>{" "}
                      <span class="align-middle">Map</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="search"></i>{" "}
                      <span class="align-middle">Search</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="calendar"></i>{" "}
                      <span class="align-middle">Calendar</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="#dashboards"
                      data-toggle="collapse"
                      class="sidebar-link collapsed"
                    >
                      <i class="align-middle" data-feather="dollar-sign"></i>{" "}
                      <span class="align-middle">Payments</span>
                    </a>
                    <ul
                      id="dashboards"
                      class="sidebar-dropdown list-unstyled collapse"
                      data-parent="#sidebar"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-default.html">
                          Revenue
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-analytics.html">
                          Expense
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-saas.html">
                          My Expenses
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="file-text"></i>{" "}
                      <span class="align-middle">Reports</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="folder"></i>{" "}
                      <span class="align-middle">Documents</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="#dashboards"
                      data-toggle="collapse"
                      class="sidebar-link collapsed"
                    >
                      <i class="align-middle" data-feather="file-text"></i>{" "}
                      <span class="align-middle">Forms</span>
                    </a>
                    <ul
                      id="dashboards"
                      class="sidebar-dropdown list-unstyled collapse"
                      data-parent="#sidebar"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-default.html">
                          Revenue
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-analytics.html">
                          Expense
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-saas.html">
                          My Expenses
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="#dashboards"
                      data-toggle="collapse"
                      class="sidebar-link collapsed"
                    >
                      <i class="align-middle" data-feather="download"></i>{" "}
                      <span class="align-middle">B.I. On Demand</span>
                    </a>
                    <ul
                      id="dashboards"
                      class="sidebar-dropdown list-unstyled collapse"
                      data-parent="#sidebar"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-default.html">
                          Revenue
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-analytics.html">
                          Expense
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-saas.html">
                          My Expenses
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="#dashboards"
                      data-toggle="collapse"
                      class="sidebar-link collapsed"
                    >
                      <i class="align-middle" data-feather="lock"></i>{" "}
                      <span class="align-middle">Admin</span>
                    </a>
                    <ul
                      id="dashboards"
                      class="sidebar-dropdown list-unstyled collapse "
                      data-parent="#sidebar"
                    >
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-default.html">
                          Revenue
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-analytics.html">
                          Expense
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a class="sidebar-link" href="dashboard-saas.html">
                          My Expenses
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a class="sidebar-link" href="tables-bootstrap.html">
                      <i class="align-middle" data-feather="help-circle"></i>{" "}
                      <span class="align-middle">Help &amp; Feedback</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="main">
              <nav class="navbar navbar-expand navbar-light navbar-bg">
                <a class="sidebar-toggle">
                  <i class="hamburger align-self-center"></i>
                </a>
                <form class="d-none d-sm-inline-block">
                  <div class="input-group input-group-navbar">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn" type="button">
                        <i class="align-middle" data-feather="search"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div class="navbar-collapse collapse">
                  <ul class="navbar-nav navbar-align">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle d-none d-sm-inline-block"
                        href="#"
                        data-toggle="dropdown"
                      >
                        <img
                          src={avatar}
                          class="avatar img-fluid rounded-circle mr-1"
                          alt="Jerome Bell"
                        />{" "}
                        <span class="text-dark">Jerome Bell</span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="pages-profile.html">
                          <i class="align-middle mr-1" data-feather="user"></i>{" "}
                          Profile
                        </a>
                        <a class="dropdown-item" href="#">
                          <i
                            class="align-middle mr-1"
                            data-feather="pie-chart"
                          ></i>{" "}
                          Analytics
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="pages-settings.html">
                          Settings & Privacy
                        </a>
                        <a class="dropdown-item" href="#">
                          Help
                        </a>
                        <a class="dropdown-item" href="#">
                          Sign out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <main class="content">
                <div class="container-fluid p-0">
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <div class="row">
                            <div class="col-4 text-left">
                            <a class="text-light text-left" href="#">
                                <i class="align-middle" data-feather="plus"></i>{" "}
                                <span class="align-middle">
                                  Add Revenue Payment
                                </span>
                              </a>
                            </div>
                            <div class="col-4 text-center">
                            <span class="align-middle text-light h2">Revenue Payments</span>
                            </div>
                            <div class="col-4 text-right">
                              <a class="text-light text-right" href="#">
                                <i
                                  class="align-middle"
                                  data-feather="maximize-2"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <table
                            id="datatables-reponsive"
                            class="table table-striped table-hover"
                            style={{width: "100%"}}
                          >
                            <thead>
                              <tr>
                                <th></th>
                                <th class="text-center">Date</th>
                                <th class="text-center">ID</th>
                                <th class="text-center">Asset</th>
                                <th class="text-center">Payer</th>
                                <th class="text-center">Payee</th>
                                <th class="text-center">Interest</th>
                                <th class="text-center">Amount</th>
                                <th class="text-center">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th class="text-center">1</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Tracts - Acme Parcel</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$320,800</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">2</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Leases - Jonas Lease</td>
                                <td>Payer2</td>
                                <td>Payee2</td>
                                <td>ORRI</td>
                                <td>$170,750</td>
                                <td>This is a test description.</td>
                              </tr>
                              <tr>
                                <th class="text-center">3</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Smith Sontract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$86,000</td>
                                <td>This is a test description.</td>
                              </tr>
                              <tr>
                                <th class="text-center">4</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Thomas Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$433,060</td>
                                <td>This is a test description.</td>
                              </tr>
                              <tr>
                                <th class="text-center">5</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$162,700</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">6</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test2 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$372,000</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">7</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test3 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$137,500</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">8</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test4 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$327,900</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">9</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Dpcuments - Test5 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$205,500</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">10</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Leases - McCarthy Lease</td>
                                <td>Payer2</td>
                                <td>Payee2</td>
                                <td>ORRI</td>
                                <td>$103,600</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">11</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test6 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$90,560</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">12</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test7 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$342,000</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">13</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test8 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$470,600</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">14</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test9 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$313,500</td>
                                <td></td>
                              </tr>
                              <tr>
                                <th class="text-center">15</th>
                                <td>1 Jun 2021</td>
                                <td>R-D7EEDDBA</td>
                                <td>Documents - Test10 Contract</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$385,750</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer class="footer">
                <div class="container-fluid">
                  <div class="row text-muted">
                    <div class="col-6 text-left"></div>
                    <div class="col-6 text-right">
                      <a class="text-muted" href="#">
                        <span class="align-middle">Help</span>{" "}
                        <i class="align-middle" data-feather="help-circle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
