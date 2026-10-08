import { motion } from 'motion/react'

export default function AnimatedHeading({ as = 'h2', children, className = '', delay = 0 }) {
  const Heading = motion[as]
  return (
    <Heading
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Heading>
  )
}
