import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 14 12'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm7.125 9.978-3.59 1.981a.32.32 0 0 1-.468-.34l.8-3.975L.855 4.896a.318.318 0 0 1 .179-.55l4.079-.478L6.836.184a.32.32 0 0 1 .578 0l1.724 3.684 4.08.477c.271.032.38.367.178.551l-3.014 2.748.801 3.974a.319.319 0 0 1-.468.341z'
      }
      fill={'currentcolor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStar)
const Memo = memo(ForwardRef)

export default Memo
