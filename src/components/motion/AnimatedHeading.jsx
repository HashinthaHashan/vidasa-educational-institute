import { motion, useReducedMotion } from 'motion/react'

export default function AnimatedHeading({ as = 'h2', children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  const Heading = motion[as]
  return (
    <Heading
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Heading>
  )
}
