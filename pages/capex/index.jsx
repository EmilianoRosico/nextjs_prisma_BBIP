import Layout from "components/Layout";
import { Button, Modal, Row, Col} from "react-bootstrap";
import { useState } from "react";
import FormCreateRequest from "components/formCreateRequest";
import DeviceGrid from "components/DeviceGrid";
import RequestGrid from "components/RequestGrid";

function index() {
  const [showFormRequest, setShowFormRequest] = useState(false);
  const handleCloseFormRequest = () => setShowFormRequest(false);
  const handleShowFormRequest = () => setShowFormRequest(true);

  return (
    <Layout>
      <Modal show={showFormRequest} onHide={handleCloseFormRequest} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCreateRequest />
        </Modal.Body>
        {/*
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        */}
      </Modal>
      <main>
        <Row className="mb-3 flex-row-reverse">
        <Col md="auto">
          <Button variant="primary" onClick={handleShowFormRequest}>
            Carga Nueva Solicitud
          </Button>
          </Col>
          <Col md="auto">
          <Button>PRUEBA</Button>
          </Col>
        </Row>
        <RequestGrid />
      </main>
    </Layout>
  );
}

export default index;
