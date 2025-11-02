import styles from './GeographicData.module.css'

const countries = [
  { country: 'United States', flag: '🇺🇸', users: 8234, sessions: 12456, percentage: 38 },
  { country: 'United Kingdom', flag: '🇬🇧', users: 4567, sessions: 6890, percentage: 21 },
  { country: 'Canada', flag: '🇨🇦', users: 3210, sessions: 4876, percentage: 15 },
  { country: 'Germany', flag: '🇩🇪', users: 2345, sessions: 3567, percentage: 11 },
  { country: 'Australia', flag: '🇦🇺', users: 1987, sessions: 2987, percentage: 9 },
  { country: 'France', flag: '🇫🇷', users: 1234, sessions: 1876, percentage: 6 },
]

export default function GeographicData() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Users by Country</h2>
      <div className={styles.list}>
        {countries.map((country) => (
          <div key={country.country} className={styles.listItem}>
            <div className={styles.countryInfo}>
              <span className={styles.flag}>{country.flag}</span>
              <span className={styles.country}>{country.country}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.users}>{country.users.toLocaleString()}</span>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: `${country.percentage}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
