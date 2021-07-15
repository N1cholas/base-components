import React from 'react'
import styles from './index.module.less'

const Select: React.FC<{ title: string }> = ({ title }) => {
  return <section className={styles.select}>{title}</section>
}

export default Select
