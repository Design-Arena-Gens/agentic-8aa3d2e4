import styles from './Header.module.css'

interface HeaderProps {
  dateRange: string
  setDateRange: (range: string) => void
}

export default function Header({ dateRange, setDateRange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Home</h1>
        <span className={styles.property}>All Web Site Data</span>
      </div>

      <div className={styles.controls}>
        <button className={styles.dateRange}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
          </svg>
          {dateRange}
        </button>

        <button className={styles.iconButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
