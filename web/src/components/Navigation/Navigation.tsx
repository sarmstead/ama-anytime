interface INavigation {
  className?: string
  notifications?: number
}

const Navigation = ({
  className = '',
  notifications = null,
}: INavigation): JSX.Element => {
  return (
    <div className={className}>
      <svg
        className="mx-auto relative"
        width="374"
        height="722"
        viewBox="0 0 374 722"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="nav">
          <path
            id="arrow"
            d="M64.5428 238.813L92.7664 240.479L70.0718 394.639L309.385 409.002L315.696 384.269L349.104 424.783L306.818 447.013L309.159 428.523L18.5343 429.368L64.5428 238.813ZM287.819 413.856C284.668 413.627 282.34 415.763 281.989 418.537C282.166 421.568 284.3 423.919 287.452 424.147C290.603 424.376 293.322 422.104 293.145 419.073C293.496 416.299 290.833 413.691 287.819 413.856ZM267.738 412.892C264.586 412.663 262.258 414.799 262.044 417.967C262.085 420.604 264.356 423.348 267.37 423.183C270.522 423.412 273.241 421.14 273.201 418.502C273.415 415.335 270.889 413.121 267.738 412.892ZM247.794 412.321C244.642 412.093 242.314 414.228 241.963 417.002C242.141 420.033 244.275 422.384 247.426 422.612C250.577 422.841 253.297 420.569 253.119 417.538C253.471 414.764 250.808 412.156 247.794 412.321ZM227.712 411.357C224.561 411.128 221.842 413.4 222.019 416.432C222.059 419.069 224.331 421.813 227.345 421.648C230.496 421.877 233.216 419.605 233.175 416.967C233.389 413.8 230.863 411.586 227.712 411.357ZM207.768 410.787C204.617 410.558 201.897 412.83 201.938 415.467C201.724 418.635 204.25 420.849 207.401 421.078C210.552 421.306 213.271 419.034 213.094 416.003C213.445 413.229 210.782 410.621 207.768 410.787ZM187.687 409.822C184.536 409.593 181.816 411.865 181.994 414.897C181.642 417.67 184.305 420.278 187.319 420.113C190.471 420.342 193.19 418.07 193.15 415.432C193.364 412.265 190.838 410.051 187.687 409.822ZM167.743 409.252C164.591 409.023 161.872 411.295 161.912 413.932C161.698 417.1 164.224 419.314 167.375 419.543C170.526 419.771 173.246 417.499 173.069 414.468C173.028 411.831 170.757 409.086 167.743 409.252ZM147.661 408.287C144.51 408.058 141.791 410.33 141.968 413.362C141.617 416.135 144.28 418.743 147.294 418.578C150.445 418.807 152.773 416.671 153.124 413.898C152.947 410.866 150.813 408.516 147.661 408.287ZM127.717 407.717C124.566 407.488 121.846 409.76 121.887 412.397C121.673 415.565 124.199 417.779 127.35 418.008C130.501 418.237 132.829 416.101 133.043 412.933C133.003 410.296 130.731 407.551 127.717 407.717ZM107.636 406.752C104.485 406.523 101.765 408.795 101.943 411.827C101.592 414.6 104.254 417.208 107.268 417.043C110.42 417.272 112.748 415.136 113.099 412.363C112.921 409.331 110.787 406.981 107.636 406.752ZM87.6917 406.182C84.5405 405.953 81.821 408.225 81.8613 410.862C81.6474 414.03 84.1732 416.244 87.3244 416.473C90.4755 416.702 92.6665 414.172 93.0176 411.398C92.9773 408.761 90.7057 406.016 87.6917 406.182ZM67.6104 405.217C64.0678 405.125 61.3483 407.397 61.3886 410.034C61.1747 413.202 63.7005 415.416 67.243 415.508C70.3942 415.737 72.7224 413.601 73.0734 410.828C72.896 407.796 70.7616 405.446 67.6104 405.217ZM46.8633 403.601C44.1035 403.236 41.384 405.508 40.7787 408.811C40.4075 410.266 40.5648 411.979 41.3677 413.025C42.3078 414.466 43.7563 414.845 45.459 414.694C49.0016 414.787 51.7211 412.515 51.6808 409.878C51.6606 408.559 51.5033 406.846 50.7004 405.8C49.7603 404.36 48.3118 403.98 46.8633 403.601ZM50.8864 383.642C47.9894 382.882 45.1327 384.76 44.6445 387.14C44.0392 390.443 46.0565 393.718 48.8163 394.083C51.7133 394.843 54.4328 392.57 55.0381 389.267C55.3892 386.493 53.6462 384.007 50.8864 383.642ZM54.0298 366.198C51.27 365.833 48.4133 367.711 47.9251 370.09C47.574 372.864 49.317 375.35 52.214 376.109C54.9738 376.475 57.4391 374.733 58.3188 372.217C58.6698 369.444 56.9268 366.957 54.0298 366.198ZM57.3105 349.149C54.5506 348.784 51.5568 350.267 51.2057 353.041C50.7174 355.42 52.5976 358.301 55.3574 358.666C58.2544 359.425 60.7197 357.683 61.4622 354.774C61.9504 352.394 60.0703 349.514 57.3105 349.149ZM60.5911 332.099C57.6941 331.34 55.2288 333.082 54.4863 335.991C53.998 338.371 55.741 340.857 58.638 341.617C61.3979 341.982 64.3917 340.498 64.7428 337.724C65.0939 334.951 63.3509 332.464 60.5911 332.099ZM63.7345 314.656C60.9747 314.291 58.5094 316.032 57.6297 318.548C57.2787 321.321 59.0217 323.808 61.9187 324.567C64.6785 324.932 67.5352 323.054 68.0234 320.675C68.3745 317.901 66.6315 315.415 63.7345 314.656ZM67.0151 297.606C64.2553 297.241 61.6528 298.589 60.9104 301.499C60.5593 304.272 62.3023 306.759 65.0621 307.124C67.9591 307.883 70.8158 306.005 71.1669 303.231C71.6551 300.852 69.9121 298.366 67.0151 297.606ZM70.2957 280.557C67.3987 279.798 64.9334 281.539 64.191 284.449C63.7027 286.828 65.5829 289.709 68.3427 290.074C71.2397 290.833 74.0964 288.955 74.4475 286.182C74.9357 283.803 73.0556 280.922 70.2957 280.557ZM73.5763 263.508C70.6794 262.748 68.2141 264.49 67.7258 266.869C66.9833 269.779 68.7263 272.266 71.6233 273.025C74.3831 273.39 77.377 271.906 77.7281 269.133C78.0792 266.359 76.3362 263.873 73.5763 263.508Z"
            fill="black"
          />
          <g id="logo">
            <g id="bg__logo">
              <path
                id="outside"
                d="M348.023 75.504L348.023 75.5068L348.023 75.504ZM370.401 98.125L370.414 98.0723L370.424 98.0192C373.212 83.8729 362.025 70.721 347.629 72.9123L347.615 72.9144L20.4876 124.469L20.4605 124.473L20.4335 124.478C8.3882 126.635 0.518908 139.528 4.78358 151.177L46.2771 280.639L46.2907 280.681L46.3057 280.723C49.1413 288.636 56.9135 294.408 65.5044 294.408H307.752C317.106 294.408 324.919 287.83 327.036 278.548C327.037 278.543 327.038 278.539 327.039 278.534L370.401 98.125Z"
                fill="#D9D9D9"
                stroke="#7D7E34"
                strokeWidth="5.24878"
              />
              <path
                id="inside"
                d="M68.4275 288.139H304.858C312.719 288.139 319.371 282.697 321.185 274.836L363.512 101.293C365.931 89.199 356.256 78.3148 344.163 80.1288L24.8904 129.713C14.6108 131.527 7.9593 142.411 11.5874 152.086L52.1011 276.65C54.5198 283.302 61.1713 288.139 68.4275 288.139Z"
                fill="#6EA5A0"
              />
            </g>
            <g id="anytime">
              <path
                d="M62.7171 267.093C67.0632 267.093 74.6983 260.515 78.8095 254.525C76.6951 257.696 75.7554 259.106 75.4031 261.103C74.9332 264.039 79.1619 267.093 82.8032 267.093C87.9715 267.093 93.2573 259.341 99.7178 252.645C99.1305 251.471 98.4257 251.353 97.486 252.293C93.3748 256.404 88.4414 260.868 85.3874 262.512C83.273 263.687 82.8032 262.865 83.1556 261.103C84.5651 252.645 102.654 233.147 106.531 230.21C104.886 228.213 98.8955 225.981 96.0764 229.035L95.2542 230.093C94.432 227.626 88.7938 225.511 86.9144 225.511C78.5745 225.511 57.4313 249.709 55.6694 260.163C55.0821 263.687 59.7805 267.093 62.7171 267.093ZM63.7743 262.512C62.952 262.512 63.0695 262.042 63.187 261.572C64.1267 256.169 81.746 235.261 86.0921 232.442C88.5588 230.68 93.3748 231.032 93.0224 232.794C82.8032 245.245 67.2981 262.512 63.7743 262.512Z"
                fill="#2D2D2B"
              />
              <path
                d="M120.855 267.093C128.372 267.093 131.309 259.341 137.769 252.645C137.182 251.471 136.477 251.353 135.537 252.293C131.309 256.287 124.378 262.512 122.382 262.512C121.442 262.512 120.972 261.925 121.207 260.515C122.617 252.88 140.001 238.08 140.001 233.029C140.001 229.858 135.068 225.864 132.366 225.864C129.664 225.864 120.972 235.261 113.337 242.896C117.918 237.023 121.912 232.089 122.851 229.858C123.791 227.508 120.15 224.924 116.156 226.569C113.807 233.969 92.4287 256.404 92.4287 260.515C92.3112 263.687 96.07 266.506 99.359 266.506C99.359 261.455 127.432 230.093 132.483 230.093C133.071 230.093 133.306 230.327 133.071 231.032C132.718 233.616 112.162 251.118 112.162 258.753C112.162 261.69 117.213 267.093 120.855 267.093Z"
                fill="#2D2D2B"
              />
              <path
                d="M119.604 307.5C133.464 307.5 151.554 268.15 182.799 228.448C182.329 225.629 175.868 221.048 173.049 224.572C167.881 234.908 148.852 260.515 140.63 260.515C140.042 260.515 140.042 260.28 140.042 259.576C140.042 254.407 161.655 235.026 161.655 229.505C161.655 226.569 158.366 223.045 154.138 223.984C152.728 231.62 132.642 250.414 132.642 257.579C132.642 260.75 138.75 265.919 141.452 265.919C143.214 265.919 148.969 261.69 153.785 256.756C150.261 261.572 146.738 266.506 143.214 271.204C142.744 270.735 141.804 270.5 140.395 270.5C123.598 272.027 109.972 286.474 107.505 294.11C105.508 300.335 115.14 307.5 119.604 307.5ZM117.372 300.57C115.962 300.57 116.197 298.691 116.432 297.868C118.429 290.703 130.763 275.668 141.334 273.554C129.236 289.646 121.366 300.57 117.372 300.57Z"
                fill="#2D2D2B"
              />
              <path
                d="M181.795 266.858C187.55 266.858 200.824 252.175 200.824 250.531C200.824 249.474 199.531 248.652 198.944 249.121C191.192 256.874 184.261 260.163 181.56 260.163C179.915 260.163 179.328 259.341 179.328 257.696C179.328 253.468 192.484 239.842 201.059 229.388C203.995 229.035 205.287 228.8 207.519 229.153C208.694 228.213 209.751 225.864 208.928 225.511C207.989 225.159 206.462 225.042 204.582 225.042C208.576 219.873 210.221 217.876 210.221 215.527C210.221 213.883 207.636 210.476 203.173 211.064C202.116 215.527 200.119 218.816 196.125 224.337C194.246 223.984 192.249 223.397 190.134 222.575C187.433 223.867 185.201 227.626 187.433 229.975C187.903 230.562 189.43 230.68 191.309 230.562C184.026 239.607 170.871 248.887 170.636 254.055C170.401 260.515 178.153 266.858 181.795 266.858Z"
                fill="#2D2D2B"
              />
              <path
                d="M224.033 223.984C226.5 223.984 229.672 222.223 230.259 219.051C230.729 216.232 228.849 214.353 226.265 214.353C222.154 214.353 220.392 216.467 219.922 219.051C219.335 222.105 222.037 223.984 224.033 223.984ZM200.423 266.858C206.414 266.858 218.395 257.226 223.329 250.061L221.332 248.417C216.163 253.82 206.766 262.042 202.538 262.042C201.833 262.042 201.716 261.572 201.598 260.515C201.481 255.112 223.211 236.905 223.211 231.62C223.211 226.334 218.865 224.924 214.519 226.099C213.462 233.969 193.376 252.88 193.376 257.814C193.376 261.69 198.192 266.858 200.423 266.858Z"
                fill="#2D2D2B"
              />
              <path
                d="M261.153 267.093C266.322 267.093 271.608 259.341 275.719 252.645C275.131 251.471 274.309 251.236 273.487 252.293C269.141 257.579 262.328 262.512 260.331 262.512C259.391 262.512 258.922 261.925 259.157 260.515C260.566 252.88 277.951 237.728 277.951 233.029C277.951 230.093 273.017 225.864 270.315 225.864C268.084 225.864 261.388 232.442 255.163 238.902C257.277 235.966 258.922 233.499 259.157 231.854C259.391 229.858 255.398 225.864 252.696 225.864C250.464 225.864 243.182 232.442 236.486 239.02C239.775 234.908 242.477 231.62 243.182 229.858C244.121 227.508 240.48 224.924 236.486 226.569C230.496 237.375 212.759 253.35 212.759 259.341C212.759 263.687 215.343 267.211 219.689 266.506C226.619 251.823 249.994 230.093 252.696 230.093C253.283 230.093 253.518 230.327 253.283 231.032C252.931 233.616 231.318 252.88 231.318 260.045C231.318 263.217 235.547 266.506 239.305 265.566C246.118 250.883 267.731 230.093 270.433 230.093C271.02 230.093 271.255 230.327 271.02 231.032C270.668 233.616 249.994 251.353 249.994 257.579C249.994 262.865 256.337 267.093 261.153 267.093Z"
                fill="#2D2D2B"
              />
              <path
                d="M279.857 267.093C286.905 267.093 301.236 256.991 308.401 249.591C309.341 248.299 308.048 247.947 306.991 247.712C299.356 255.464 285.496 262.395 279.74 262.395C277.156 262.395 277.273 258.518 278.8 255.934C279.388 256.756 280.445 257.344 281.502 257.344C290.547 257.344 308.401 241.134 309.81 232.794C310.398 229.27 305.699 224.924 302.645 224.924C291.369 224.924 270.46 245.245 270.46 257.226C270.46 261.338 275.041 267.093 279.857 267.093ZM280.21 253.468C286.67 243.248 299.356 229.035 304.29 229.035C304.994 229.035 304.994 229.623 304.877 230.093C303.937 235.378 288.432 249.356 280.21 253.468Z"
                fill="#2D2D2B"
              />
            </g>
            <g id="AMA">
              <path
                id="a__bg"
                d="M93.7997 214.936H99.9335V173.459L130.018 169.954L144.039 41.7285L99.9335 38.2235V11.9357H93.7997V37.6393L50.2788 34.1342L64.591 177.549L93.7997 174.044V214.936Z"
                fill="black"
              />
              <path
                id="m__bg"
                d="M169.636 220.936H176.548V187.054L224.6 185.593L207.156 53.2781L176.548 44.5155V17.9357H169.636V42.4709L143.306 34.5846L123.888 189.098L169.636 187.346V220.936Z"
                fill="black"
              />
              <path
                id="a__bg_2"
                d="M241.875 214.936H248.009V173.167L281.307 174.92L288.609 39.976L248.009 38.2235V11.9357H241.875V38.2235L204.488 36.763L219.969 171.415L241.875 172.875V214.936Z"
                fill="black"
              />
              <path
                id="A"
                d="M103.604 141.544H134.822V135.922L128.197 136.324L105.31 65.6548H78.7088L79.3111 73.1834L91.4573 71.6777L72.987 134.015L64.6553 133.513V139.034H90.7546V133.513L81.3187 134.015L86.3378 115.545H104.005L109.626 136.223L103.604 135.922V141.544ZM88.0443 109.221L95.1714 83.322L102.198 109.221H88.0443Z"
                fill="#E6A311"
              />
              <path
                id="A_2"
                d="M255.897 127.514H287.116V121.893L280.491 122.294L257.604 51.6255H231.003L231.605 59.1541L243.751 57.6484L225.281 119.986L216.949 119.484V125.005H243.049V119.484L233.613 119.986L238.632 101.515H256.299L261.92 122.194L255.897 121.893V127.514ZM240.338 95.1913L247.465 69.2927L254.492 95.1913H240.338Z"
                fill="#E6A311"
              />
              <path
                id="M"
                d="M134.032 154.835H167.761V148.913L157.321 149.716L158.626 107.756L170.17 142.288L181.011 142.087L193.458 106.953V148.612L183.922 147.909V153.832H217.651V147.909L207.412 148.612L211.527 90.5908L220.562 91.1931V85.2705H185.528V91.1931L193.358 90.5908L193.157 90.9923L175.791 124.821L159.228 88.7839V87.8805L166.456 88.4828V82.4598H132.125V88.4828L140.055 87.8805L143.569 149.716L134.032 148.913V154.835Z"
                fill="#E6A311"
              />
            </g>
          </g>
          <g id="stars">
            <path
              id="star"
              d="M330.122 33.5641C330.379 30.8662 330.571 28.2325 330.7 25.5988C330.828 24.2499 330.893 22.9652 330.957 21.6162C331.021 20.8454 331.021 20.0745 331.021 19.3679L336.16 22.1943L337.509 22.9652L340.207 24.3784L340.271 24.3141C339.436 23.6718 338.665 23.0294 337.894 22.387C337.509 22.0659 337.059 21.7447 336.674 21.4877L335.518 20.5242C334.169 19.4964 332.884 18.4686 331.535 17.5051C331.985 17.0554 332.434 16.6058 332.884 16.0919L334.811 13.7794C336.096 12.2377 337.445 10.696 338.729 9.09014H338.665C337.059 10.3106 335.518 11.6596 333.976 12.9443C333.205 13.5867 332.434 14.229 331.663 14.9356L331.021 15.5138C330.957 13.5867 330.828 11.6596 330.7 9.66827L330.571 7.74118C330.507 7.03458 330.507 6.39222 330.443 5.74986C330.379 4.4009 330.25 3.05194 330.122 1.76721H330.057C329.993 3.05194 329.865 4.4009 329.801 5.74986C329.736 6.39222 329.672 7.03458 329.672 7.74118L329.544 9.66827C329.415 11.7881 329.287 13.8436 329.222 15.9634L328.066 15.2568L325.368 13.7794C323.634 12.8158 321.835 11.8523 320.037 10.953C321.578 12.2377 323.12 13.5224 324.726 14.8072C325.561 15.3853 326.332 16.0277 327.103 16.67C327.616 17.0554 328.13 17.4408 328.644 17.762C327.552 18.9825 326.524 20.2672 325.432 21.552L324.405 22.7082L321.514 26.177L321.578 26.2412L323.891 24.3141L325.111 23.3506L326.268 22.3228L329.222 19.8176C329.222 20.3957 329.222 21.0381 329.287 21.6162C329.351 22.9652 329.415 24.2499 329.544 25.5988C329.672 28.2325 329.865 30.8662 330.122 33.5641Z"
              fill="#D04D2A"
            />
            <path
              id="star_2"
              d="M40.1295 31.9426C40.3865 29.2446 40.5792 26.611 40.7076 23.9773C40.8361 22.6283 40.9004 21.3436 40.9646 19.9946C41.0288 19.2238 41.0288 18.453 41.0288 17.7464L46.1677 20.5727L47.5167 21.3436L50.2146 22.7568L50.2788 22.6925C49.4438 22.0502 48.6729 21.4078 47.9021 20.7655C47.5167 20.4443 47.067 20.1231 46.6816 19.8661L45.5254 18.9026C44.1764 17.8748 42.8917 16.847 41.5427 15.8835C41.9924 15.4338 42.442 14.9842 42.8917 14.4703L44.8188 12.1578C46.1035 10.6161 47.4524 9.07447 48.7372 7.46856H48.6729C47.067 8.68905 45.5254 10.038 43.9837 11.3227C43.2129 11.9651 42.442 12.6075 41.6712 13.3141L41.0288 13.8922C40.9646 11.9651 40.8361 10.038 40.7076 8.04668L40.5792 6.1196C40.5149 5.413 40.5149 4.77064 40.4507 4.12828C40.3865 2.77932 40.258 1.43035 40.1295 0.14563H40.0653C40.001 1.43035 39.8726 2.77932 39.8083 4.12828C39.7441 4.77064 39.6799 5.413 39.6799 6.1196L39.5514 8.04668C39.4229 10.1665 39.2944 12.222 39.2302 14.3418L38.074 13.6352L35.376 12.1578C33.6417 11.1943 31.843 10.2307 30.0444 9.33141C31.5861 10.6161 33.1278 11.9009 34.7337 13.1856C35.5687 13.7637 36.3396 14.4061 37.1104 15.0484C37.6243 15.4338 38.1382 15.8193 38.6521 16.1404C37.5601 17.3609 36.5323 18.6457 35.4403 19.9304L34.4125 21.0866L31.5219 24.5554L31.5861 24.6196L33.8986 22.6925L35.1191 21.729L36.2753 20.7012L39.2302 18.196C39.2302 18.7741 39.2302 19.4165 39.2944 19.9946C39.3587 21.3436 39.4229 22.6283 39.5514 23.9773C39.6799 26.611 39.8726 29.2446 40.1295 31.9426Z"
              fill="#D04D2A"
            />
            <path
              id="star_3"
              d="M40.3165 561.482C40.5735 558.785 40.7662 556.151 40.8947 553.517C41.0231 552.168 41.0874 550.883 41.1516 549.535C41.2158 548.764 41.2158 547.993 41.2158 547.286L46.3547 550.113L47.7037 550.883L50.4016 552.297L50.4658 552.232C49.6308 551.59 48.8599 550.948 48.0891 550.305C47.7037 549.984 47.254 549.663 46.8686 549.406L45.7124 548.443C44.3634 547.415 43.0787 546.387 41.7297 545.423C42.1794 544.974 42.629 544.524 43.0787 544.01L45.0058 541.698C46.2905 540.156 47.6395 538.614 48.9242 537.008H48.8599C47.254 538.229 45.7124 539.578 44.1707 540.863C43.3999 541.505 42.629 542.147 41.8582 542.854L41.2158 543.432C41.1516 541.505 41.0231 539.578 40.8947 537.587L40.7662 535.66C40.7019 534.953 40.7019 534.311 40.6377 533.668C40.5735 532.319 40.445 530.97 40.3165 529.686H40.2523C40.1881 530.97 40.0596 532.319 39.9953 533.668C39.9311 534.311 39.8669 534.953 39.8669 535.66L39.7384 537.587C39.6099 539.706 39.4815 541.762 39.4172 543.882L38.261 543.175L35.5631 541.698C33.8287 540.734 32.0301 539.771 30.2314 538.871C31.7731 540.156 33.3148 541.441 34.9207 542.725C35.7558 543.304 36.5266 543.946 37.2974 544.588C37.8113 544.974 38.3252 545.359 38.8391 545.68C37.7471 546.901 36.7193 548.186 35.6273 549.47L34.5995 550.627L31.7089 554.095L31.7731 554.16L34.0856 552.232L35.3061 551.269L36.4624 550.241L39.4172 547.736C39.4172 548.314 39.4172 548.956 39.4815 549.535C39.5457 550.883 39.6099 552.168 39.7384 553.517C39.8669 556.151 40.0596 558.785 40.3165 561.482Z"
              fill="#D04D2A"
            />
            <path
              id="star_4"
              d="M332.317 698.482C332.573 695.785 332.766 693.151 332.895 690.517C333.023 689.168 333.087 687.883 333.152 686.535C333.216 685.764 333.216 684.993 333.216 684.286L338.355 687.113L339.704 687.883L342.402 689.297L342.466 689.232C341.631 688.59 340.86 687.948 340.089 687.305C339.704 686.984 339.254 686.663 338.869 686.406L337.712 685.443C336.363 684.415 335.079 683.387 333.73 682.423C334.179 681.974 334.629 681.524 335.079 681.01L337.006 678.698C338.29 677.156 339.639 675.614 340.924 674.008H340.86C339.254 675.229 337.712 676.578 336.171 677.863C335.4 678.505 334.629 679.147 333.858 679.854L333.216 680.432C333.152 678.505 333.023 676.578 332.895 674.587L332.766 672.66C332.702 671.953 332.702 671.311 332.638 670.668C332.573 669.319 332.445 667.97 332.317 666.686H332.252C332.188 667.97 332.06 669.319 331.995 670.668C331.931 671.311 331.867 671.953 331.867 672.66L331.738 674.587C331.61 676.706 331.481 678.762 331.417 680.882L330.261 680.175L327.563 678.698C325.829 677.734 324.03 676.771 322.231 675.871C323.773 677.156 325.315 678.441 326.921 679.725C327.756 680.304 328.527 680.946 329.297 681.588C329.811 681.974 330.325 682.359 330.839 682.68C329.747 683.901 328.719 685.186 327.627 686.47L326.6 687.627L323.709 691.095L323.773 691.16L326.086 689.232L327.306 688.269L328.462 687.241L331.417 684.736C331.417 685.314 331.417 685.956 331.481 686.535C331.546 687.883 331.61 689.168 331.738 690.517C331.867 693.151 332.06 695.785 332.317 698.482Z"
              fill="#D04D2A"
            />
            <path
              id="star_5"
              d="M309.857 68.6044C310.262 64.3476 310.566 60.1923 310.769 56.0369C310.972 53.9085 311.073 51.8815 311.174 49.7531C311.276 48.5369 311.276 47.3207 311.276 46.2058L319.384 50.6653L321.512 51.8815L325.769 54.1112L325.87 54.0099C324.553 52.9963 323.337 51.9828 322.12 50.9693C321.512 50.4626 320.803 49.9558 320.195 49.5504L318.37 48.0301C316.242 46.4085 314.215 44.7869 312.087 43.2666C312.796 42.5572 313.506 41.8477 314.215 41.0369L317.256 37.3883C319.283 34.9559 321.411 32.5235 323.438 29.9897H323.337C320.803 31.9153 318.37 34.0437 315.938 36.0707C314.722 37.0842 313.506 38.0978 312.289 39.2126L311.276 40.1248C311.174 37.0842 310.972 34.0437 310.769 30.9018L310.566 27.8613C310.465 26.7464 310.465 25.7329 310.364 24.7194C310.262 22.5911 310.06 20.4627 309.857 18.4357H309.756C309.654 20.4627 309.452 22.5911 309.35 24.7194C309.249 25.7329 309.147 26.7464 309.147 27.8613L308.945 30.9018C308.742 34.2464 308.539 37.4897 308.438 40.8342L306.614 39.7194L302.357 37.3883C299.62 35.868 296.783 34.3478 293.945 32.9289C296.377 34.9559 298.81 36.9829 301.343 39.0099C302.661 39.9221 303.877 40.9356 305.093 41.9491C305.904 42.5572 306.715 43.1653 307.526 43.6721C305.803 45.5977 304.181 47.6247 302.458 49.6518L300.837 51.4761L296.276 56.949L296.377 57.0504L300.026 54.0099L301.952 52.4896L303.776 50.868L308.438 46.9153C308.438 47.8274 308.438 48.841 308.539 49.7531C308.641 51.8815 308.742 53.9085 308.945 56.0369C309.147 60.1923 309.452 64.3476 309.857 68.6044Z"
              fill="#D04D2A"
            />
            <path
              id="star_6"
              d="M335.144 352.854C335.549 348.598 335.853 344.442 336.056 340.287C336.258 338.159 336.36 336.131 336.461 334.003C336.562 332.787 336.562 331.571 336.562 330.456L344.671 334.915L346.799 336.131L351.056 338.361L351.157 338.26C349.839 337.246 348.623 336.233 347.407 335.219C346.799 334.713 346.089 334.206 345.481 333.8L343.657 332.28C341.529 330.659 339.502 329.037 337.373 327.517C338.083 326.807 338.792 326.098 339.502 325.287L342.542 321.638C344.569 319.206 346.698 316.773 348.725 314.24H348.623C346.089 316.165 343.657 318.294 341.225 320.321C340.008 321.334 338.792 322.348 337.576 323.463L336.562 324.375C336.461 321.334 336.258 318.294 336.056 315.152L335.853 312.111C335.752 310.996 335.752 309.983 335.65 308.969C335.549 306.841 335.346 304.713 335.144 302.686H335.042C334.941 304.713 334.738 306.841 334.637 308.969C334.535 309.983 334.434 310.996 334.434 312.111L334.231 315.152C334.029 318.496 333.826 321.74 333.725 325.084L331.9 323.969L327.644 321.638C324.907 320.118 322.069 318.598 319.231 317.179C321.664 319.206 324.096 321.233 326.63 323.26C327.948 324.172 329.164 325.186 330.38 326.199C331.191 326.807 332.002 327.415 332.812 327.922C331.09 329.848 329.468 331.875 327.745 333.902L326.123 335.726L321.563 341.199L321.664 341.3L325.313 338.26L327.238 336.74L329.062 335.118L333.725 331.165C333.725 332.077 333.725 333.091 333.826 334.003C333.927 336.131 334.029 338.159 334.231 340.287C334.434 344.442 334.738 348.598 335.144 352.854Z"
              fill="#D04D2A"
            />
            <path
              id="star_7"
              d="M309.144 721.854C309.549 717.598 309.853 713.442 310.056 709.287C310.258 707.158 310.36 705.131 310.461 703.003C310.562 701.787 310.562 700.571 310.562 699.456L318.671 703.915L320.799 705.131L325.056 707.361L325.157 707.26C323.839 706.246 322.623 705.233 321.407 704.219C320.799 703.712 320.089 703.206 319.481 702.8L317.657 701.28C315.529 699.658 313.502 698.037 311.373 696.517C312.083 695.807 312.792 695.098 313.502 694.287L316.542 690.638C318.569 688.206 320.698 685.773 322.725 683.24H322.623C320.089 685.165 317.657 687.294 315.225 689.321C314.008 690.334 312.792 691.348 311.576 692.462L310.562 693.375C310.461 690.334 310.258 687.294 310.056 684.152L309.853 681.111C309.752 679.996 309.752 678.983 309.65 677.969C309.549 675.841 309.346 673.713 309.144 671.686H309.042C308.941 673.713 308.738 675.841 308.637 677.969C308.535 678.983 308.434 679.996 308.434 681.111L308.231 684.152C308.029 687.496 307.826 690.74 307.725 694.084L305.9 692.969L301.644 690.638C298.907 689.118 296.069 687.598 293.231 686.179C295.664 688.206 298.096 690.233 300.63 692.26C301.948 693.172 303.164 694.185 304.38 695.199C305.191 695.807 306.002 696.415 306.812 696.922C305.09 698.848 303.468 700.875 301.745 702.902L300.123 704.726L295.563 710.199L295.664 710.3L299.313 707.26L301.238 705.739L303.062 704.118L307.725 700.165C307.725 701.077 307.725 702.091 307.826 703.003C307.927 705.131 308.029 707.158 308.231 709.287C308.434 713.442 308.738 717.598 309.144 721.854Z"
              fill="#D04D2A"
            />
            <path
              id="star_8"
              d="M19.8647 66.9828C20.2701 62.7261 20.5742 58.5707 20.7769 54.4153C20.9796 52.2869 21.0809 50.2599 21.1823 48.1315C21.2836 46.9153 21.2836 45.6991 21.2836 44.5842L29.3917 49.0437L31.5201 50.2599L35.7768 52.4896L35.8782 52.3883C34.5606 51.3748 33.3444 50.3613 32.1282 49.3477C31.5201 48.841 30.8106 48.3342 30.2025 47.9288L28.3782 46.4086C26.2498 44.7869 24.2228 43.1653 22.0945 41.6451C22.8039 40.9356 23.5134 40.2262 24.2228 39.4153L27.2634 35.7667C29.2904 33.3343 31.4187 30.9019 33.4458 28.3681H33.3444C30.8106 30.2938 28.3782 32.4221 25.9458 34.4492C24.7296 35.4627 23.5134 36.4762 22.2972 37.591L21.2836 38.5032C21.1823 35.4627 20.9796 32.4221 20.7769 29.2803L20.5742 26.2397C20.4728 25.1249 20.4728 24.1114 20.3715 23.0978C20.2701 20.9695 20.0674 18.8411 19.8647 16.8141H19.7634C19.662 18.8411 19.4593 20.9695 19.358 23.0978C19.2566 24.1114 19.1553 25.1249 19.1553 26.2397L18.9526 29.2803C18.7499 32.6248 18.5472 35.8681 18.4458 39.2126L16.6215 38.0978L12.3648 35.7667C9.62829 34.2465 6.79046 32.7262 3.95264 31.3073C6.38506 33.3343 8.81748 35.3613 11.3513 37.3883C12.6688 38.3005 13.885 39.314 15.1012 40.3275C15.912 40.9356 16.7229 41.5437 17.5337 42.0505C15.8107 43.9761 14.1891 46.0032 12.4661 48.0302L10.8445 49.8545L6.28371 55.3274L6.38506 55.4288L10.0337 52.3883L11.9594 50.868L13.7837 49.2464L18.4458 45.2937C18.4458 46.2059 18.4458 47.2194 18.5472 48.1315C18.6485 50.2599 18.7499 52.2869 18.9526 54.4153C19.1553 58.5707 19.4593 62.7261 19.8647 66.9828Z"
              fill="#D04D2A"
            />
          </g>
          <g id="nav-items">
            <g id="nav__home">
              <path
                id="nav__bg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.1052 327.476C85.0705 322.295 89.0015 318.046 94.162 317.686L293.6 303.788C299.647 303.366 304.805 308.397 304.538 314.454L301.103 392.398C300.852 398.087 295.894 402.294 290.212 401.639L94.4873 379.07C89.3576 378.478 85.4177 374.1 85.3832 368.952L85.1052 327.476ZM100.906 321.868C95.6007 322.055 91.4731 326.363 91.5087 331.675L91.7221 363.522C91.7571 368.742 95.8046 373.158 101.014 373.659L281.064 391.003C286.879 391.563 291.815 387.063 291.776 381.236L291.404 325.692C291.365 319.959 286.522 315.312 280.797 315.514L100.906 321.868Z"
                fill="#D35530"
              />
              <path
                id="nav__color"
                d="M94.8497 333.933C94.814 328.608 98.9571 324.295 104.273 324.122L278.47 318.479C284.182 318.293 289.005 322.938 289.044 328.66L289.374 378.027C289.413 383.839 284.507 388.336 278.709 387.802L104.366 371.743C99.1405 371.262 95.0702 366.837 95.0351 361.599L94.8497 333.933Z"
                fill="#E6A311"
              />
              <path
                id="connector"
                d="M217.156 297.032H206.224L207.342 309.909L217.156 309.212V297.032Z"
                fill="black"
              />
              <text
                id="HOME"
                fill="black"
                xmlSpace="preserve"
                style={{ whiteSpace: 'pre' }}
                fontFamily="mouse_memoir"
                fontSize="42.7894"
                letterSpacing="0em"
              >
                <tspan x="165.45" y="363.297">
                  HOME
                </tspan>
              </text>
            </g>
            <g id="nav__profile">
              <path
                id="nav__bg_2"
                d="M56.8784 637.15C56.8784 631.846 61.0594 627.686 66.39 627.686L286.097 627.686C292.89 627.686 298.054 634.28 296.305 640.722L280.648 698.408C279.582 702.335 276.159 705.079 272.036 705.312L67.9861 716.801C62.0551 717.135 56.8785 712.252 56.8785 706.324L56.8784 637.15Z"
                fill="black"
              />
              <path
                id="nav__color_2"
                d="M276.053 688.917C274.94 692.967 271.38 695.816 267.161 696.031L90.655 705.023C84.9473 705.314 80.0392 700.76 79.8949 695.039L78.6309 644.923C78.4917 639.402 82.8559 634.926 88.3788 634.926L277.442 634.926C284.139 634.926 289.107 641.38 287.345 647.793L276.053 688.917Z"
                fill="#3A5269"
              />
              <text
                id="PROFILE"
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: 'pre' }}
                fontFamily="mouse_memoir"
                fontSize="42.7894"
                letterSpacing="0em"
              >
                <tspan x="129.681" y="681.741">
                  PROFILE
                </tspan>
              </text>
              <path
                id="connectors"
                d="M83.175 629.723L81.2314 615.686H92.6772L93.7569 629.723H83.175Z"
                fill="black"
              />
              <path
                id="connectors_2"
                d="M168.175 630.723L166.231 616.686H177.677L178.757 630.723H168.175Z"
                fill="black"
              />
              <path
                id="connectors_3"
                d="M253.175 629.723L251.231 615.686H262.677L263.757 629.723H253.175Z"
                fill="black"
              />
            </g>
            <g id="nav__bookmarks">
              <path
                id="nav__bg_3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M268.205 618.046C274.386 617.945 278.728 612.389 277.337 606.361L262.311 541.278C261.231 536.598 256.984 533.162 252.177 533.078L72.7274 529.946C68.1669 529.866 64.278 532.83 63.2527 537.168L46.3099 608.847C44.7934 615.262 50.0539 621.62 56.7878 621.51L268.205 618.046ZM249.939 604.768C255.614 604.591 259.773 599.785 259.11 594.17L254.142 552.091C253.534 546.939 249.056 542.906 243.834 542.807L82.9438 539.755C77.9402 539.66 73.8126 543.216 73.2582 548.099L67.5281 598.572C66.8271 604.747 72.0411 610.306 78.3506 610.109L249.939 604.768Z"
                fill="black"
              />
              <path
                id="nav__color_3"
                d="M261.479 593.641C262.423 599.432 258.219 604.555 252.372 604.739L77.5512 610.257C71.2948 610.455 66.1238 604.945 66.7808 598.781L72.3534 546.493C72.8813 541.54 77.0511 537.922 82.0932 538.042L244.347 541.902C249.353 542.021 253.68 545.789 254.485 550.732L261.479 593.641Z"
                fill="#D35530"
              />
              <text
                id="BOOKMARKS"
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: 'pre' }}
                fontFamily="mouse_memoir"
                fontSize="42.7894"
                letterSpacing="0em"
              >
                <tspan x="94.2327" y="591.059">
                  BOOKMARKS
                </tspan>
              </text>
              <path
                id="connector_2"
                d="M138.85 531.263V525.394L201.759 524.407V533.682L138.85 531.263Z"
                fill="black"
              />
            </g>
            <g id="nav__notifications">
              <path
                id="nav__bg_4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.3086 445.62C28.6353 445.997 24.5026 452.596 27.0362 458.829L51.8673 519.922C53.4978 523.934 57.4948 526.599 61.8054 526.549L259.289 524.25C263.8 524.197 267.579 521.188 268.534 516.888L284.579 444.633C286.029 438.102 280.494 431.774 273.668 432.159L35.3086 445.62ZM51.7015 454.933C45.3373 455.275 41.1859 461.316 43.1321 467.404L57.41 512.07C58.8273 516.504 63.1021 519.549 67.7487 519.435L248.33 514.985C253.247 514.864 257.18 511.249 257.629 506.441L262.379 455.521C262.956 449.333 257.622 443.891 251.311 444.229L51.7015 454.933Z"
                fill="black"
              />
              <path
                id="nav__color_4"
                d="M42.9432 467.664C41.0004 461.55 45.1666 455.456 51.5288 455.106L252.178 444.06C258.425 443.716 263.699 449.093 263.169 455.266L258.639 507.964C258.217 512.862 254.221 516.561 249.249 516.653L67.4439 520.048C62.8523 520.134 58.6554 517.111 57.2573 512.711L42.9432 467.664Z"
                fill="#7D7E34"
              />
              <text
                id="NOTIFICATIONS"
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: 'pre' }}
                fontFamily="mouse_memoir"
                fontSize="42.7894"
                letterSpacing="0em"
              >
                <tspan x="68.018" y="499.208">
                  NOTIFICATIONS
                </tspan>
              </text>
              <path
                id="connectors_4"
                d="M81.9036 442.925L79.96 428.888H91.4057L92.4855 442.925H81.9036Z"
                fill="black"
              />
              <path
                id="connectors_5"
                d="M217.277 435.266V428.628H228.766V435.266H217.277Z"
                fill="black"
              />
              {notifications && (
                <g id="notifications">
                  <circle
                    id="circle"
                    cx="261.231"
                    cy="452.686"
                    r="14"
                    fill="white"
                  />
                  <text
                    id="3"
                    data-testid="notificationCount"
                    fill="#D35530"
                    xmlSpace="preserve"
                    style={{ whiteSpace: 'pre' }}
                    fontFamily="mouse_memoir"
                    fontSize="24"
                    letterSpacing="0em"
                  >
                    <tspan x="257.231" y="460.91">
                      {notifications}
                    </tspan>
                  </text>
                </g>
              )}
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export { Navigation }
