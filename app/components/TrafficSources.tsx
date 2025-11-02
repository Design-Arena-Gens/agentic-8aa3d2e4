'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import styles from './TrafficSources.module.css'

const data = [
  { name: 'Organic Search', value: 42, color: '#1a73e8' },
  { name: 'Direct', value: 28, color: '#34a853' },
  { name: 'Social', value: 18, color: '#fbbc04' },
  { name: 'Referral', value: 12, color: '#ea4335' },
]

export default function TrafficSources() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Traffic Sources</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.list}>
        {data.map((item) => (
          <div key={item.name} className={styles.listItem}>
            <div className={styles.itemInfo}>
              <div className={styles.dot} style={{ background: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span className={styles.value}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
