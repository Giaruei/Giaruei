/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:17:46
 * @LastEditTime: 2022-07-18 12:14:58
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\components\Logo\index.tsx
 */
import {
    chakra,
    keyframes,
    ImageProps,
    forwardRef,
    usePrefersReducedMotion
} from "@chakra-ui/react"
import logo from "./logo.svg"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = forwardRef<ImageProps, "img">((props, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`

    return <chakra.img animation={animation} ref={ref} src={logo} {...props} />
})

export default Logo
