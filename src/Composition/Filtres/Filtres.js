import { map } from "d3"

const data =new map();

const createObject = (inst_code,inst_type,mkt_value,maturity_date,cic_code,issuer_name,issuer_country,issuer_sector,rating) =>{
    return {
        instCode : inst_code,
        instType : inst_type,
        mktValue: mkt_value,
        maturity: maturity_date,
        cicCode: cic_code,
        issuerName: issuer_name,
        issuerCountry: issuer_country,
        issueSector: issuer_sector,
        rating : rating,
    }

}

    

export const filtre=()=>{

}