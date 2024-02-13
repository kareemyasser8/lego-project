import { motion } from "framer-motion"
import React, { ReactNode } from "react"
import fadeInAnimationVariants from "../constants/fadeInAnimationVariants"

interface Props {
  children: ReactNode
  index?: number | 1
}

const AnimatedDiv = ({ children, index }: Props) => (
  <motion.div
    variants={fadeInAnimationVariants}
    initial={"initial"}
    whileInView={"animate"}
    viewport={{ once: true }}
    custom={index}
    key={index}
  >
    {children}
  </motion.div>
)

export default AnimatedDiv
