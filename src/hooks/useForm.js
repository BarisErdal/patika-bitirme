
import React, { useState, useCallback, useMemo } from "react"

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)
  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.currentTarget
      setValues((prev) => ({ ...prev, [name]: value }))
    },
    []
  )
  const handleSelectChange = useCallback(
    (event) => {
      const { value, name } = event.target
     
      setValues((prev) => ({ ...prev, [name]: value }))
    },
    []
  )
  const patchState = useCallback((patch)=>{
    setValues((prev)=>({...prev,...patch}))
  },[])
  const r = useMemo(
    () => ({ values, handleChange, handleSelectChange,patchState }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values]
  )
  return r
}

export default useForm
