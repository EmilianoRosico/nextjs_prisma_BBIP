import Grid from "../../components/Grid"
import Layout from "../../components/Layout"


function index() {
    return (
        <Layout>
            <main>
            <div className="d-flex justify-content-between ps-3">
                <h1>TEST</h1>
                <div className="d-flex align-items-center">
                    <a href="/devices/add"><span className="btn btn-primary ">Agregar Equipo</span></a>
                </div>
            </div>
            <Grid />
            </main>
        </Layout>
    )
}

export default index
