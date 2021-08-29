import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Devices() {
  const { data, error } = useSWR('/api/equipment/devices/1', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className={styles.grid}>
      {data.map((device) => (
        <a key={device.id} className={styles.card}>
            <h5>{`Device: ${device.name}`}</h5>
            <span>{`IP: ${device.ipMgmt}`}</span>
        </a>
      ))}
    </div>
  )
}