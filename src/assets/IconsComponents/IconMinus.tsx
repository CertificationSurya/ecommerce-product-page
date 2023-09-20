import type { SVGProps } from "react";
const SvgIconMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path
        id="icon-minus_svg__a"
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
      />
    </defs>
    <use xlinkHref="#icon-minus_svg__a" fill="#FF7E1B" />
  </svg>
);
export default SvgIconMinus;
