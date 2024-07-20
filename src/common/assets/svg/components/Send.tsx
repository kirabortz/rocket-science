import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 22 22'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm0 11.794 5.957 2.72 11.686-9.625-9.318 10.77L9.776 22l1.757-4.355 6.798 3.133C18.208 20.9 22.119.123 21.997 0c0 0-22.119 11.794-21.996 11.794'
      }
      fill={'#FF4641'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSend)
const Memo = memo(ForwardRef)

export default Memo
