import Link from "next/link";
function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
      </Link>

      <hr className="sidebar-divider my-0"></hr>

      <li className="nav-item active">
        <Link href="/admin/dashboard">
          <a className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>

      <hr className="sidebar-divider"></hr>

      <div className="sidebar-heading">Actions</div>

      <li className="nav-item">
        <a className="nav-link collapsed">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>

      <li className="nav-item">
        <Link href="/admin/dashboard/capex">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Solicitudes CAPEX</span>
          </a>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block"></hr>
      <style jsx>
        {`
          .bg-gradient-primary {
            background-color: #4e73df;
            background-image: linear-gradient(
              180deg,
              #4e73df 10%,
              #224abe 100%
            );
            background-size: cover;
          }

          .sidebar {
            width: 6.5rem;
            min-height: 100vh;
          }

          .sidebar .nav-item {
            position: relative;
          }

          .sidebar .nav-item:last-child {
            margin-bottom: 1rem;
          }

          .sidebar .nav-item .nav-link {
            text-align: center;
            padding: 0.75rem 1rem;
            width: 6.5rem;
          }

          .sidebar .nav-item .nav-link span {
            font-size: 0.65rem;
            display: block;
          }

          .sidebar .nav-item.active .nav-link {
            font-weight: 700;
          }

          .sidebar .nav-item .collapse {
            position: absolute;
            left: calc(6.5rem + 1.5rem / 2);
            z-index: 1;
            top: 2px;
          }

          .sidebar .nav-item .collapse .collapse-inner {
            border-radius: 0.35rem;
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
          }

          .sidebar .nav-item .collapsing {
            display: none;
            transition: none;
          }

          .sidebar .nav-item .collapse .collapse-inner,
          .sidebar .nav-item .collapsing .collapse-inner {
            padding: 0.5rem 0;
            min-width: 10rem;
            font-size: 0.85rem;
            margin: 0 0 1rem 0;
          }

          .sidebar .nav-item .collapse .collapse-inner .collapse-header,
          .sidebar .nav-item .collapsing .collapse-inner .collapse-header {
            margin: 0;
            white-space: nowrap;
            padding: 0.5rem 1.5rem;
            text-transform: uppercase;
            font-weight: 800;
            font-size: 0.65rem;
            color: #b7b9cc;
          }

          .sidebar .nav-item .collapse .collapse-inner .collapse-item,
          .sidebar .nav-item .collapsing .collapse-inner .collapse-item {
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            display: block;
            color: #3a3b45;
            text-decoration: none;
            border-radius: 0.35rem;
            white-space: nowrap;
          }

          .sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
          .sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
            background-color: #eaecf4;
          }

          .sidebar .nav-item .collapse .collapse-inner .collapse-item:active,
          .sidebar .nav-item .collapsing .collapse-inner .collapse-item:active {
            background-color: #dddfeb;
          }

          .sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
          .sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
            color: #4e73df;
            font-weight: 700;
          }

          .sidebar #sidebarToggle {
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            margin-bottom: 1rem;
            cursor: pointer;
          }

          .sidebar #sidebarToggle::after {
            font-weight: 900;
            content: "\f104";
            font-family: "Font Awesome 5 Free";
            margin-right: 0.1rem;
          }

          .sidebar #sidebarToggle:hover {
            text-decoration: none;
          }

          .sidebar #sidebarToggle:focus {
            outline: 0;
          }

          .sidebar.toggled {
            width: 0 !important;
            overflow: hidden;
          }

          .sidebar.toggled #sidebarToggle::after {
            content: "\f105";
            font-family: "Font Awesome 5 Free";
            margin-left: 0.25rem;
          }

          .sidebar .sidebar-brand {
            height: 4.375rem;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 800;
            padding: 1.5rem 1rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            z-index: 1;
          }

          .sidebar .sidebar-brand .sidebar-brand-icon i {
            font-size: 2rem;
          }

          .sidebar .sidebar-brand .sidebar-brand-text {
            display: none;
          }

          .sidebar hr.sidebar-divider {
            margin: 0 1rem 1rem;
          }

          .sidebar .sidebar-heading {
            text-align: center;
            padding: 0 1rem;
            font-weight: 800;
            font-size: 0.65rem;
          }

          @media (min-width: 768px) {
            .sidebar {
              width: 14rem !important;
            }
            .sidebar .nav-item .collapse {
              position: relative;
              left: 0;
              z-index: 1;
              top: 0;
              -webkit-animation: none;
              animation: none;
            }
            .sidebar .nav-item .collapse .collapse-inner {
              border-radius: 0;
              box-shadow: none;
            }
            .sidebar .nav-item .collapsing {
              display: block;
              transition: height 0.15s ease;
            }
            .sidebar .nav-item .collapse,
            .sidebar .nav-item .collapsing {
              margin: 0 1rem;
            }
            .sidebar .nav-item .nav-link {
              display: block;
              width: 100%;
              text-align: left;
              padding: 1rem;
              width: 14rem;
            }
            .sidebar .nav-item .nav-link i {
              font-size: 0.85rem;
              margin-right: 0.25rem;
            }
            .sidebar .nav-item .nav-link span {
              font-size: 0.85rem;
              display: inline;
            }
            .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
              width: 1rem;
              text-align: center;
              float: right;
              vertical-align: 0;
              border: 0;
              font-weight: 900;
              content: "\f107";
              font-family: "Font Awesome 5 Free";
            }
            .sidebar
              .nav-item
              .nav-link[data-toggle="collapse"].collapsed::after {
              content: "\f105";
            }
            .sidebar .sidebar-brand .sidebar-brand-icon i {
              font-size: 2rem;
            }
            .sidebar .sidebar-brand .sidebar-brand-text {
              display: inline;
            }
            .sidebar .sidebar-heading {
              text-align: left;
            }
            .sidebar.toggled {
              overflow: visible;
              width: 6.5rem !important;
            }
            .sidebar.toggled .nav-item .collapse {
              position: absolute;
              left: calc(6.5rem + 1.5rem / 2);
              z-index: 1;
              top: 2px;
              -webkit-animation-name: growIn;
              animation-name: growIn;
              -webkit-animation-duration: 0.2s;
              animation-duration: 0.2s;
              -webkit-animation-timing-function: transform
                  cubic-bezier(0.18, 1.25, 0.4, 1),
                opacity cubic-bezier(0, 1, 0.4, 1);
              animation-timing-function: transform
                  cubic-bezier(0.18, 1.25, 0.4, 1),
                opacity cubic-bezier(0, 1, 0.4, 1);
            }
            .sidebar.toggled .nav-item .collapse .collapse-inner {
              box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
              border-radius: 0.35rem;
            }
            .sidebar.toggled .nav-item .collapsing {
              display: none;
              transition: none;
            }
            .sidebar.toggled .nav-item .collapse,
            .sidebar.toggled .nav-item .collapsing {
              margin: 0;
            }
            .sidebar.toggled .nav-item:last-child {
              margin-bottom: 1rem;
            }
            .sidebar.toggled .nav-item .nav-link {
              text-align: center;
              padding: 0.75rem 1rem;
              width: 6.5rem;
            }
            .sidebar.toggled .nav-item .nav-link span {
              font-size: 0.65rem;
              display: block;
            }
            .sidebar.toggled .nav-item .nav-link i {
              margin-right: 0;
            }
            .sidebar.toggled
              .nav-item
              .nav-link[data-toggle="collapse"]::after {
              display: none;
            }
            .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
              font-size: 2rem;
            }
            .sidebar.toggled .sidebar-brand .sidebar-brand-text {
              display: none;
            }
            .sidebar.toggled .sidebar-heading {
              text-align: center;
            }
          }

          .sidebar-light .sidebar-brand {
            color: #6e707e;
          }

          .sidebar-light hr.sidebar-divider {
            border-top: 1px solid #eaecf4;
          }

          .sidebar-light .sidebar-heading {
            color: #b7b9cc;
          }

          .sidebar-light .nav-item .nav-link {
            color: #858796;
          }

          .sidebar-light .nav-item .nav-link i {
            color: #d1d3e2;
          }

          .sidebar-light .nav-item .nav-link:active,
          .sidebar-light .nav-item .nav-link:focus,
          .sidebar-light .nav-item .nav-link:hover {
            color: #6e707e;
          }

          .sidebar-light .nav-item .nav-link:active i,
          .sidebar-light .nav-item .nav-link:focus i,
          .sidebar-light .nav-item .nav-link:hover i {
            color: #6e707e;
          }

          .sidebar-light .nav-item .nav-link[data-toggle="collapse"]::after {
            color: #b7b9cc;
          }

          .sidebar-light .nav-item.active .nav-link {
            color: #6e707e;
          }

          .sidebar-light .nav-item.active .nav-link i {
            color: #6e707e;
          }

          .sidebar-light #sidebarToggle {
            background-color: #eaecf4;
          }

          .sidebar-light #sidebarToggle::after {
            color: #b7b9cc;
          }

          .sidebar-light #sidebarToggle:hover {
            background-color: #dddfeb;
          }

          .sidebar-dark .sidebar-brand {
            color: #fff;
          }

          .sidebar-dark hr.sidebar-divider {
            border-top: 1px solid rgba(255, 255, 255, 0.15);
          }

          .sidebar-dark .sidebar-heading {
            color: rgba(255, 255, 255, 0.4);
          }

          .sidebar-dark .nav-item .nav-link {
            color: rgba(255, 255, 255, 0.8);
          }

          .sidebar-dark .nav-item .nav-link i {
            color: rgba(255, 255, 255, 0.3);
          }

          .sidebar-dark .nav-item .nav-link:active,
          .sidebar-dark .nav-item .nav-link:focus,
          .sidebar-dark .nav-item .nav-link:hover {
            color: #fff;
          }

          .sidebar-dark .nav-item .nav-link:active i,
          .sidebar-dark .nav-item .nav-link:focus i,
          .sidebar-dark .nav-item .nav-link:hover i {
            color: #fff;
          }

          .sidebar-dark .nav-item .nav-link[data-toggle="collapse"]::after {
            color: rgba(255, 255, 255, 0.5);
          }

          .sidebar-dark .nav-item.active .nav-link {
            color: #fff;
          }

          .sidebar-dark .nav-item.active .nav-link i {
            color: #fff;
          }

          .sidebar-dark #sidebarToggle {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .sidebar-dark #sidebarToggle::after {
            color: rgba(255, 255, 255, 0.5);
          }

          .sidebar-dark #sidebarToggle:hover {
            background-color: rgba(255, 255, 255, 0.25);
          }

          .sidebar-dark.toggled #sidebarToggle::after {
            color: rgba(255, 255, 255, 0.5);
          }
        `}
      </style>
    </ul>
  );
}

export default Sidebar;
