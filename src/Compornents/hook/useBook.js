import { useEffect, useState } from "react"


const useBook = detailsId => {

    const [service, setService] = useState();

    useEffect( () => {
        const url = `AcadamicBooks.json/${detailsId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    } ,[detailsId])

    return [service, setService];
}

export default useBook;