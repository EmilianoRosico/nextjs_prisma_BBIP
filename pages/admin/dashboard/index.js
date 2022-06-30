import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";


function index() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container p-0">
                <Navbar />
                <div className="d-flex justify-content-between ps-3">
                <h1>TEST</h1>
                </div>
                <div className="container min-height">

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default index
