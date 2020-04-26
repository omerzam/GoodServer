import throng from 'throng'
import start from './server-prod'

console.log('workers concurrency:', process.env.WEB_CONCURRENCY)
throng({ workers: process.env.WEB_CONCURRENCY, lifetime: Infinity }, start)
