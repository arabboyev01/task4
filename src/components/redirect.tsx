import ManagmentTable from '@/components/ManagmentTable'
import { token } from "@/config"
import React, { useState, useEffect } from 'react'
import Login from '@/pages/login'


const Redirect = () => {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient && !token || token === "undefined") {
    return <Login />
  }

  return isClient && <ManagmentTable />
}

export default Redirect;


