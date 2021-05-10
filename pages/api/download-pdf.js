import fs from 'fs'
import path from 'path'

export default async (req, res) => {
    const filePath = path.join(path.join(process.cwd(), 'pdf'), `IRTU2020Catalog.pdf`)
    var data = fs.readFileSync(filePath);
    res.setHeader('content-type', 'application/pdf')
    res.send(data);
}