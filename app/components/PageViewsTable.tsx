import styles from './PageViewsTable.module.css'

const pages = [
  { page: '/home', pageviews: 12543, uniqueViews: 10234, avgTime: '2:34', bounceRate: '32.5%' },
  { page: '/products', pageviews: 9876, uniqueViews: 8234, avgTime: '3:12', bounceRate: '28.3%' },
  { page: '/about', pageviews: 5432, uniqueViews: 4876, avgTime: '1:45', bounceRate: '45.2%' },
  { page: '/contact', pageviews: 3210, uniqueViews: 2987, avgTime: '2:03', bounceRate: '52.1%' },
  { page: '/blog', pageviews: 8765, uniqueViews: 7234, avgTime: '4:22', bounceRate: '23.8%' },
]

export default function PageViewsTable() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Top Pages</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Page</th>
              <th>Pageviews</th>
              <th>Unique Views</th>
              <th>Avg. Time</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={index}>
                <td className={styles.pageCell}>{page.page}</td>
                <td>{page.pageviews.toLocaleString()}</td>
                <td>{page.uniqueViews.toLocaleString()}</td>
                <td>{page.avgTime}</td>
                <td>{page.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
