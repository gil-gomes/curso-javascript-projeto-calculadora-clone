class CalController {
    
    constructor() {
        this._displayCalc = "0";
        this.currentDate;

        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let datecEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        datecEl.innerHTML = "20/11/2020";
        timeEl.innerHTML = "09:58";
    }

    get displayCal(c) {

        return this._displayCalc;
    }

    set displayCalc(valor){

        this._displayCalc = valor;
    }

    get dataAtual(){

        return this._displayCalc;
    }

    set dataAtual(v){

        this.currentDate = v;
    }
}