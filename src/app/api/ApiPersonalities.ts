import { PersonalitiesProps } from "@/@types/personalities"

async function ApiPersonalities() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/personalidades", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const result = await res.json()
    return result
  } catch (error) {
    console.error("error na api")
  }
}


export default ApiPersonalities