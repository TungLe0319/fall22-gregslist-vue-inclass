

export class Job { 
  constructor(data){
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.company = data.company
    this.rate = data.rate
  }
}
