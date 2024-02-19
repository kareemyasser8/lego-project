import { useEffect, useState } from 'react'

const useTempCartId = () => {
    const tempCart_id = localStorage.getItem("temporaryCartId")
    const [tempCartId, setTempCartId] = useState(tempCart_id)

    useEffect(() => {
        setTempCartId(tempCart_id)
    }, [tempCart_id])

    return tempCartId;
}

export default useTempCartId