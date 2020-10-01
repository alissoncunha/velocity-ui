import React from 'react'
import styles from './styles.module.css'

export { Input, Button } from './lib';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}