export function Logo() {
  return (
    <div className="flex justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md"
      >
        {/* Define gradients */}
        <defs>
          {/* Radial gradient for background */}
          <radialGradient
            id="bgGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="#1E293B"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="#0A0F1E"
              stopOpacity="1"
            />
          </radialGradient>

          {/* Light gradient for pawn */}
          <linearGradient
            id="pawnLight"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6B7280" />
            <stop offset="50%" stopColor="#52525B" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>
        </defs>

        {/* Background circle for emblem */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          stroke="#1E293B"
          strokeWidth="2"
        />

        {/* Classical ornamental circles */}
        <circle
          cx="200"
          cy="200"
          r="165"
          fill="none"
          stroke="#6B4E9D"
          strokeWidth="2"
          opacity="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="#6B4E9D"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Classical decorative marks at cardinal points */}
        {/* Top */}
        <circle
          cx="200"
          cy="35"
          r="5"
          fill="#6B4E9D"
          opacity="0.8"
        />
        <circle
          cx="200"
          cy="35"
          r="8"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Right */}
        <circle
          cx="365"
          cy="200"
          r="5"
          fill="#6B4E9D"
          opacity="0.8"
        />
        <circle
          cx="365"
          cy="200"
          r="8"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Bottom */}
        <circle
          cx="200"
          cy="365"
          r="5"
          fill="#6B4E9D"
          opacity="0.8"
        />
        <circle
          cx="200"
          cy="365"
          r="8"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Left */}
        <circle
          cx="35"
          cy="200"
          r="5"
          fill="#6B4E9D"
          opacity="0.8"
        />
        <circle
          cx="35"
          cy="200"
          r="8"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Diagonal decorative marks */}
        {/* Top-right */}
        <circle
          cx="317"
          cy="83"
          r="4"
          fill="#6B4E9D"
          opacity="0.7"
        />
        <rect
          x="315"
          y="81"
          width="4"
          height="4"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Bottom-right */}
        <circle
          cx="317"
          cy="317"
          r="4"
          fill="#6B4E9D"
          opacity="0.7"
        />
        <rect
          x="315"
          y="315"
          width="4"
          height="4"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Bottom-left */}
        <circle
          cx="83"
          cy="317"
          r="4"
          fill="#6B4E9D"
          opacity="0.7"
        />
        <rect
          x="81"
          y="315"
          width="4"
          height="4"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Top-left */}
        <circle
          cx="83"
          cy="83"
          r="4"
          fill="#6B4E9D"
          opacity="0.7"
        />
        <rect
          x="81"
          y="81"
          width="4"
          height="4"
          fill="none"
          stroke="#5A3D8A"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Subtle radial lines from center */}
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="50"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="200"
          y1="200"
          x2="350"
          y2="200"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="350"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="200"
          y1="200"
          x2="50"
          y2="200"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="200"
          y1="200"
          x2="307"
          y2="93"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="200"
          x2="307"
          y2="307"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="200"
          x2="93"
          y2="307"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <line
          x1="200"
          y1="200"
          x2="93"
          y2="93"
          stroke="#6B4E9D"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* Chess Pawn - minimalistic with top-left lighting */}
        {/* Top sphere/ball */}
        <circle
          cx="200"
          cy="160"
          r="16"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        {/* Highlight on top-left of sphere */}
        <circle
          cx="194"
          cy="154"
          r="6"
          fill="#D1D5DB"
          opacity="0.7"
        />
        <circle
          cx="192"
          cy="152"
          r="3"
          fill="#F3F4F6"
          opacity="0.9"
        />

        {/* Neck - narrow section */}
        <path
          d="M 192 176 L 190 195 L 210 195 L 208 176 Z"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        {/* Shadow on right side of neck */}
        <path
          d="M 206 176 L 210 195 L 208 195 L 204 176 Z"
          fill="#374151"
          opacity="0.5"
        />

        {/* Collar/transition */}
        <ellipse
          cx="200"
          cy="195"
          rx="12"
          ry="6"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        {/* Highlight on collar */}
        <ellipse
          cx="196"
          cy="194"
          rx="6"
          ry="3"
          fill="#9CA3AF"
          opacity="0.5"
        />

        {/* Body - wider section */}
        <path
          d="M 185 200 L 178 235 L 222 235 L 215 200 Z"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        {/* Shadow on right side of body */}
        <path
          d="M 212 200 L 222 235 L 215 235 L 208 200 Z"
          fill="#374151"
          opacity="0.4"
        />
        {/* Highlight on left side of body */}
        <path
          d="M 185 200 L 178 235 L 183 235 L 188 200 Z"
          fill="#9CA3AF"
          opacity="0.3"
        />

        {/* Base - wide foundation */}
        <ellipse
          cx="200"
          cy="235"
          rx="25"
          ry="8"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        <path
          d="M 170 235 L 168 245 L 232 245 L 230 235 Z"
          fill="url(#pawnLight)"
          stroke="#4B5563"
          strokeWidth="2"
        />
        {/* Shadow on right side of base */}
        <path
          d="M 215 235 L 232 245 L 230 235 Z"
          fill="#374151"
          opacity="0.4"
        />
        {/* Highlight on base */}
        <ellipse
          cx="190"
          cy="234"
          rx="12"
          ry="4"
          fill="#9CA3AF"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}