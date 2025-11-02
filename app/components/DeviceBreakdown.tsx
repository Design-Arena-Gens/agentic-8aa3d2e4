'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './DeviceBreakdown.module.css'

const data = [
  { device: 'Desktop', sessions: 15234 },
  { device: 'Mobile', sessions: 23456 },
  { device: 'Tablet', sessions: 6789 },
]

export default function DeviceBreakdown() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Device Category</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
          <XAxis dataKey="device" stroke="#5f6368" style={{ fontSize: '12px' }} />
          <YAxis stroke="#5f6368" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              background: '#fff',
              border: '1px solid #e8eaed',
              borderRadius: '4px',
              fontSize: '13px'
            }}
          />
          <Bar dataKey="sessions" fill="#1a73e8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
