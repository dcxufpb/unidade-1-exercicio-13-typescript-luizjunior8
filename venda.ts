import { Loja } from "./loja";

export class Venda {

    constructor(
        public loja: Loja,
        public dataHora : string = (Venda.getSystemData()),
        public ccf : number,
        public coo : number,
    ) { }


    public static getSystemData(): string {
        let data = new Date ()
        let dia : string = data.getDate() < 10 ? `0${data.getDate()}` : `${data.getDate()}`
        let mes : string = data.getMonth() < 10 ? `0${data.getMonth()}` : `${data.getMonth()}`
        let ano : number  = data.getFullYear()
        let hora : string  = data.getHours() < 10 ? `0${data.getHours()}` : `${data.getHours()}`
        let min : string  = data.getMinutes() < 10 ? `0${data.getMinutes()}` : `${data.getMinutes()}`
        let seg : string  = data.getSeconds() < 10 ? `0${data.getSeconds()}` : `${data.getSeconds()}`

        let str_data : string = dia + '/' + (mes+1) + '/' + ano
        let str_hora : string = hora + ':' + min + ':0' + seg + "V"

        return (str_data + str_hora)
    }

    public valida_dados_obrigatorios(): void {

        if (!this.dataHora){
            throw new Error (`Data e hora da venda são obrigatórias`)            
        }

        if (!this.ccf){
            throw new Error (`O campo ccf é obrigatório`)
        }

        if (!this.coo){
            throw new Error (`O campo coo é obrigatório`)
        }
    }

    public dados_venda(): string {

        this.valida_dados_obrigatorios()

        let datahora : string = Venda.getSystemData()

        let _ccf : string = "CCF:" + this.ccf

        let _coo : string = "COO:" + this.coo

        return `${this.loja.dados_loja()}
${datahora}${_ccf}${_coo}
`
    }

}