import Image from 'next/image'
import { NextApiHandler } from 'next'
import { appRoute } from '../../../../server/src/controller/todoRouter'
import { nextHandler } from 'trpc-playground/handlers/next'




export default function Home() {
  const setupHandler = nextHandler({
    router: appRoute,
    trpcApiEndpoint: '/api/trpc',
    playgroundEndpoint: '/api/trpc-playground',
  })

  const handler: NextApiHandler  = async (req, res) => {
    const playgroundHandler = await setupHandler
    await playgroundHandler(req, res)
  }
  return handler
 
}
