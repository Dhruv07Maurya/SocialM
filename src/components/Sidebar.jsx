import React from "react";

const Sidebar = ({state,setState}) => {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{width: "280px",height:"500px"}}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg class="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a onClick={()=>setState("Home")} href="#1" class={`nav-link ${state=='Home'&& "active"} text-white`} aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Posts
            </a>
          </li>
          <li>
            <a onClick={()=>setState("Post")} href="#2" class={`nav-link ${state=='Post'&& "active"} text-white`}>
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Create-Post
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
