// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'lib/prisma'

export default async function handle(req, res) {
  let paginado = Number(req.query.pag)*10
  let model =  undefined
  if (req.query.model == "all"){
    model = undefined
  } else{
    model = req.query.model
  }
  if (req.method === 'GET') {
    // Process a GET request
    const devices = await prisma.devices.findMany({
      take: 10,
      skip: paginado,
      include: {
      nodes: true,
      versions: true,
      devicemodels: true
    },where: {
      status: req.query.status,
      devicemodels: {
        model: model
      }
    },
    })
    res.status('200').json(devices)
  } else if (req.method === 'POST') {
    // Process a POST request
    res.status('200').json({'result': 'Ok!'})
  } 
}

/*
switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
*/