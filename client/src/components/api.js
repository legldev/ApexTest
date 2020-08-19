import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000",
})

// Endpoints
export const scrapIt = payload => api.get(`/scrapIt`, payload)

const apiScrap = {
    scrapIt
}

export default apiScrap