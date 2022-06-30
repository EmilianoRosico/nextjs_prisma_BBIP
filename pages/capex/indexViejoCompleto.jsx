import Layout from "components/Layout";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

function index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [requestedBy, setRequestedBy] = useState("");
  const [requerimiento, setRequerimiento] = useState("");
  const [cellId, setCellId] = useState("");
  const [fechaObjetivo, setFechaObjetivo] = useState("");
  const [redundancia, setRedundancia] = useState("");
  const [bandwidth, setBandwidth] = useState("");
  const [puertosElectricos, setPuertosElectricos] = useState("");
  const [puertosOpticos1gb, setPuertosOpticos1gb] = useState("");
  const [puertosOpticos10gb, setPuertosOpticos10gb] = useState("");
  const [puertosOpticos100gb, setPuertosOpticos100gb] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [message, setMessage] = useState("");
  const [messageOk, setMessageOk] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    setMessageOk("");
    if (title.length < 4) {
      setMessage("Title required at least 4 characters");
    } else if (puertosElectricos < 0 || puertosOpticos1gb < 0 || puertosOpticos10gb < 0 || puertosOpticos100gb < 0) {
      setMessage("Los puertos no pueden ser negativos.");
    } else if (requestedBy.length <= 0 || requerimiento.length <= 0 || cellId.length <= 0 || redundancia.length <= 0) {
      setMessage("En los desplegables no puede quedar Elija...");
    } else {
      try {
        let res = await fetch("http://localhost:3000/api/capex", {
          method: "POST",
          body: JSON.stringify({
            tituloProyecto: title,
            areaSolicitante: requestedBy,
            requerimiento: requerimiento,
            cellId: cellId,
            fechaObjetivo: fechaObjetivo,
            redundancia: redundancia,
            bandwidth: bandwidth,
            puertosElectricos: Number(puertosElectricos),
            puertosOpticos1gb: Number(puertosOpticos1gb),
            puertosOpticos10gb: Number(puertosOpticos10gb),
            puertosOpticos100gb: Number(puertosOpticos100gb),
            comentarios: comentarios,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        //let resJson = await res.json();
        if (res.status === 200) {
          setTitle("");
          setRequestedBy("");
          setRequerimiento("");
          setCellId("");
          setFechaObjetivo("");
          setRedundancia("");
          setBandwidth("");
          setPuertosElectricos("");
          setPuertosOpticos1gb("");
          setPuertosOpticos10gb("");
          setPuertosOpticos100gb("");
          setComentarios("");
          setMessageOk("Solicitud registrada.");
          setMessage("")
        } else {
          setMessage("Sucedio un error al crear la solicitud.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Layout>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div>{message ? <p className="message">{message}</p> : null}</div>
            <div>{messageOk ? <p className="messageOk">{messageOk}</p> : null}</div>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Título Proyecto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="DC TelcoCloud"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Área Solicitante</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={requestedBy}
                  onChange={(e) => setRequestedBy(e.target.value)}
                >
                  <option defaultValue>Elija</option>
                  <option value="Plat.CS/IMS Core">
                    Plataformas CS/IMS Core - Edgardo Gross
                  </option>
                  <option value="Plat. VA y SDM">
                    Plataformas VA y SDM - Laura Rodriguez
                  </option>
                  <option value="Ing. Microondas">
                    Ingeniería Microondas - Jose Ignacio Celada
                  </option>
                  <option value="Plan. Infrea E&F">
                    Planificación Infreaestructura E&F - Marcos Humphreys
                  </option>
                  <option value="Ing. Transmisión">
                    Ingeniería Transmisión - Esteban Lazcano
                  </option>
                  <option value="Plat Packet Core">
                    Plataformas Packet Core - Marcelo Lopez
                  </option>
                  <option value="Optimización">
                    Optimización - Gonzalo Bacelli
                  </option>
                  <option value="Soporte Corp. Infra Red">
                    Soporte Corp. Infraestruct. de Red - Gonzalo Juncos
                  </option>
                  <option value="Arquitectura de Red">
                    Arquitectura de Red - Javier Navarro
                  </option>
                  <option value="Automatización_Estrategia">
                    Automatización y Estrategia - German Perez Trozzi
                  </option>
                  <option value="Networking y Seg Logica">
                    Networking y Seg Logica - Santiago Bruny
                  </option>
                  <option value="TV y Proyectos Especiales">
                    TV y Proyectos Especiales - Claudio Duro
                  </option>
                  <option value="Ing. Agregación  IP">
                    Ingenieria Agregación IP - Martin Alvarez
                  </option>
                  <option value="Plan. técnica">
                    Planificación técnica - Daniel Frega
                  </option>
                  <option value="Ing. de Proyectos">
                    Ingeniería de Proyectos - Pablo Llorenz
                  </option>
                  <option value="Consultoría y Diseño">
                    Consultoría y Diseño - Renzo Folini
                  </option>
                  <option value="Ing. Acceso Movil">
                    Ingenieria Acceso Movil - Jorge Brunello
                  </option>
                  <option value="Seguridad Fisica">
                    Seguridad Fisica y Electrónica - Cristian Juarez
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Tipo de Requerimiento</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={requerimiento}
                  onChange={(e) => setRequerimiento(e.target.value)}
                >
                  <option defaultValue>Elija...</option>
                  <option value="Ampliación">Ampliación</option>
                  <option value="Nueva plataforma">Nueva plataforma</option>
                  <option value="Sin necesidad">Sin necesidad</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Cell ID</Form.Label>
                <Form.Select
                  aria-label="cellId"
                  value={cellId}
                  onChange={(e) => setCellId(e.target.value)}
                >
                  <option defaultValue>Elija...</option>
                  <option value="AMB806-TC3068">AMB806-TC3068</option>
                  <option value="AP030">AP030</option>
                  <option value="AS019">AS019</option>
                  <option value="AS023">AS023</option>
                  <option value="BA024">BA024</option>
                  <option value="BA081">BA081</option>
                  <option value="BA095">BA095</option>
                  <option value="BA162">BA162</option>
                  <option value="BA172">BA172</option>
                  <option value="C1154">C1154</option>
                  <option value="C1900">C1900</option>
                  <option value="C2369">C2369</option>
                  <option value="C2767">C2767</option>
                  <option value="C2768">C2768</option>
                  <option value="C2770">C2770</option>
                  <option value="C3676">C3676</option>
                  <option value="C5218">C5218</option>
                  <option value="CA078">CA078</option>
                  <option value="CB201">CB201</option>
                  <option value="CB204">CB204</option>
                  <option value="CF129">CF129</option>
                  <option value="CF223">CF223</option>
                  <option value="CHR02">CHR02</option>
                  <option value="CO008">CO008</option>
                  <option value="CO065">CO065</option>
                  <option value="CO704">CO704</option>
                  <option value="CO905">CO905</option>
                  <option value="CR001">CR001</option>
                  <option value="CT200">CT200</option>
                  <option value="ER054">ER054</option>
                  <option value="JU001">JU001</option>
                  <option value="ME038">ME038</option>
                  <option value="ME099">ME099</option>
                  <option value="ME205">ME205</option>
                  <option value="MI001">MI001</option>
                  <option value="MO022">MO022</option>
                  <option value="MO0274">MO0274</option>
                  <option value="MO201">MO201</option>
                  <option value="NQ074">NQ074</option>
                  <option value="PA201">PA201</option>
                  <option value="RJ001">RJ001</option>
                  <option value="RN092">RN092</option>
                  <option value="SC205">SC205</option>
                  <option value="SF044">SF044</option>
                  <option value="SF903">SF903</option>
                  <option value="SFE903">SFE903</option>
                  <option value="ST201">ST201</option>
                  <option value="ST206">ST206</option>
                  <option value="TC2470">TC2470</option>
                  <option value="TC2471">TC2471</option>
                  <option value="TC2740">TC2740</option>
                  <option value="TC3397">TC3397</option>
                  <option value="TCF296">TCF296</option>
                  <option value="TCF296 ">TCF296</option>
                  <option value="TCO895">TCO895</option>
                  <option value="TF004">TF004</option>
                  <option value="TF007">TF007</option>
                  <option value="TME298">TME298</option>
                  <option value="TS1001">TS1001</option>
                  <option value="TU001">TU001</option>
                  <option value="No-BBIP">Otro</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Fecha Objetivo</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={fechaObjetivo}
                  onChange={(e) => setFechaObjetivo(e.target.value)}
                  placeholder="DC TelcoCloud"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Tipo de conexión</Form.Label>
                <Form.Select
                  aria-label="cellId"
                  value={redundancia}
                  onChange={(e) => setRedundancia(e.target.value)}
                >
                  <option defaultValue>Elija...</option>
                  <option value="Single Homed">Single Homed</option>
                  <option value="Dual Homed">Dual Homed</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Ancho de banda requerido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={bandwidth}
                  onChange={(e) => setBandwidth(e.target.value)}
                  placeholder="18Gb"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Puertos eléctricos</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={puertosElectricos}
                  onChange={(e) => setPuertosElectricos(e.target.value)}
                  placeholder="10"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Puertos ópticos 1Gb</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={puertosOpticos1gb}
                  onChange={(e) => setPuertosOpticos1gb(e.target.value)}
                  placeholder="6"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Puertos ópticos 10Gb</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={puertosOpticos10gb}
                  onChange={(e) => setPuertosOpticos10gb(e.target.value)}
                  placeholder="4"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Puertos ópticos 100Gb</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={puertosOpticos100gb}
                  onChange={(e) => setPuertosOpticos100gb(e.target.value)}
                  placeholder="2"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <p>
                <strong>Comentario:</strong> Indicar total de puertos a
                conectar, si indica tipo de conexión <em>"Dual Homed"</em> los
                puertos se dividiran entre los 2 PE del sitio.
              </p>
              <Form.Label htmlFor="comentarios">
                Por favor deje cualquier aclaración pertinente:
              </Form.Label>
              <Form.Control
                type="text"
                id="comentarios"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              />
            </Row>
            <Button className="btn btn-primary" type="submit">
              Crear Requerimiento
            </Button>
          </Form>
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
        <div className="d-flex justify-content-between ps-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Carga Nueva Solicitud</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Ver Solicitudes</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </main>
      <style jsx>
        {`
          .messageOk {
            color: green;
            text-align: center;
            font-weight: bold;
          }
          .message {
            color: red;
            text-align: center;
            font-weight: bold;
          }
        `}
      </style>
    </Layout>
  );
}

export default index;
