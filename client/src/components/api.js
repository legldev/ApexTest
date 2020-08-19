import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000",
})

// Endpoints
export const scrapIt = payload => api.get(`/scrapIt`, payload)
export const scrapFromText = payload => api.get(`/scrapFromText`, payload)

const apiScrap = {
    scrapIt,
    scrapFromText
}

export default apiScrap