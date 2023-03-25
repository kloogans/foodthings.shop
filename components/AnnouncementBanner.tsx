import React, { useEffect, useState } from "react"
import FlipNumbers from "react-flip-numbers"
const END_DATE = new Date("2023-04-08T00:00:00.000Z")

const CountDownTimer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const startCountdown = () => {
    const now = new Date()
    // @ts-ignore
    const distance = END_DATE - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  useEffect(() => {
    startCountdown()
    const interval = setInterval(() => {
      startCountdown()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatNumberString = (num: number) =>
    num.toString().length === 1 ? "0" + num.toString() : num.toString()

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center">
        <div className={`number-flipper`}>
          <FlipNumbers
            height={26}
            width={26}
            color="white"
            background="transparent"
            play
            perspective={200}
            numbers={formatNumberString(days)}
          />
        </div>
        <p className="text-white text-xs font-bold">days</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className={`number-flipper`}>
          <FlipNumbers
            height={26}
            width={26}
            color="white"
            background="transparent"
            play
            perspective={200}
            numbers={formatNumberString(hours)}
          />
        </div>
        <p className="text-white text-xs font-bold">hours</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className={`number-flipper`}>
          <FlipNumbers
            height={26}
            width={26}
            color="white"
            background="transparent"
            play
            perspective={200}
            // numbers={String(minutes)}
            // showLeadingZeros
            numbers={formatNumberString(minutes)}
          />
        </div>
        <p className="text-white text-xs font-bold">minutes</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className={`number-flipper`}>
          <FlipNumbers
            height={26}
            width={26}
            color="white"
            background="transparent"
            play
            perspective={200}
            // numbers={String(minutes)}
            // showLeadingZeros
            numbers={formatNumberString(seconds)}
          />
        </div>
        <p className="text-white text-xs font-bold">seconds</p>
      </div>
      <style jsx global>{`
        .number-flipper section span:nth-child(1) {
          margin-right: 0.25rem;
        }
      `}</style>
    </div>
  )
}

export const AnnouncementBanner = ({
  hide = false,
  handleHideBanner
}: {
  hide: boolean
  handleHideBanner: () => void
}) => {
  if (hide) return null
  return (
    <div className="relative w-full flex items-center justify-center px-2 bg-black z-[100]">
      <button
        className="absolute top-0 right-0 px-4 h-full flex items-center group"
        onClick={handleHideBanner}
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-secondary transition-colors duration-200 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="py-2 text-center flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-4 items-center justify-center">
          <div>
            <p className="text-xl lg:text-2xl font-bold leading-none text-white slab">
              free shipping!
            </p>
            <p className="text-white text-xs mb-2 text-right">
              $0 shipping for the next
            </p>
          </div>

          <CountDownTimer />
        </div>
      </div>
    </div>
  )
}
