import fs from 'fs'
import Jimp = require('jimp')

export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async resolve => {
        const photo = await Jimp.read(inputURL)
        const output = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg'
        photo
            .resize(256, 256)
            .quality(60)
            .grayscale()
            .write(__dirname + output, () => {
                resolve(__dirname + output)
            })
    })
}

export async function deleteLocalFiles(files:Array<string>){
    for(const file of files){
        fs.unlinkSync(file)
    }
}