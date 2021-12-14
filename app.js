import serverless from "serverless-http"
import Koa from "koa"
import logger from 'koa-pino-logger'

const app = new Koa()
app.use(logger())
app.use(async ctx => {
  ctx.body = 'Hello World';
});

const handler = serverless(app)
export { app, handler }

// Specify a port if you want to run a local server, for testing
const port = process.env.PORT
if (port) {
  const server = app.listen(process.env.PORT)
  console.log(`Listening on :${process.env.PORT}`)
  function handleExit() {
    server.close()
  }
}
