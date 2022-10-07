const createChassis = () => {
    // Create a new object. No properties yet.
	const newChassisObject = {	}
    
	return newChassisObject
}
let newChassisObject = createChassis()

const addBody = () => {
	newChassisObject.body = "Fever"
	return newChassisObject
}


const addWheels =() => {
    newChassisObject.wheels = 4
    return newChassisObject
    
}


const addEngine = () => {
    newChassisObject.engine = "4.8L"
    return newChassisObject
}


const addSteeringWheel = () => {
    newChassisObject.addSteeringWheel= "Tilting"
    return newChassisObject
}


const addDriveTrain = () => {
    newChassisObject.driveTrain = "Two wheel drive"
    return newChassisObject
}


createChassis()
addBody(newChassisObject)
addWheels(newChassisObject)
addSteeringWheel(newChassisObject)
addDriveTrain(newChassisObject)
addEngine(newChassisObject)
console.log (newChassisObject)