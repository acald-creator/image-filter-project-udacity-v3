import { CommonRoutesConfig } from "../common/common.routes.config"
import express from 'express'
import { deleteLocalFiles, filterImageFromURL } from "../util/util"

export class ImageRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ImageRoutes')
    }

    configureRoutes() {
        // @TODO How to implement a restful endpoint
        // GET /filteredimage?image={{URL}}
        // endpoint to filter an image from a public url.
        // Example - curl --request GET 'http://localhost:3000/filteredimage?image=https://example.com/image.jpg'
        this.app.route(`/`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`try GET /filteredimage?image={{}}`)
            })

        // @TODO Refactor code
        // Need to setup try/catch or if/else on when the url is provided,
        // the server crashed if the image is incorrect
        this.app.route(`/filteredimage`)
            .get((req: express.Request, res: express.Response) => {
                const { image } = req.query

                if(!image){
                    return res.status(400)
                        .send(`Invalid url or no url provided`)
                }
                filterImageFromURL(image as any).then(filteredpath => {
                    res.status(200)
                        .sendFile(filteredpath, () => {
                            deleteLocalFiles
                        })
                })
            })
        return this.app;
    }
}