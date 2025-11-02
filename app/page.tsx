'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MetricsCards from './components/MetricsCards'
import VisitorsChart from './components/VisitorsChart'
import PageViewsTable from './components/PageViewsTable'
import TrafficSources from './components/TrafficSources'
import RealtimeUsers from './components/RealtimeUsers'
import DeviceBreakdown from './components/DeviceBreakdown'
import GeographicData from './components/GeographicData'
import styles from './page.module.css'

export default function Home() {
  const [dateRange, setDateRange] = useState('Last 7 days')

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header dateRange={dateRange} setDateRange={setDateRange} />
        <div className={styles.content}>
          <RealtimeUsers />
          <MetricsCards />
          <VisitorsChart />
          <div className={styles.grid}>
            <PageViewsTable />
            <TrafficSources />
          </div>
          <div className={styles.grid}>
            <DeviceBreakdown />
            <GeographicData />
          </div>
        </div>
      </main>
    </div>
  )
}
