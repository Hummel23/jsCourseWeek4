module.exports = class Appartment{
    constructor(id, street, postalCode,area, city, numRooms, rent, sqm, landlordId, isRented){
        this.id = id
        this.street = street
        this.postalCode = postalCode
        this.area = area
        this.city = city
        this.numRooms = numRooms
        this.rent = rent
        this.sqm = sqm
        this.landlordId = landlordId
        this.isRented = isRented
    }

    static create(appartment){
        return new Appartment(appartment.id, appartment.street,
        appartment.postalCode, appartment.area, appartment.city,
        appartment.numRooms, appartment.rent, appartment.sqm, appartment.landlordId, appartment.isRented)
    }

}