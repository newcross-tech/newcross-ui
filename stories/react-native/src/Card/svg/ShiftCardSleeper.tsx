import * as React from 'react';
import Svg, { Path, G, Circle, Defs } from 'react-native-svg';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

function ShiftCardSleeper() {
  return isWeb ? (
    <svg
      width={70}
      height={133}
      viewBox="0 0 70 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h70v133H0V0z" fill="#002858" />
      <g filter="url(#filter0_i_926_49137)">
        <circle
          cx={35}
          cy={67}
          r={30}
          transform="rotate(-90 35 67)"
          fill="#002858"
        />
      </g>
      <path
        d="M27.8 108a.8.8 0 01.8.8v6.4h5.6v-4a.8.8 0 01.8-.8h5.6c1.325 0 2.4 1.053 2.4 2.4v5.6a.799.799 0 11-1.6 0v-.8H28.6v.8a.8.8 0 11-1.6 0v-9.6a.8.8 0 01.8-.8zm1.6 4.4a2 2 0 113.999-.001 2 2 0 01-3.999.001z"
        fill="#93F4E2"
      />
      <defs>
        <filter
          id="filter0_i_926_49137"
          x={5}
          y={35}
          width={60}
          height={62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            in="SourceAlpha"
            result="effect1_innerShadow_926_49137"
          />
          <feOffset dy={-2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.576471 0 0 0 0 0.956863 0 0 0 0 0.886275 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_926_49137" />
        </filter>
      </defs>
    </svg>
  ) : (
    <Svg width={70} height={133} fill="none">
      <Path d="M0 0h70v133H0V0z" fill="#002858" />
      <G>
        <Circle
          cx={35}
          cy={67}
          r={30}
          transform="rotate(-90 35 67)"
          fill="#002858"
        />
      </G>
      <Path
        d="M27.8 108a.8.8 0 01.8.8v6.4h5.6v-4a.8.8 0 01.8-.8h5.6c1.325 0 2.4 1.053 2.4 2.4v5.6a.799.799 0 11-1.6 0v-.8H28.6v.8a.8.8 0 11-1.6 0v-9.6a.8.8 0 01.8-.8zm1.6 4.4a2 2 0 113.999-.001 2 2 0 01-3.999.001z"
        fill="#93F4E2"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default ShiftCardSleeper;
