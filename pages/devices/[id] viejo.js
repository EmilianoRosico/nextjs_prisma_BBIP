import Layout from "components/Layout"
import prisma from 'lib/prisma'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import Image from "next/image"


function Dispositivo({ device }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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

      <div className="accordion accordion-flush" id="deviceSlots">

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-heading<%=element.slot%>">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse<%=element.slot%>" aria-expanded="false" aria-controls="flush-collapse<%=element.slot%>">
              Slot #
            </button>
          </h2>
          <div id="flush-collapse<%=element.slot%>" className="accordion-collapse collapse" aria-labelledby="flush-heading<%=element.slot%>" data-bs-parent="#deviceSlots">
            <div className="accordion-body">
              <div className="container-fluid ">
                <table className="table table-hover">
                  <thead>
                    <tr className="fw-bold">
                      <th>Fecha</th>
                      <th>Usuario</th>
                      <th>Proyecto/SOL</th>
                      <th>Placa/Modulo</th>
                      <th>Licencia</th>
                      <th>Slot</th>
                      <th>Sub</th>
                      <th>Port</th>
                      <th>Estado</th>
                      <th>Espejado</th>
                      <th>ExtremoCliente</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="font-small">

                    <tr>
                      <td>
                        a
                      </td>
                      <td>
a
                      </td>
                      <td>
a
                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <form className="deleteForm" action="/devices/edit/port/releasePort" method="POST">
                            <button>
                              <a href="/devices/edit/port/<%= ele.id %>" onClick="MM_openBrWindow('/devices/edit/port/<%= ele.id %>','Editar Puerto','scrollbars=yes,width=650,height=500'); return false;">
                                <i className="fas fa-edit btn btn-primary"></i>
                              </a>
                            </button>

                            <button type="submit" className=""><i className="fas fa-trash-alt btn btn-danger"></i></button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      devicemodels: true
    }
  })
  //verified if the DB return valid object or send 404.
  if (device != undefined) {
    device.createdAt = String(device.createdAt)
    device.updatedAt = String(device.updatedAt)
    device.nodes.createdAt = String(device.nodes.createdAt)
    device.nodes.updatedAt = String(device.nodes.updatedAt)
    device.versions.createdAt = String(device.versions.createdAt)
    device.versions.updatedAt = String(device.versions.updatedAt)
    device.devicemodels.createdAt = String(device.devicemodels.createdAt)
    device.devicemodels.updatedAt = String(device.devicemodels.updatedAt)
  } else {
    return {
      notFound: true,
    }
  }
  return {
    props: { device }, // will be passed to the page component as props
  }
}

export default Dispositivo
