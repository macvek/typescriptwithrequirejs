import { FromModule } from "./includeMe";

export class MainTsClass {
    private fromModule : FromModule
    private header : HTMLHeadingElement

    constructor( header : HTMLHeadingElement) {
        this.header = header
        this.fromModule = new FromModule()
    }

    changeColor(newColor:string) {
        if (newColor == 'red') {
            this.fromModule.changeToRed(this.header)
        }
        else if (newColor == 'blue') {
            this.fromModule.changeToBlue(this.header)
        }
    }
}

