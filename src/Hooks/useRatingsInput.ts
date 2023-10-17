import { ChangeEvent, useState } from "react"

const useRatingsInput = ( min: number = 0, max: number = 5) => {
  const [prevRatingValue, setPrevRatingValue] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target;
    const value = +input.value;
    if (isNaN(value) || value < min || value > max) {
      input.value = prevRatingValue.toString();
    } else {
      setPrevRatingValue(value)
    }
  }

  return handleChange
}

export default useRatingsInput
