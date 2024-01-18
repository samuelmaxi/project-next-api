"use client"
import { useEffect, useState } from 'react'

export type PersonalitiesProps = {
  data: Array<{
    id: string,
    nome: string,
    historia: string
  }>,
}

export default function Personalities() {
  const [apiData, setApiData] = useState<PersonalitiesProps | null>(null)

  useEffect(() => {
    const featData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/personalidades", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const result = await res.json()
        console.log(result)
        setApiData({ data: result })
      } catch (error) {
        console.error("error na api")
      }
    }

    featData()
  }, [])

  console.log(apiData)
  return (

    <section>
      <h1>Hello, Word!</h1>
      {apiData && apiData.data && apiData.data.map(personalidades => (
        <div key={personalidades.id}>
          <h2>{personalidades.nome}</h2>
          <p>{personalidades.historia}</p>
        </div>
      ))}
    </section>
  )
}
