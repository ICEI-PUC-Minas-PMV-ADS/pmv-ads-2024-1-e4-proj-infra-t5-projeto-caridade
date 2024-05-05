import { apiCharity } from "../apiCharity";

let config = {
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
} 

export class CharityServices{
  static async getAllProjectIds() {
    const response = await apiCharity.get("/active/ids?api_key=1727baac-3269-4c64-ba2a-2471ec20e3ba", config)
    return response.data
  }

  static async getById(id: number) {
    const response = await apiCharity.get(`projects/collection/ids?api_key=1727baac-3269-4c64-ba2a-2471ec20e3ba&projectIds=${id}`, config)      
    return response.data
  }

  static async getProjectsByIds(ids: number[]) {
    const response = await apiCharity.get(`projects/collection/ids?api_key=1727baac-3269-4c64-ba2a-2471ec20e3ba&projectIds=
      ${ids[0]},${ids[1]},${ids[2]},${ids[3]},${ids[4]},${ids[5]},${ids[6]},${ids[7]},${ids[8]},${ids[9]}`, config
    )
    return response.data
  }
}