import * as React from 'react';
import Svg, { Path, G, Circle, Defs } from 'react-native-svg';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

function ShiftCardNight() {
  return isWeb ? (
    <svg
      width={70}
      height={133}
      viewBox="0 0 70 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h70v133H0V0z" fill="#002858" />
      <g filter="url(#filter0_i_926_41531)">
        <circle
          cx={35}
          cy={67}
          r={30}
          transform="rotate(-90 35 67)"
          fill="#002858"
        />
      </g>
      <path
        d="M59 90l3 1.5 3-1.5-1.5 3 1.5 3-3-1.875L59 96l1.5-3-1.5-3z"
        fill="#C9F9F1"
      />
      <path
        d="M32 102l3 1.5 3-1.5-1.5 3 1.5 3-3-1.875L32 108l1.5-3-1.5-3z"
        fill="#5EEED4"
      />
      <path d="M49 105l2 1 2-1-1 2 1 2-2-1.25-2 1.25 1-2-1-2z" fill="#93F4E2" />
      <defs>
        <filter
          id="filter0_i_926_41531"
          x={3}
          y={35}
          width={62}
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
            result="effect1_innerShadow_926_41531"
          />
          <feOffset dx={-2} dy={-2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.704167 0 0 0 0 0.704167 0 0 0 0 0.704167 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_926_41531" />
        </filter>
      </defs>
    </svg>
  ) : (
    <Svg width={70} height={133} viewBox="0 0 70 133" fill="none">
      <Path d="M0 0H70V133H0V0Z" fill="#002858" />
      <G>
        <Circle
          cx={35}
          cy={67}
          r={30}
          transform="rotate(-90 35 67)"
          fill="#002858"
        ></Circle>
      </G>
      <Path
        d="M59 90L62 91.5L65 90L63.5 93L65 96L62 94.125L59 96L60.5 93L59 90Z"
        fill="#C9F9F1"
      />
      <Path
        d="M32 102L35 103.5L38 102L36.5 105L38 108L35 106.125L32 108L33.5 105L32 102Z"
        fill="#5EEED4"
      />
      <Path
        d="M49 105L51 106L53 105L52 107L53 109L51 107.75L49 109L50 107L49 105Z"
        fill="#93F4E2"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default ShiftCardNight;
