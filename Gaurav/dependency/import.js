let navbar = () => {
  return `
  <nav id="h_navbar">
  <div class="h_nav-container">
    <div class="h_menu-container">
      <div class="h_unbounce-icon-left">
        <a href="/">
          <!-- <img class="dark-logo" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1" width="160" height="32" alt="unbounce"> -->
          <img
            class="d-none white-logo"
            src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1"
            width="170"
            height="40"
            alt="unbounce"
          />
        </a>
      </div>

      <div class="h_menu-listings">
        <div class="h_dropdown">
          <button class="h_dropbtn">
            Products<span
              ><svg
                id="h_arrow"
                style="margin-bottom: -4px"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                ></path></svg
            ></span>
          </button>
          <div class="h_dropdown-content">
            <div class="h_main-dropdown-content">
              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Conversion Intelligence Platform</h3>
                  <p>
                    The AI powered platform for effortlessly creating your
                    highest converting maketing campaigns.
                  </p>
                </div>
                <br />
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 4H22V20H2V4ZM16 18V6H4V18H16Z"
                            fill="currentColor"
                          ></path></svg></span
                      >Smart Builder <span id="h_highlight_beta"> Beta</span>
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13 7H7V5H13V7Z" fill="currentColor"></path>
                          <path
                            d="M13 11H7V9H13V11Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M7 15H13V13H7V15Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
                            fill="currentColor"
                          ></path></svg></span
                      >Smart Copy <span id="h_highlight">New</span>
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon3"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.2"
                          baseProfile="tiny"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z"
                          ></path></svg></span
                      >Smart Traffic
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon4"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.491 1c-3.598.004-6.654 1.983-8.835 4H1.5l-.5.5v3l.147.354.991.991.001.009 4 4 .009.001.999.999L7.5 15h3l.5-.5v-4.154c2.019-2.178 3.996-5.233 3.992-8.846l-.501-.5zM2 6h2.643a23.828 23.828 0 0 0-2.225 2.71L2 8.294V6zm5.7 8l-.42-.423a23.59 23.59 0 0 0 2.715-2.216V14H7.7zm-1.143-1.144L3.136 9.437C4.128 8 8.379 2.355 13.978 2.016c-.326 5.612-5.987 9.853-7.421 10.84zM4 15v-1H2v-2H1v3h3zm6.748-7.667a1.5 1.5 0 1 0-2.496-1.666 1.5 1.5 0 0 0 2.495 1.666z"
                          ></path></svg></span
                      >Conversion Intelligence Features
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon5"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                          ></path></svg></span
                      >Unbounce Apps <span id="h_highlight">New</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Classic Unbounce</h3>
                  <p>
                    The original drag and drop landing page platform for
                    experienced marketers.
                  </p>
                </div>
                <br />

                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon1"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke="#000"
                            stroke-width="2"
                            d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"
                          ></path></svg></span
                      >Classic Builder
                    </h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.2"
                          baseProfile="tiny"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6h-13c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h9c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm1 10c0 .542-.458 1-1 1h-13c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h13c.542 0 1 .458 1 1v7zM7 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM11.5 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM16 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
                          ></path></svg></span
                      >Popups & Sticky Bars
                    </h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon3"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4V16H22V2H8V4H20Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M17 7H5V5H19V19H17V7Z"
                            fill="currentColor"
                          ></path></svg></span
                      >Templates
                    </h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon4"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.2"
                          baseProfile="tiny"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z"
                          ></path></svg></span
                      >Classic Unbounce Features
                    </h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon5"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"
                          ></path></svg
                      ></span>
                      Unbounce Integrations
                    </h3>
                  </div>
                </div>
              </div>

              <div class="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Conversion Intelligence Platform</h3>
                  <p>
                    The AI powered platform for effortlessly creating your
                    highest converting maketing campaigns.
                  </p>
                </div>
                <div class="h_mdc-col1-pt2 h_learnmore">
                  <a href=""><p>Learn More</p></a>
                  <br />
                  <img
                    style="width: 340px"
                    src="	https://unbounce.com/photos/Feature_IMG-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="h_dropdown">
          <button class="h_dropbtn">
            Solutions<span
              ><svg
                id="h_arrow"
                style="margin-bottom: -4px"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                ></path></svg
            ></span>
          </button>
          <div style="margin-left: 2px" class="h_dropdown-content">
            <div style="width: 600px" class="h_main-dropdown-content">
              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>By Industry</h3>
                </div>
                <br />
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"
                          ></path></svg></span
                      >Ecommerce
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"
                          ></path></svg></span
                      >SaaS
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon3"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path></svg></span
                      >Agencies
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon4"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M.125 11.17A.5.5 0 01.5 11H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 16H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zM3.81.563A1.5 1.5 0 014.98 0h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624A.5.5 0 0011.02 1H4.98a.5.5 0 00-.39.188L.89 5.812a.5.5 0 11-.78-.624L3.81.563z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M.125 5.17A.5.5 0 01.5 5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0110 5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 10H1.883A1.5 1.5 0 01.394 8.686l-.39-3.124a.5.5 0 01.121-.393z"
                            clip-rule="evenodd"
                          ></path></svg></span
                      >Small Business
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon5"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm6.854.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z"
                            clip-rule="evenodd"
                          ></path></svg></span
                      >Professional Services
                    </h3>
                  </div>
                </div>
              </div>

              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>By Use Case</h3>
                </div>
                <br />
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
                          ></path>
                          <path d="M13 13l6 6"></path></svg></span
                      >PPC
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon2"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21,5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5z M5,19V5h14l0.002,14H5 z"
                          ></path>
                          <path
                            d="M7 7H8.998V9H7zM11 7H17V9H11zM7 11H8.998V13H7zM11 11H17V13H11zM7 15H8.998V17H7zM11 15H17V17H11z"
                          ></path></svg></span
                      >Social Ads
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon3"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
                          ></path></svg></span
                      >Email Marketing
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon4"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
                            clip-rule="evenodd"
                          ></path></svg></span
                      >Lead Generation
                    </h3>
                  </div>

                  <div id="h_line">
                    <h3>
                      <span id="h_line-icon5"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z"
                          ></path></svg></span
                      >Sell Online
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="h_dropdown">
          <button class="h_dropbtn">Pricing</button>
        </div>

        <div class="h_dropdown">
          <button class="h_dropbtn">
            Learn<span
              ><svg
                id="h_arrow"
                style="margin-bottom: -4px"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                ></path></svg
            ></span>
          </button>
          <div style="margin-left: -570px" class="h_dropdown-content">
            <div class="h_main-dropdown-content">
              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Conversion Intelligence Resources</h3>
                  <p style="margin-top: 15px">
                    Learn How AI can help you get more leads, sign-ups, and
                    sales from your campaigns
                  </p>
                </div>
                <br />
                <div class="h_mdc-col1-pt2">
                  <div id="h_line" style="margin-top: 10px">
                    <h3>What is Conversion Itelligence?</h3>
                  </div>

                  <div style="margin-top: 10px" id="h_line">
                    <h3>The Ultimate Optimization Guide</h3>
                  </div>

                  <div style="margin-top: 10px" id="h_line">
                    <h3>Why AI in Marketing Matters</h3>
                  </div>

                  <div style="margin-top: 10px" id="h_line">
                    <h3>Conversion Benchmark Report</h3>
                  </div>

                  <div style="margin-top: 10px" id="h_line">
                    <h3>Comversation Insights</h3>
                  </div>
                </div>
              </div>

              <div class="h_mdc-col1" id="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Marketing Fundamentals</h3>
                  <p style="margin-top: 15px">
                    Explore a library of resources to help you build
                    higher-converting landing pages and grow your business.
                  </p>
                </div>
                <br />

                <div class="h_mdc-col1-pt2">
                  <div style="margin-top: 10px" id="h_line">
                    <h3>What is a Landing Page?</h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line"><h3>Landing Page Examples</h3></div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line">
                    <h3>Customer Stories & Case Studies</h3>
                  </div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line"><h3>Blog</h3></div>
                </div>
                <div class="h_mdc-col1-pt2">
                  <div id="h_line"><h3>Resource Library</h3></div>
                </div>
              </div>

              <div class="h_mdc-col1">
                <div class="h_mdc-col1-pt1">
                  <h3>Join the All-New Unbounce Community</h3>
                  <p>
                    Head over to the Unbounce Community to build your business,
                    make connections, and grow smarter together.
                  </p>
                </div>
                <div style="margin-top: 5px" class="h_mdc-col1-pt2 h_learnmore">
                  <a href=""><p>Learn More</p></a>
                  <br />
                  <img
                    style="width: 340px"
                    src="https://unbounce.com/photos/big-Learn-Dropmenu-Image.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="h_dropdown">
          <button class="h_dropbtn">Contact</button>
        </div>
      </div>
    </div>

    <div class="h_search-login">
      <div class="h_search-container">
        <div class="h_search-icon-btn">
          <i style="color: white" class="fa fa-search"></i>
        </div>
        <div class="h_search-input">
          <input type="search" class="h_search-bar" placeholder="Search..." />
        </div>
      </div>
      <div class="h_login">
        <button id="h_loginbtn">Log In</button>
      </div>
      <div class="h_free-trial-btn">
        <button>Start My Free Trial</button>
      </div>
    </div>
  </div>
</nav>
`;
};

export default navbar;
