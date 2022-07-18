/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:36:37
 * @LastEditTime: 2022-07-18 12:15:16
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\components\ColorModeSwitcher\index.tsx
 */
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from "@chakra-ui/react"
import { FC } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

const ColorModeSwitcher: FC<ColorModeSwitcherProps> = props => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <IconButton
            aria-label={`Switch to ${text} mode`}
            color="current"
            fontSize="lg"
            icon={<SwitchIcon />}
            marginLeft="2"
            onClick={toggleColorMode}
            size="md"
            variant="ghost"
            {...props}
        />
    )
}

export default ColorModeSwitcher
