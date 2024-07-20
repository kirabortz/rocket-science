import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 8 10'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M7.273.455H.909V0H0v10h.91V5.91h6.363L5.909 3.181z'} fill={'#FF4641'} />
  </svg>
)
const ForwardRef = forwardRef(SvgFlag)
const Memo = memo(ForwardRef)

export default Memo
