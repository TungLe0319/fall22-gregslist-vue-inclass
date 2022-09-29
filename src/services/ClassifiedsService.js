import { AppState } from "../AppState.js"
import { Classified } from "../models/Classified.js"
import { SandboxApi } from "./AxiosService.js"

class ClassifiedsService {

  async getClassifieds() {
    const res = await SandboxApi.get('api/classifieds')
    AppState.classifieds = res.data.map(c => new Classified(c))
    console.log(AppState.classifieds)
  }


  async deleteClassified(id) {
    const res = await SandboxApi.delete(`api/classifieds/${id}`)
    // CAKE SAUCE strawberry middle 🍓
    AppState.classifieds = AppState.classifieds.filter(c => c.id != id)

  }

  async getClassifiedById(id) {
    const res = await SandboxApi.get(`/api/classifieds/${id}`)
    AppState.activeClassified = new Classified(res.data) // Not a POJO!!!
  }

  async getClassifiedByListingType(type){
const res = await SandboxApi.get(`/api/classifieds/`,{
  params:{
    listingType:type
  }
})
 AppState.classifieds = res.data.map((c) => new Classified(c));
  }

  async createClassified(formData) {
    const res = await SandboxApi.post('/api/classifieds', formData)
    AppState.classifieds.push(new Classified(res.data))
    // AppState.classifieds = [...AppState.classifieds, new Classified(res.data)]
  }

  // -----------------------FILTER FUNCTIONS-----------------------//
  // async getOnlyCars(){
  //   AppState.classifieds = AppState.classifieds.filter(c => c.listingType == 'Car')
  // }
  // async getOnlyJobs(){
  //   AppState.classifieds = AppState.classifieds.filter(c => c.listingType == 'Job')
  // }
  // async getOnlyHouses(){
  //   AppState.classifieds = AppState.classifieds.filter(c => c.listingType == 'Houses')
  // }
  async getOnlyType(type){
    console.log(type);
    AppState.classifieds = AppState.classifieds.filter(c => c.listingType == `${type}`)



    if(AppState.classifieds.length < 1){
      await this.getClassifiedByListingType(type)
    }
  }


}

export const classifiedsService = new ClassifiedsService()
