import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1a73e8"/>
          <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#1a73e8"/>
        </svg>
        <span>Analytics</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.section}>
          <div className={`${styles.navItem} ${styles.active}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
            Home
          </div>
          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            Reports
          </div>
          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
            </svg>
            Realtime
          </div>
          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Explore
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>AUDIENCE</div>
          <div className={styles.navItem}>Overview</div>
          <div className={styles.navItem}>Demographics</div>
          <div className={styles.navItem}>Geography</div>
          <div className={styles.navItem}>Behavior</div>
          <div className={styles.navItem}>Technology</div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>ACQUISITION</div>
          <div className={styles.navItem}>Overview</div>
          <div className={styles.navItem}>All Traffic</div>
          <div className={styles.navItem}>Source/Medium</div>
        </div>
      </nav>
    </aside>
  )
}
