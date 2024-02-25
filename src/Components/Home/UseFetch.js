import {useEffect, useState} from "react";

const UseFetch = (url, updateFlag) => {

            const [data, setData] = useState(null)
            const [isLoading, setLoading] = useState(true)
            const [error, setError] = useState(null)

            useEffect(() => {

            const abortCont = new AbortController()

                setTimeout(()=>{ // здесь SetTimeOut из-за WebStorm - если его убрать то пост с HM
                    fetch(url, {signal: abortCont.signal}).then((res) => {

                        if (res.ok !== true) {
                            throw Error('Could not fetch the data from this resources')
                        }
                        return res.json()
                    }).then((data) => {
                        setData(data)
                        setLoading(false)
                        setError(null)
                    }).catch((err) => {
                        if (err.name === "AbortError") {
                            console.log("Fetch aborted")
                        } else {
                            setError(err.message)
                            setLoading(false)
                        }
                    })
                }, 10)


            return () => {
                abortCont.abort()
            }
        }, [updateFlag])

            return {data, isLoading, error}
};

export default UseFetch;