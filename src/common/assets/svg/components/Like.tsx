import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgLike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 14 16'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'm1 10.063 2.75-1.375 1.312-4.469s-.218-2-.343-3.219c2.312 0 2.437 2.969 2.437 2.969l.25 2.094s2.364-.642 3.22-.812c1.25-.25 2.062.437 1.75 1.749.655.407.624 1.563.093 2.063.47.531.375 1.781-.28 2.25.161 1.118-.22 1.375-.5 1.625-.283.25-1.75 1.063-3.408 1.063-1.656 0-3.094-.344-3.094-.344L3.031 15s-.812-.531-1.437-2.124C.97 11.282 1 10.063 1 10.063Z'
      }
      stroke={'#A0A0A0'}
      strokeLinejoin={'round'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLike)
const Memo = memo(ForwardRef)

export default Memo
