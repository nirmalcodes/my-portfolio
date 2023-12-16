import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const SlideInAnimation = ({
    component = 'div',
    children,
    width = 'fit-content',
    className,
}) => {
    const MotionElement = motion[component]
    const wrapperRef = useRef(null)
    const isInView = useInView(wrapperRef, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView])

    return (
        <>
            <div ref={wrapperRef} className={className} style={{ width }}>
                <MotionElement
                    variants={{
                        hidden: { opacity: 0, x: -1000 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.85, ease: 'easeInOut' }}
                >
                    {children}
                </MotionElement>
            </div>
        </>
    )
}

export default SlideInAnimation
