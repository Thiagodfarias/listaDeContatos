class ContactClass {
  contactName: string
  contactNumber: number
  contactEmail: string
  label: string
  favorite: boolean
  id: number

  constructor(
    contactName: string,
    contactNumber: number,
    contactEmail: string,
    label: string,
    favorite: boolean,
    id: number
  ) {
    this.contactName = contactName
    this.contactNumber = contactNumber
    this.contactEmail = contactEmail
    this.label = label
    this.favorite = favorite
    this.id = id
  }
}

export default ContactClass
