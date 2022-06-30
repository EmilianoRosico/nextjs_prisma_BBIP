import Layout from "components/Layout"
import prisma from 'lib/prisma'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import Image from "next/image"
import DeviceGrid2 from "components/DeviceGrid2";

const columns = [
  {
    field: "slot",
    headerName: "Slot",
    width: 101,
  },
  {
    field: "subSlot",
    headerName: "subSlot",
    width: 130,
  },
  {
    field: "port",
    headerName: "Port",
    width: 120,
  },
  {
    field: "boardModule",
    headerName: "Modulo",
    width: 130,
  },
  {
    field: "project",
    headerName: "Proyecto",
    width: 150,
    editable: true,
  }
]


function Dispositivo({ device }) {
  const [show, setShow] = useState(false);
  const [slot, setSlot] = useState(0)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{device.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body variant="center">
          <Image src={`/deviceModels/${device.devicemodels.model}.jpg`} width='150px' height='500px' alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex justify-content-between ps-3">
        <h3>
          {device.name}
        </h3>
        <div className="d-flex align-items-center">
          <a href="/devices/addSlot?id=<%=device.id%>"><span className="btn btn-primary ">Agregar Slot</span></a>
        </div>
      </div>
      <div className="d-flex border ps-3">
        <div className="col-md-3">
          <div className="col-sm">
            <strong>Lo25: </strong>
            {device.ipMgmt}
          </div>
          <div className="col-sm">
            <strong>Lo10: </strong>
            {device.ipIgp}
          </div>
          <div className="col-sm">
            <strong>Nodo: </strong>
            <a href={`/nodes/${device.nodesId}`}>
              {device.nodes.Name}
            </a>
          </div>
          <div className="col-sm">
            <strong>País: </strong>
            {device.nodes.country}
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-sm">
            <strong>Vendor: </strong>
            {device.devicemodels.vendor}
          </div>
          <div className="col-sm">
            <strong>Modelo: </strong>
            <span className='text-primary' onClick={handleShow}>
              {device.devicemodels.model}
            </span>
          </div>
          <div className="col-sm">
            <strong>Estado:</strong>
            {device.status}
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-sm">
            <strong>Nave:</strong>
            {device.room}
          </div>
          <div className="col-sm">
            <strong>Fila:</strong>
            {device.row}
          </div>
          <div className="col-sm">
            <strong>Rack:</strong>
            {device.rack}
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-sm">
            <strong>BackOffice:</strong>
            {device.hierarchy}
          </div>
          <div className="col-sm">
            <strong>Rol:</strong>
            {device.roleId}
          </div>
          <div className="col-sm">
            <strong>Virtual:</strong>
            {device.virtual == 0 ? 'No' : 'Si'}
          </div>
          <div className="col-sm">
            <strong>Lic NSO:</strong>
            {device.nsoLicense == 0 ? 'No' : 'Si'}
          </div>
        </div>
      </div>
      <section>
        <article>
          <Button variant="primary" onClick={() => setSlot(1)}>
            Slot1
          </Button>
          <Button variant="primary" onClick={() => setSlot(9)}>
            Slot9
          </Button>
        </article>
        <article>
          <DeviceGrid2 columns={columns} device={device.ports} slot={slot}/>
        </article>
      </section>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const device = await prisma.devices.findUnique({
    where: {
      id: Number(context.params.id)
    },
    include: {
      nodes: true,
      versions: true,
      devicemodels: true,
      ports: true,
    }
  })
  //verified if the DB return valid object or send 404.
  if (device == undefined) {
    return {
      notFound: true,
    }
  }
  return {
    props: { device: JSON.parse(JSON.stringify(device)) }, // will be passed to the page component as props
  }
}

export default Dispositivo
