// /components/Signature.tsx
const Signature = () => (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-auto opacity-10 absolute bottom-4 right-6 sm:right-10 pointer-events-none"
    >
      <path
        d="M10 30 C30 10, 70 50, 90 20 C110 -10, 150 50, 190 10"
        stroke="#030b1a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,200"
          to="200,0"
          dur="2s"
          fill="freeze"
        />
      </path>
    </svg>
  );
  
  export default Signature;
  