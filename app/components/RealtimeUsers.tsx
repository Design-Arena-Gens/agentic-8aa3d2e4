import styles from './RealtimeUsers.module.css'

export default function RealtimeUsers() {
  return (
    <div className={styles.realtime}>
      <div className={styles.pulse}></div>
      <span className={styles.count}>247</span>
      <span className={styles.label}>active users right now</span>
    </div>
  )
}
