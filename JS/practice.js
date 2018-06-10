class HospitalEmployee {
    constructor (name, certifications) {
        this._name = name;
        this._certifications = certifications;
        this._remainingVacationDays = 20;
    }

    //Getters
    get name() {
        return this._name;
    }

    get certifications() {
        return this._certifications;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    //Methods
    takeVacation(daysOff) {
        return this._remainingVacationDays -= daysOff;
    }

    addCertification(newCert) {
        return this.certifications.push(newCert);
    }
}  

//Child Classes
class Nurse extends HospitalEmployee {
    constructor(name, certifications, powa) {
    super(name, certifications);
    this._powa = powa;
    }

    get powa() {
        return this._powa;
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, certifications, giggle) {
        super(name, certifications);
        this._giggle = giggle;
    }

    get giggle() {
        return this._giggle;
    }
}

let nurseOla = new Nurse('Ola', ['Trauma', ' Pediatrics'], 'POWA UP');
let doctorOrtiz = new Doctor('Kristiano', ['Trauma', ' Optometry'], 'giggle');

nurseOla.takeVacation(10);
doctorOrtiz.takeVacation(1);
doctorOrtiz.addCertification(' Cosmetics');

console.log(`Name: ${nurseOla.name} Certifications: ${nurseOla.certifications}`);
console.log(`Name: ${doctorOrtiz.name} Certifications: ${doctorOrtiz.certifications}`);
console.log(`${nurseOla.name} has ${nurseOla.remainingVacationDays} vacation days left.`);
console.log(`${doctorOrtiz.name} has ${doctorOrtiz.remainingVacationDays} vacation days left.`);
console.log(`${doctorOrtiz.name} likes to ${doctorOrtiz.giggle}.`);
console.log(`${nurseOla.name} likes to ${nurseOla.powa}.`);