import styles from './MetricsCards.module.css'

const metrics = [
  { label: 'Users', value: '12,345', change: '+12.5%', positive: true },
  { label: 'Sessions', value: '45,678', change: '+8.3%', positive: true },
  { label: 'Bounce Rate', value: '42.3%', change: '-3.2%', positive: true },
  { label: 'Session Duration', value: '3m 24s', change: '+15.7%', positive: true },
]

export default function MetricsCards() {
  return (
    <div className={styles.grid}>
      {metrics.map((metric) => (
        <div key={metric.label} className={styles.card}>
          <div className={styles.label}>{metric.label}</div>
          <div className={styles.value}>{metric.value}</div>
          <div className={`${styles.change} ${metric.positive ? styles.positive : styles.negative}`}>
            {metric.change}
          </div>
        </div>
      ))}
    </div>
  )
}
