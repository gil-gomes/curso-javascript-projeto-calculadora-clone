class CalController {
    
    constructor() {
        this._displayCal = "0";
        this.currentDate;

        this.initialize();
    }

    initialize(){
        
    }

    get displayCal() {

        return this._displayCal;
    }

    set displayCal(valor){

        this._displayCal = valor;
    }

    get dataAtual(){

        return this._displayCal;
    }

    set dataAtual(v){

        this.currentDate = v;
    }
}