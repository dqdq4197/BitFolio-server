import app from 'index';

const server = app.listen(app.get('port'), () => {
  console.log(`BitFolio App Listening on PORT ${app.get('port')}`)
})

export default server;