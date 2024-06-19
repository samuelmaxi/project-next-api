"use client"
import { PersonalitiesProps } from "@/@types/personalities"
import { useEffect, useState } from "react"
import Title from "./Title"
import Description from "./Description"
import styles from "./styles/style.module.css"

const Personalities = () => {
  const [apiData, setApiData] = useState<PersonalitiesProps | null>(null)

  useEffect(() => {
    const feachData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/personalidades", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const result = await res.json()
        setApiData({ data: result })
      } catch (error) {
        console.error(error)
      }
    }
    feachData()
  }, [])

  // TODO - ADICIONAR CLASSE NO COMPONENTES
  console.log(apiData)
  return (
    <section className={styles.Container}>
      {apiData?.data && apiData.data.map(personalidades => (
        <div key={personalidades.id} className={styles.Biography}>
          <Title text={personalidades.nome} className={styles.Title} />
          <Description text={personalidades.historia} className={styles.Description}/>
        </div>
      ))}
    </section>
  )
}

export default Personalities