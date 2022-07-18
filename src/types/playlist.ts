/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 14:49:42
 * @LastEditTime: 2022-07-18 15:05:09
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\types\playlist.ts
 */
export type Playlist = {
    id: number
    type: 0 | 1
    name: string
    copywriter: string
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
}

export type PlaylistDetail = {
    author: string
}
