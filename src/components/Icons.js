import * as React from "react"

export const XIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    width="1.23em"
    height="1em"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 512 462.799"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fillRule="nonzero"
      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
    />
  </svg>
)

export const GithubIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={666.667}
      height={666.667}
      viewBox="0 0 500 500"
      {...props}
    >
      <path d="m296.3 76-4.9 15 9.8 3.2c5.4 1.7 10 2.9 10.2 2.7.2-.2.6-1.3 1-2.5.6-1.9 0-2.3-5.9-3.9-7.1-1.9-6.9-1.5-4.4-8.3l.9-2.2 5.2 2c2.8 1.1 5.3 1.8 5.5 1.7.1-.2.4-1.4.5-2.6.3-1.9-.4-2.5-3.8-3.6-6.2-1.8-6.4-2-5.1-6.1 1.2-3.9.8-3.8 9.5-1.2 3.7 1.1 4.4 1 5.2-.2 1.5-2.4 1.1-4-1-4-1.1 0-4.9-1.1-8.6-2.5-3.6-1.4-7.2-2.5-7.9-2.5-.8 0-3.3 6.1-6.2 15zM195.9 69.9c-1.6 1.6-2.9 3.8-2.9 4.8-.1 1.4-.4 1.2-1.5-.8-1.4-2.5-1.7-2.6-5.5-1.7-2.2.6-4 1.4-4 1.8 0 2.1 1.4 4 2.9 4 1.2 0 2.3 1.9 3.9 6.7 1.9 5.8 2 6.9.7 7.6-1.7.9-1.8 1.6-.7 3.5.7 1 2.2.8 7.5-.8 5.9-1.8 6.7-2.4 6.7-4.5 0-2.2-.3-2.4-2.9-1.9-3.1.7-4.1-1-4.1-7.4 0-5.8 3.2-9.5 4.3-5.1.4 1.4 1.2 1.9 2.4 1.7 1.9-.4 1.9-.7.8-7.1-.8-4.7-3.4-5-7.6-.8zM246.2 78.2c-2 2-1.4 5.6 1.3 7.4 2.3 1.5 2.7 1.5 5 0 2.7-1.8 3.1-3.6 1.5-6.7-1.2-2.2-5.9-2.6-7.8-.7zM320.5 88 315 99l3 1.5 2.9 1.5 3.5-6.2c1.9-3.5 3.8-7.1 4.1-8.1.9-2.1 6-2.3 6.9-.2.3.8-1 4.3-2.8 7.7-5.1 9.6-5.2 10.4-1.8 12.2l2.8 1.5 4.7-9.5c2.6-5.2 4.7-10.3 4.7-11.3 0-3-4.9-6.3-8.7-5.9-2.5.3-3.3 0-3.3-1.2 0-.9-1.1-2.2-2.5-2.8-2.5-1.1-2.6-.9-8 9.8zM161.4 83.4c-2.9 2.9-3.4 4.1-3.4 7.7.2 13.6 12.6 19 22.4 9.9 3.9-3.7 3.9-3.7 1.7-4.9-1.9-1-2.6-.8-5.2 1.3-3.4 2.9-7 3.3-8.9 1.1-1.6-1.9-1.9-1.6 6-5.5 3.6-1.8 6.7-3.4 6.9-3.6.9-.8-4.1-7.2-6.4-8.2-4.9-2.3-9.4-1.5-13.1 2.2zM172 87c.9 1.7.5 2.2-2.9 3.9-4.4 2-5.1 1.9-5.1-1.4 0-4.4 6-6.3 8-2.5zM141.1 95.6c-1.7 1.4-3.1 3.5-3.1 4.6 0 1.5-.3 1.8-1.3 1-.9-.8-1.9-.6-3.6.7l-2.4 1.8 4.4 6.3c2.4 3.4 5.3 7.5 6.4 9 1.1 1.5 2.9 4 3.9 5.6 1.1 1.6 2.9 3.9 3.9 5.1l2 2.3 2.5-2.5 2.4-2.4-3.1-4.3-3.2-4.3 2.7-.7c7.2-1.9 8.6-9.1 3.4-17-2.7-4.1-7.9-7.8-10.8-7.8-.6 0-2.4 1.2-4.1 2.6zm7.7 7.8c4.2 4.8 4.9 7.4 2.5 9.8-2.5 2.4-4 1.7-8.2-3.8-3-3.9-3.2-4.8-2.3-6.9 1.6-3.5 4.5-3.1 8 .9zM347.9 95.9c-1.8 1.5-2.3 2.8-2.3 6 .1 3.4-.2 4.1-1.8 4.1-2 0-3.9 3.6-3 6 .3.8 2.4 3.1 4.6 5.1 2.7 2.5 3.8 4 3.3 5.2-.3.9-1 1.7-1.5 1.7-2.1 0-7.7-4.8-8-6.8-.4-2.9-4.1-5-5.3-3.1-1.5 2.3 0 6.2 3.4 9.3 8.7 7.7 18.7 7.3 18.7-.9 0-2.1-1.2-3.9-4.5-6.9-2.5-2.3-4.5-4.7-4.5-5.4 0-1.7.7-1.5 4 .8 4.5 3.2 8.1 3.5 11.3 1 2-1.6 2.7-3 2.7-5.6 0-3.4.1-3.5 2.2-2 3 2.1 3.5 2 4-.9.4-2.1.1-2.6-2.1-3.1-1.4-.4-4.9-1.9-7.7-3.5-6-3.4-10.2-3.7-13.5-1zm10.6 4.5c1.6 1.2 1.8 1.9 1 4.3-.8 2.2-1.7 2.8-4 2.8-2.5 0-3.1-.4-3.3-2.6-.3-2.4 1.9-5.9 3.7-5.9.4 0 1.6.6 2.6 1.4zM386.6 107.6c-1.9 1.8-1.9 2-.6 4.5 1.4 2.6 5.6 2.5 7-.2.9-1.6.8-2.5-.6-4-2.1-2.3-3.7-2.4-5.8-.3zM374.6 111.9c-1.6 1.8-1.6 1.9.9 3.7l2.5 1.9-4.9 5.2c-2.6 2.9-5.2 5.3-5.7 5.3-.4 0-1.8-1-3.2-2.3-2.3-2.2-2.4-2.2-3.8-.2-1.3 1.8-.9 2.4 5.4 8.8 6.3 6.3 7.1 6.8 9.2 5.7l2.2-1.2-2.7-2.8-2.6-2.7 2.8-2.4c1.6-1.3 4.7-4.5 7-7l4.2-4.5-4.8-4.8c-4.6-4.5-4.8-4.6-6.5-2.7zM119.1 113.8c-3.5 1.9-7.1 7.2-7.1 10.5 0 3.2 3.9 9.1 7.5 11.4 5.4 3.6 10 3.1 14.6-1.6 2.9-2.9 3.9-4.7 3.9-7.1 0-5-3.7-10.7-8.5-13-5.1-2.5-6.1-2.5-10.4-.2zm7 6.5c4.5 3 6.8 7.1 5.3 9.4-1.8 2.9-4.9 2.7-8.8-.7-4.4-3.9-5.3-6.5-3-9.1 2.2-2.4 2.4-2.4 6.5.4zM387.9 136.4c-4.1 3-8.2 6.1-9.3 6.8-1.8 1.3-1.8 1.5-.2 4.6l1.7 3.3 2.9-2.3c9.9-7.9 11.7-8.9 14.4-7.8 1.4.5 2.6 1.6 2.6 2.5 0 .8-3.4 4-7.5 7.1-4.1 3.1-7.5 5.9-7.5 6.3.1.3.9 1.6 2 2.9l1.9 2.3 7.6-5.6c4.1-3.1 8.3-6.7 9.2-8.2 1.5-2.3 1.5-2.8.2-5.2-.8-1.4-2.9-3.3-4.6-4.2-1.8-.9-3-1.9-2.6-2.3.7-.7-1.7-5.6-2.7-5.6-.4 0-4 2.4-8.1 5.4zM86 137.5c-4 5.4-4.1 5.7-2.3 7 1.6 1.3 2.1 1.1 4.3-1.5l2.5-2.8 8.4 6.3c10.6 8.1 13.1 9.2 17.1 7.5 3-1.3 6-5.4 6-8.4 0-2.5-3.4-2.4-5.6.2-2.4 2.9-3 2.7-13.9-5.3-3.8-2.8-8.2-5.9-9.7-6.9l-2.6-1.7-4.2 5.6zM85 159.3c-7.4 5.8-6.5 15.8 1.8 20.5 5.9 3.3 10.7 2.9 14.7-1.1 3.6-3.6 6.3-11.3 4.6-13-1.5-1.5-4.1 0-4.1 2.3 0 2.9-5.4 8.2-7.4 7.4-2.2-.8-2.1-1.2 1.9-8.6l3.4-6.5-2.5-1.2c-3.3-1.4-10.5-1.4-12.4.2zm7 5.7c0 .6-.7 2.6-1.5 4.6-1.3 3.1-1.7 3.4-3.5 2.4-1.9-1-2.8-5.8-1.3-7.3 1-1.1 6.3-.8 6.3.3zM401.4 159.5c-3.5 1.6-7.4 7-7.4 10.3 0 3.8 3.2 10.2 6.1 12.2l2.8 2.1 1.1-2.1c1-1.8.7-2.5-1.4-4.7-2.9-2.9-3.4-7.4-1.1-9.3.9-.7 1.7-1.1 1.8-.9.2.2 1.8 3.3 3.7 6.9 1.8 3.6 3.4 6.7 3.6 6.8.7.9 6.3-3.3 7.8-5.8 2.9-5 1.3-12-3.6-15.4-2.7-1.9-9.2-1.9-13.4-.1zm12.4 5.7c1.8 1.8 1.4 5.6-.8 6.8-1.7.9-2.2.5-3.9-2.9-1.1-2.1-1.7-4.1-1.4-4.5 1.1-1 4.8-.7 6.1.6zM73 183c-.7 1.7-1 3.3-.7 3.6.3.3 4 2.8 8.4 5.5l7.8 5-9.9-.3c-9.1-.3-10-.1-10.7 1.7-1.7 4.4-1.5 4.5 12 4.5 12.8 0 12.9 0 13.5-2.4.3-1.3.8-3.1 1.1-3.9.4-.9-2.5-3.7-8.7-8.4-12.1-9.1-11.4-8.8-12.8-5.3zM411.5 185.4c-7.1 3.1-8.7 12.2-3.5 19.4 1.7 2.3 3.2 4.2 3.5 4.2.2 0 .9-.9 1.5-2 .9-1.6.7-2.6-.9-4.7-2.6-3.3-2.7-6.5-.1-8.8 1.1-1 2.2-1.6 2.3-1.4.2.2 1.4 3.7 2.7 7.7 2 6.5 2.5 7.2 4.4 6.6 9.4-2.8 12.3-12.8 5.6-19.6-2.4-2.3-3.7-2.8-7.7-2.8-2.6.1-6.2.7-7.8 1.4zm13.3 5.8c.7.7 1.2 1.9 1.2 2.7 0 1.5-2.8 5.1-4.1 5.1-.8 0-2.9-5.5-2.9-7.6 0-1.7 4.2-1.8 5.8-.2zM69.4 211.4c-4.3 1.9-6.4 5.3-6.4 10.4 0 7.7 5 12.2 13.5 12.2 3.8 0 5.2-.6 8.2-3.4 3.5-3.2 3.7-3.8 3.8-9.4 0-6.7-.5-7.7-3.4-6.7-1.6.5-1.9 1.2-1.4 4 .7 4.2-1.8 8.5-4.8 8.5-1.7 0-2-.5-1.5-2.8 1.6-8.6 1.7-12.5.4-13.3-1.9-1.2-4.8-1-8.4.5zm4.2 8.7c-.3 1.7-.6 3.8-.6 4.5 0 .8-.6 1.4-1.4 1.4-1.8 0-4.6-2.7-4.6-4.5 0-2 2.9-4.5 5.2-4.5 1.8 0 2 .4 1.4 3.1zM430.3 211.9c-.6 2.4-1.6 2.8-9.2 3.7-5 .5-6.1.4-6.1-.8 0-1.1-.7-1.4-2.6-1-1.6.3-2.3.9-2 1.8.3.8.8 3.6 1.2 6.3.3 2.6.9 5.4 1.3 6 1.2 1.9 4.1.1 4.1-2.4 0-4.8 12.5-3.9 14.3 1 .5 1 0 1.5-1.3 1.5-1.5 0-2 .7-2 2.6 0 2.4.3 2.6 3.1 2 1.7-.3 4-.6 5-.6 1.4 0 1.9-.7 1.9-2.8 0-3.2-2.5-7.2-4.6-7.2-2.1 0-1.7-1.8.7-2.5 1.5-.5 1.9-1.2 1.5-2.8-.3-1.2-.6-3.2-.6-4.5 0-2.8-3.9-3.1-4.7-.3zM63.4 237.6c-1.2.3-3.6 1.8-5.5 3.3-3.3 2.8-3.4 3.1-3.8 11.5l-.3 8.6H85v-7.3c0-8.3-1.3-11.4-5.7-14-3.2-1.8-11.9-3-15.9-2.1zm15.2 9.9c.8 1 1.4 2.9 1.4 4.2 0 2.3-.2 2.3-10.6 2.3H58.9l.3-3.2c.4-4.5 3.6-6 11.7-5.5 4.8.2 6.7.8 7.7 2.2zM413.2 272.6c-2.7 1.8-2.8 4.5-.4 6.7 2.2 2 5.3 2.2 7 .5 1.9-1.9 1.5-6.6-.7-7.8-2.6-1.3-3.3-1.3-5.9.6zM86.2 293.1c-1.1 1.8-1.1 2.3.2 3.2 2.3 1.8 3.5 5.9 2.3 8.4-2 4.4-3.5 3.4-5.8-3.5-1.2-3.7-2.5-7.1-3-7.6-1.2-1.3-6.6 1.2-8.9 4.2-3.8 4.8-1.6 14.7 3.8 17.1 5.9 2.8 14.9.2 18.2-5.1 2.7-4.2 2.1-9.5-1.4-14.9-3-4.5-3.6-4.7-5.4-1.8zm-6.4 11.8c1.6 5.1 1.6 5.1-1.3 5.1-1.5 0-3.1-.9-4.1-2.5-1.6-2.4-1.6-2.7.1-4.5 2.7-2.9 4-2.5 5.3 1.9zM401.7 314.4c-2.2 3.2-2.1 3.9.3 6.1 2.4 2.2 2.5 3.4.3 8-1.1 2.3-2.2 3.4-3.2 3.1-.9-.2-2.5-.7-3.7-1-1.6-.5-2.4.1-3.7 2.8-2 4.2-3 3.8 14.8 6.6 7.2 1.1 13.8 2.3 14.7 2.6 1.2.4 2.3-.6 3.9-3.7l2.1-4.3-6.8-6.3c-3.8-3.5-9.2-8.6-12-11.4l-5.1-5-1.6 2.5zm14.6 18.3c4.1 3.7 4 3.8-3.5 2.2-6.8-1.4-7.5-2.2-5.4-5.4 1.9-2.9 1.7-3 8.9 3.2zM98.7 321.1c-1.4.8-1.5 1.4-.6 3 .8 1.7.7 2.3-.8 3.5-2.8 2.1-8.1 2.8-11.1 1.4-2.6-1.1-2.6-1.2-.8-2.5 2.2-1.6 1.5-4.5-1-4.5-2.8 0-8.4 2.3-8.4 3.5 0 1.2 2.9 5.7 4.4 6.7.6.4 2.2.8 3.5.8 2.3 0 2.3.1.7 1.9-1.6 1.7-1.6 2.4-.5 5.5.7 2 1.8 3.6 2.4 3.6 1.8 0 3.6-1.7 3.3-3.1-.4-1.7 12.4-8.7 13-7.1.4 1.4 2.1 1.5 4 .4 1-.7.6-2.2-1.8-6.8-3.9-7.3-4.1-7.5-6.3-6.3zM105 342c-2.4 2.2-5.2 4.2-6.1 4.5-2.5.8-5.2 5.4-5.1 8.6.1 3.2 3.4 8.6 7 11.3 2.4 1.8 2.5 1.8 3.8.1 1.2-1.6 1-2.2-1.6-5.2-3.1-3.5-3.8-6.7-1.9-7.9.7-.4 2.2.7 3.6 2.5 6.5 8.3 16.3 7.1 16.3-2 0-2.9-.6-4.3-3.1-6.3-1.7-1.4-3.7-2.6-4.5-2.6-.7 0-1.3-.8-1.2-1.8.5-6.4-1.1-6.7-7.2-1.2zm9 7.5c3.4 4.1-2.8 7.6-6.4 3.6-1.5-1.7-1.6-2.3-.6-3.6 1.6-1.9 5.4-1.9 7 0zM385.3 343.2c-8.9 12.2-8.5 11.3-6.3 13.3 2 1.8 2.1 1.8 3.5-.1.8-1 1.5-2.2 1.5-2.7 0-.4.5-.7 1.1-.7 1.5 0 16.8 11.3 16.9 12.4 0 .5-.8 1.8-1.7 2.9-1.7 1.8-1.7 1.9.2 3.3 1 .8 2.1 1.4 2.4 1.4.3 0 3.2-3.7 6.5-8.2 5.5-7.6 5.8-8.2 4-9.5-2.4-1.8-2.9-1.7-4.4 1.2-.7 1.4-1.7 2.5-2 2.5-.4 0-2.4-1.4-4.5-3-2.1-1.7-4.1-3-4.4-3-.3-.1-2.4-1.6-4.5-3.4-3.9-3.3-3.9-3.5-2.3-5.9 1.5-2.3 1.5-2.6-.3-4.2-1.7-1.6-2-1.4-5.7 3.7zM370.5 356.2c-1.1.6-2.2 1.2-2.3 1.4-.5.4 13.1 39.4 14.5 41.7.3.5 3.4-.5 5-1.7.1-.1-1.6-5.4-3.8-11.7-2.2-6.3-5.3-15-6.8-19.5-3.8-11-4.1-11.5-6.6-10.2zM121.4 362.1c-2.2 1.6-6.5 5-9.6 7.3l-5.7 4.3 2.3 2.2 2.4 2.2 7.1-6.1c3.9-3.4 7.1-6 7.1-5.8 0 .3-2 3.1-4.4 6.4l-4.5 5.9 2.1 2.2 2 2.2 5.2-3.8c2.8-2 5.8-4.1 6.5-4.6 2.1-1.2-2.1 4.4-5.9 8-4.9 4.6-5.3 5.9-2.6 8.4l2.3 2.2 4.4-6.2c2.4-3.4 5.6-7.6 7.2-9.4 3.3-4 3.3-4.6.3-7.4l-2.4-2.3-4.7 3.3c-9.6 6.9-9.2 6.6-7.5 4.4.8-1.1 3.1-4.1 5.2-6.6l3.7-4.6-2.7-2.6c-1.6-1.5-3.1-2.7-3.4-2.7-.3 0-2.3 1.4-4.4 3.1zM355 376.8c-2.2 1.7-2.2 1.9-.6 4.8.9 1.6 3.2 4.9 5.1 7.4 6.1 7.9 5.9 8.6-.6 2.7-3.5-3.1-6.6-5.7-6.9-5.7-.3.1-1.3.7-2.3 1.4-1.7 1.4-1.7 1.6.8 6.6 3 6 5 10.9 3.8 9.5-.5-.6-2.9-3.6-5.4-6.8-8.5-11.2-7.3-10.3-10.1-8.1l-2.5 1.9 8.1 9.9c4.5 5.4 9 11 10.2 12.4l2.1 2.5 3-2.2 3.1-2.3-4.4-8.6c-2.4-4.7-4.2-8.7-4-8.9.2-.2 2.5 1.8 5.2 4.4 8.8 8.7 8.8 8.7 11.8 6.8 1.4-1 2.6-2.2 2.6-2.7 0-.6-2.4-4.7-5.4-9.1-2.9-4.5-6.7-10.3-8.3-13-3-4.7-3.1-4.7-5.3-2.9zM142.4 379.2c-.3 1.1-.4 2.1-.2 2.2.1.1 1.5 1 3.1 1.9 1.5 1 2.7 2.3 2.7 3 0 .8-1.7 3.6-3.8 6.4l-3.8 5.1-3.1-1.9c-2.8-1.8-3.1-1.8-4.4-.3-1.2 1.4-1 2 1.4 4 2.6 2.3 2.7 2.5 1.3 4.6-2.2 3-2.1 3.4 1.5 4.8 2.7 1.2 3.2 1.1 4.6-.9 1.5-2.2 1.6-2.2 3.5-.4 1.9 1.7 2 1.7 3.4-.2 1.3-1.7 1.2-2.1-.7-3.5l-2.1-1.6 3.7-4.8c3.6-4.8 5.5-8.5 5.5-11.1 0-2.4-4.8-7.1-8.4-8.2-3.2-1-3.6-.9-4.2.9zM323.7 396.7c-7.7 4-8.7 4.8-8.1 6.7 1 3.1.8 3.1 7.5.2 4.9-2.1 6.4-2.4 7.1-1.4.5.7 3.2 5.9 6 11.5l5.1 10.1 3.2-1.5c3.1-1.5 3.2-1.7 2.1-4.2-3.2-7.1-13.1-26.1-13.6-26-.3 0-4.5 2.1-9.3 4.6zM168.9 403.3c-3.2 6.3-4 7.2-6 6.8-5-.7-6.3-.5-6.7 1-.2 1 .8 2.1 2.8 2.9 3.3 1.4 3.6 2.6 1.6 5.2-1.7 2.3-3.7 2.3-6.8-.2-2.3-1.7-2.7-1.8-4.7-.4l-2.2 1.6 4.1 3c4 3 10.6 4.6 12.5 3.1.6-.4 2.1-2.3 3.3-4 2-2.9 2.5-3.1 4.3-2 1.6 1 2.1.9 2.9-.3 1.5-2.3 1.2-3.7-1-4.3-2.3-.6-2-1.8 2.1-8.8 4.3-7.3 4.5-8.7 1.4-9.9-1.4-.5-2.9-1-3.3-1-.4 0-2.3 3.3-4.3 7.3zM187.8 407.3c-4.6 3.7-6.3 11.6-3.9 17.5 1.3 3.1 6.6 6.2 10.7 6.2 8.3 0 14.7-10.8 11.4-19.4-2.3-6.1-13-8.7-18.2-4.3zm11.2 4.2c2.6 3.1-1.8 14.5-5.5 14.5-2.7 0-4.5-4.2-3.5-8.3 1.4-6.6 6.1-9.8 9-6.2zM215.5 412.3c-4.6 2.1-5.7 4-5.3 9.4.3 4.7.4 4.9 6.5 8.8 4.6 2.9 6.3 4.6 6.3 6.2 0 3.4-4.1 4-8.6 1.3-3.3-1.9-3.9-2-5.2-.6-1.3 1.3-1.3 1.7-.1 3.2 4 4.9 14 5.8 18.8 1.8 5.4-4.5 3.7-11.5-3.7-15.3-2-1-4.6-2.9-5.7-4.1-4.3-4.8 4-8.2 9.8-3.9 2.2 1.6 3.4 1.9 4.6 1.2 3-1.9 2.4-4.1-1.8-6.3-5.4-2.7-11.8-3.4-15.6-1.7zM274.2 412.6c-2.4 1.7-2.9 5.3-1 7.2 1.9 1.9 6.6 1.5 7.8-.7 1.4-2.8 1.3-3.8-1-6.1-2.4-2.4-2.9-2.4-5.8-.4z" />
    </svg>
  )