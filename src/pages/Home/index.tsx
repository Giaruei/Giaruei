/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-18 21:28:17
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music-dev\src\pages\Home\index.tsx
 */

import { FC, useEffect } from "react"
import { ColorModeSwitcher, Logo } from "@/components"
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from "@chakra-ui/react"
import { userApi } from "@/services/services"

const Home: FC = () => {
    useEffect(() => {
        userApi.test().then(res => console.log(res))
    }, [])

    return (

        <Box fontSize="xl" textAlign="center">
            <Box m={2}>Tomato FUCK YOU</Box>

            <Tabs>
                <TabList>
                    <Tab>aaa</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <Logo h="40vmin" pointerEvents="none" />
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Link
                        color="teal.500"
                        fontSize="2xl"
                        href="https://chakra-ui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    )
}

export default Home
