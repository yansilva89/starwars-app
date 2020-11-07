import api from './ApiUrl'

export async function getPeople() {
  try {
    const response = await api.get(`/people`)
    return response.data 
  } catch (error) {
    return error
  }
}

export async function getPeopleInfo(id) {
  try {
    const response = await api.get(`/people/${id}`)
    return response.data 
  } catch (error) {
    return error
  }
}
