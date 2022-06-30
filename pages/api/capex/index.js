import prisma from 'lib/prisma'

export default async function handle(req, res) {
  switch (req.method) {
    case 'GET':
      // Get data from your database
      const capex = await prisma.capexs.findMany({
      })
      res.status(200).json(capex)
      break
    case 'POST':
      // Update or create data in your database
      let data = req.body
      data.solicitante = "CTI7952"
      data.createdAt = new Date()
      data.updatedAt = new Date()
      await prisma.capexs.create({data})
      console.log(data);
      res.status(200).json({ 'result': 'Ok!' })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}