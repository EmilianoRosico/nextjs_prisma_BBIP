import prisma from 'lib/prisma'

export default async function handle(req, res) {
    if (req.method === 'GET') {
        // Process a GET request
        //const solicitud = await prisma.capexs.count({
        //    select: {cellId: true},
        //})
        //let paginado = Number(req.query.pag)*10
        //const solicitud = await prisma.capexs.findMany({
        //    take: 10,
        //    skip: paginado},
        //    
        //    )
        let paginado = Number(req.query.pag)*10
        const solicitud = await prisma.capexs.groupBy({
            by: ['cellId'],
            take: 10,
            skip: paginado,
            _count: {
                id: true
            },
            orderBy: {
                cellId: 'asc'
            }
        },
            
            )
        res.status('200').json(solicitud)
    } else if (req.method === 'POST') {
        // Process a POST request
        res.status('200').json({ 'result': 'Ok!' })
    }
}