'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import styles from './VisitorsChart.module.css'

const data = [
  { date: 'Jan 26', users: 1200, sessions: 1800 },
  { date: 'Jan 27', users: 1400, sessions: 2100 },
  { date: 'Jan 28', users: 1100, sessions: 1650 },
  { date: 'Jan 29', users: 1600, sessions: 2400 },
  { date: 'Jan 30', users: 1800, sessions: 2700 },
  { date: 'Jan 31', users: 1500, sessions: 2250 },
  { date: 'Feb 1', users: 2000, sessions: 3000 },
]

export default function VisitorsChart() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>Users and Sessions</h2>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.dot} style={{ background: '#1a73e8' }}></div>
            Users
          </div>
          <div className={styles.legendItem}>
            <div className={styles.dot} style={{ background: '#34a853' }}></div>
            Sessions
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
          <XAxis dataKey="date" stroke="#5f6368" style={{ fontSize: '12px' }} />
          <YAxis stroke="#5f6368" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              background: '#fff',
              border: '1px solid #e8eaed',
              borderRadius: '4px',
              fontSize: '13px'
            }}
          />
          <Line type="monotone" dataKey="users" stroke="#1a73e8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="sessions" stroke="#34a853" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
