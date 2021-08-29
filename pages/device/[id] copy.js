import Layout from "../../components/Layout"

function Dispositivo({device}) {   
    return (
        <Layout>
            <p>{device.id}</p>
            <span>{device.name}</span>
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/equipment/device/${context.params.id}`)
    const device = await res.json()

    if (device.error) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {device}, // will be passed to the page component as props
    }
  }

export default Dispositivo
