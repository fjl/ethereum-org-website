import React from "react"
import { motion } from "framer-motion"
import { Button, ButtonProps, Flex, type FlexProps } from "@chakra-ui/react"

import { ClickAnimation } from "./ClickAnimation"
import { PulseAnimation } from "./PulseAnimation"

const MotionFlex = motion(Flex)

interface IProps extends FlexProps, Pick<ButtonProps, "isDisabled"> {
  isAnimated?: boolean
  progressStepper: () => void
}
export const ProgressCta: React.FC<IProps> = ({
  isAnimated = false,
  progressStepper,
  isDisabled,
  children,
  ...flexProps
}) => (
  <MotionFlex
    py={10}
    px={6}
    position="absolute"
    w="full"
    bottom="0"
    initial={{ opacity: 1 }}
    {...flexProps}
  >
    <Button
      w="full"
      onClick={progressStepper}
      isDisabled={isDisabled}
      position="relative"
    >
      <>
        {children}
        {isAnimated && <PulseAnimation type="full-button" />}
        {isAnimated && <ClickAnimation>click!</ClickAnimation>}
      </>
    </Button>
  </MotionFlex>
)
