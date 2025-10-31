export default function Square() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="40"
        height="40"
        rx="8"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect
        x="12"
        y="12"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17H23V23H17V17Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}