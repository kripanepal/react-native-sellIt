import { useState } from 'react';

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const request = async () => {
        setLoading(true)
        const response = await apiFunc();
        if (!response.ok) {
            setError(true)
            return
        }
        setData(response.data)
        setError(false)
        setLoading(false)
    }
    return { data, error, loading, request }
}