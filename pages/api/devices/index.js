// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'lib/prisma'

export default async function handle(req, res) {

  if (req.method === 'GET') {
    // Process a GET request
    const devices = await prisma.devices.findMany({
      include: {
        nodes: true,
        versions: true,
        devicemodels: true
      },
    })
    res.status('200').json(devices)
  } else if (req.method === 'POST') {
    // Process a POST request
    res.status('200').json({ 'result': 'Ok!' })
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