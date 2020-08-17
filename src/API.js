export function createDataBrut(inst_code, inst_type, inst_currency, mkt_value, maturity_date, cic_code, issuer_name, issuer_country, issuer_sector, rating) {
    return [inst_code, inst_type, inst_currency, mkt_value, maturity_date, cic_code, issuer_name, issuer_country, issuer_sector, rating];
}

export const dataBrut = [
    createDataBrut("FR0012650281", "BD", "EUR", "4808839,93", "9999-12-31", "XV25", "AIR FRANCE - KLM", "FR", "H51", "NULL"),
    createDataBrut("XS1434160971", "BD", "EUR", "4922050", "2021-06-14", "XV22", "AIRBUS SE", "NL", "C30", "a"),
    createDataBrut("BE6317643334", "BD", "EUR", "1366789,16", "9999-12-31", "XV22", "AKKA TECHNOLOGIES", "BE", "M71", "NULL"),
    createDataBrut("DE000A19W2L5", "BD", "EUR", "4481344", "2025-03-05", "XV22", "ams AG", "AT", "C26", "NULL"),
    createDataBrut("XS1730873731", "BD", "EUR", "1741852,82", "2023-01-17", "XV21", "ArcelorMittal", "LU", "C24", "bb"),
    createDataBrut("XS0179060974", "BD", "EUR", "638721,25", "9999-12-31", "XV25", "AXA", "FR", "K65", "a"),
    createDataBrut("FR0010154385", "BD", "EUR", "1622778,14", "9999-12-31", "XV28", "CASINO. GUICHARD-PERRACHON", "FR", "G47", "b"),
    createDataBrut("DE000A254Y92", "BD", "EUR", "5849734,29", "2027-01-23", "XV22", "Delivery Hero SE", "DE", "J63", "NULL"),
    createDataBrut("XS1881804006", "BD", "EUR", "493273,44", "2022-02-21", "XV21", "FCA Bank SpA Ireland", "IE", "K64", "NULL"),
    createDataBrut("XS1590503279", "BD", "EUR", "2967278,92", "2020-08-26", "XV21", "FCE BANK PLC", "GB", "K64", "bb"),
    createDataBrut("XS1720053229", "BD", "EUR", "1550818,38", "2021-01-16", "XV21", "Ferrari N.V.", "NL", "C29", "NULL"),
    createDataBrut("XS1987729768", "BD", "EUR", "1266350,58", "2026-05-30", "XV21", "FNAC DARTY", "FR", "G47", "bb"),
    createDataBrut("XS1322536506", "BD", "EUR", "5278921,3", "2022-11-17", "XV22", "INTERNATIONAL CONSOLIDATED AIRLINES GROUP. S.A.", "ES", "H51", "bb"),
    createDataBrut("FR0013331188", "BD", "EUR", "5734312,3", "2021-11-25", "XV21", "ILIAD", "FR", "J61", "NULL"),
    createDataBrut("XS1500463358", "BD", "EUR", "4241391,3", "2023-10-07", "XV22", "INDRA SISTEMAS. S.A.", "ES", "J58", "NULL"),
    createDataBrut("FR0011912872", "BD", "EUR", "1724820,7", "2021-05-20", "XV21", "INGENICO GROUP", "FR", "C26", "NULL"),
    createDataBrut("XS2166095146", "BD", "EUR", "660388,23", "2026-04-30", "XV22", "Just Eat Takeaway.com N.V.", "NL", "G47", "NULL"),
    createDataBrut("FR0013153160", "BD", "EUR", "788021,7", "2023-04-13", "XV21", "LAGARDERE SCA", "FR", "J58", "NULL"),
    createDataBrut("XS1757843146", "BD", "EUR", "2036383,25", "2023-01-25", "XV21", "PIRELLI & C. S.P.A.", "IT", "C22", "NULL"),
    createDataBrut("FR0013309606", "BD", "EUR", "661072,69", "2023-01-12", "XV21", "RCI BANQUE", "FR", "K64", "bbb"),
    createDataBrut("XS2115156270", "BD", "EUR", "1452255,17", "2025-02-11", "XV21", "BANCO SANTANDER. S.A.", "ES", "K64", "a"),
    createDataBrut("DE000A14J579", "BD", "EUR", "1651406,78", "2020-11-25", "XV21", "thyssenkrupp AG", "DE", "C24", "bb"),
    createDataBrut("US88160RAG65", "BD", "USD", "830791,08", "2024-05-15", "XV22", "TESLA. INC.", "US", "C29", "NULL"),
    createDataBrut("FR0013448412", "BD", "EUR", "5648272", "2024-09-24", "XV22", "UBISOFT ENTERTAINMENT", "FR", "J58", "NULL"),
    createDataBrut("XS1734547919", "BD", "EUR", "2472375", "2021-06-15", "XV21", "Volkswagen Bank Gesellschaft mit beschrÃ¤nkter Haftung", "DE", "K64", "a"),
    createDataBrut("EUR", "CU", "EUR", "-1292271,65", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "-2177247,19", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("SEK", "CU", "SEK", "-598795,92", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("CHF", "CU", "CHF", "-211941,35", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "603442,77", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("USD", "CU", "USD", "-1641151,88", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("USD", "CU", "USD", "879605,07", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("SEK", "CU", "SEK", "598795,92", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("CHF", "CU", "CHF", "211941,35", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("GBP", "CU", "GBP", "182774,22", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "1440253,07", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "17062,5", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "-320726,74", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "94863,8", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "-698474,51", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "-10637,81", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "47491,41", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("EUR", "CU", "EUR", "2202329,9", "NULL", "XT72", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("FR0000120073", "EQ", "EUR", "5729664,6", "NULL", "FR31", "AIR LIQUIDE", "FR", "C20", "a"),
    createDataBrut("FR0000053951", "EQ", "EUR", "7149199,2", "NULL", "FR31", "AIR LIQUIDE", "FR", "C20", "a"),
    createDataBrut("FR0000071946", "EQ", "EUR", "6646804,2", "NULL", "FR31", "ALTEN", "FR", "J62", "NULL"),
    createDataBrut("NL0010273215", "EQ", "EUR", "11920721,4", "NULL", "NL31", "ASML Holding N.V.", "NL", "C28", "a"),
    createDataBrut("FR0013280286", "EQ", "EUR", "5527803,8", "NULL", "FR31", "BIOMERIEUX SA", "FR", "C21", "NULL"),
    createDataBrut("IE0001827041", "EQ", "EUR", "10809297,4", "NULL", "IE31", "CRH PUBLIC LIMITED COMPANY", "IE", "C23", "bbb"),
    createDataBrut("DE0005810055", "EQ", "EUR", "10435084,5", "NULL", "DE31", "Deutsche BÃ¶rse Aktiengesellschaft", "DE", "K66", "aa"),
    createDataBrut("PTEDP0AM0009", "EQ", "EUR", "8291104,58", "NULL", "PT31", "EDP ? ENERGIAS DE PORTUGAL. S.A.", "PT", "D35", "bbb"),
    createDataBrut("IT0003128367", "EQ", "EUR", "9210813,01", "NULL", "IT31", "ENEL - SPA", "IT", "D35", "bbb"),
    createDataBrut("SE0000108656", "EQ", "SEK", "8007828,28", "NULL", "SE31", "Telefonaktiebolaget LM Ericsson", "SE", "C26", "bb"),
    createDataBrut("DE000A161408", "EQ", "EUR", "4459710", "NULL", "DE31", "HelloFresh SE", "DE", "H53", "NULL"),
    createDataBrut("ES0144580Y14", "EQ", "EUR", "9192594,43", "NULL", "ES31", "IBERDROLA SA", "ES", "D35", "bbb"),
    createDataBrut("NL0000009827", "EQ", "EUR", "7877358,45", "NULL", "NL31", "Koninklijke DSM N.V.", "NL", "C10", "a"),
    createDataBrut("FR0000120321", "EQ", "EUR", "9889605,9", "NULL", "FR31", "L'OREAL", "FR", "C20", "NULL"),
    createDataBrut("FR0000121014", "EQ", "EUR", "9715125", "NULL", "FR31", "LVMH MOET HENNESSY LOUIS VUITTON", "FR", "C15", "a"),
    createDataBrut("CH0038863350", "EQ", "CHF", "3124829,27", "NULL", "CH31", "NestlÃ© S.A.", "CN", "C10", "aa"),
    createDataBrut("IT0005366767", "EQ", "EUR", "4189274,18", "NULL", "IT31", "NEXI SPA", "IT", "J62", "bb"),
    createDataBrut("DK0060534915", "EQ", "DKK", "7703452,65", "NULL", "DK31", "NOVO NORDISK A/S", "DK", "C21", "a"),
    createDataBrut("FR0000184798", "EQ", "EUR", "7938691,2", "NULL", "FR31", "ORPEA", "FR", "Q87", "NULL"),
    createDataBrut("DE000LED02V0", "EQ", "EUR", "8038800", "NULL", "DE31", "OSRAM Licht AG", "DE", "C27", "NULL"),
    createDataBrut("IE00BWT6H894", "EQ", "EUR", "956413,5", "NULL", "IE31", "Flutter Entertainment Public Limited Company", "IE", "R92", "bb"),
    createDataBrut("NL0013654783", "EQ", "EUR", "5668331,8", "NULL", "NL31", "Prosus N.V.", "NL", "J60", "bbb"),
    createDataBrut("DE0006969603", "EQ", "EUR", "10512684", "NULL", "DE31", "PUMA SE", "DE", "C32", "a"),
    createDataBrut("GB00B24CGK77", "EQ", "GBP", "12995679,43", "NULL", "GB31", "RECKITT BENCKISER GROUP PLC", "GB", "K64", "a"),
    createDataBrut("FR0000039091", "EQ", "EUR", "1352850", "NULL", "FR31", "ROBERTET SA", "FR", "C25", "NULL"),
    createDataBrut("CH0012032048", "EQ", "CHF", "11659647,66", "NULL", "CH31", "Roche Holding AG", "CN", "C21", "aa"),
    createDataBrut("FR0000073272", "EQ", "EUR", "10052746,38", "NULL", "FR31", "SAFRAN", "FR", "C30", "NULL"),
    createDataBrut("FR0000120578", "EQ", "EUR", "10543513,68", "NULL", "FR31", "SANOFI", "FR", "C21", "a"),
    createDataBrut("DE0007164600", "EQ", "EUR", "11950301,5", "NULL", "DE31", "SAP SE", "DE", "J58", "a"),
    createDataBrut("CH0418792922", "EQ", "CHF", "5202961,29", "NULL", "CH31", "Sika AG", "CN", "C23", "a"),
    createDataBrut("DE000A2YN900", "EQ", "EUR", "5488952,82", "NULL", "DE31", "TeamViewer AG", "DE", "J58", "NULL"),
    createDataBrut("FR0000051807", "EQ", "EUR", "7415027,6", "NULL", "FR31", "TELEPERFORMANCE SE", "FR", "N82", "bbb"),
    createDataBrut("FR0000121329", "EQ", "EUR", "7666356,36", "NULL", "FR31", "THALES", "FR", "C26", "bbb"),
    createDataBrut("FR0000124141", "EQ", "EUR", "8561636,42", "NULL", "FR31", "VEOLIA ENVIRONNEMENT", "FR", "E36", "bbb"),
    createDataBrut("FR0013447729", "EQ", "EUR", "2740821,6", "NULL", "FR31", "Verallia SA", "FR", "C23", "NULL"),
    createDataBrut("FR0000127771", "EQ", "EUR", "10039914,9", "NULL", "FR31", "VIVENDI SE", "FR", "J59", "bbb"),
    createDataBrut("FR0011981968", "EQ", "EUR", "11875742,96", "NULL", "FR31", "WORLDLINE", "FR", "J63", "bbb"),
    createDataBrut("VGM0 Index", "FUTI", "EUR", "-603442,76", "2020-06-19", "DEA1", "EUREX Clearing Aktiengesellschaft", "DE", "K66", "NULL"),
    createDataBrut("ESM0 Index", "FUTI", "USD", "843677,73", "2020-06-19", "USA1", "CHICAGO MERCANTILE EXCHANGE INC.", "US", "K66", "NULL"),
    createDataBrut("LU1526313595", "MF", "EUR", "5001430", "NULL", "XL44", "DNCA FINANCE LUXEMBOURG", "LU", "K66", "NULL"),
    createDataBrut("LU2040190618", "MF", "EUR", "2506110,6", "NULL", "XL46", "DNCA FINANCE LUXEMBOURG", "LU", "K66", "NULL"),
    createDataBrut("LU1490785331", "MF", "EUR", "4997000", "NULL", "XL44", "DNCA FINANCE LUXEMBOURG", "LU", "K66", "NULL"),
    createDataBrut("FR0013412871", "MF", "USD", "5400693,82", "NULL", "XL41", "IXIOS ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("FR0010653501", "MF", "EUR", "4994426,43", "NULL", "XL41", "TOCQUEVILLE FINANCE SA", "FR", "K66", "NULL"),
    createDataBrut("SX7E 12 21 C70 Index", "OP", "EUR", "2541000", "2021-12-17", "XLB1", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("SX5E 7 P2750 Index", "OP", "EUR", "4397250", "2020-07-17", "XLC1", "CREDIT MUTUEL ASSET MANAGEMENT", "FR", "K66", "NULL"),
    createDataBrut("NLM0 Index", "FUTI", "USD", "797474,16", "2020-06-19", "USA1", "CHICAGO MERCANTILE EXCHANGE INC.", "US", "K66", "NULL")
]


export const creatDataActifs = () => {
    let map = new Map();
    let dataActif = dataBrut.map((row, index) => {
        if (map.has(row[1])) {
            map.set(row[1], map.get(row[1]) + parseFloat(row[3]))
        } else {
            map.set(row[1], parseFloat(row[3]))
        }
    })
    // 
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let values = Array.from(mapSorted.values()).map(element => Math.abs(element));
    let somme = values.reduce((precendentValue, currentValue) => { return (precendentValue + currentValue) });
    values = values.map(mktVlue => ((mktVlue / somme) * 100).toFixed(2))
    let keys = Array.from(mapSorted.keys());
    keys = keys.filter((actif, index) => values[index] > 2);
    values = values.filter(value => value > 2)

    return [keys, values]
}


export const creatData = (DataIndex, slice) => {

    let map = new Map();
    let somme = 0;
    let dataActif = dataBrut.map((row, index) => {
        somme = somme + parseFloat(row[3]);
        if (map.has(row[parseInt(DataIndex)])) {
            map.set(row[parseInt(DataIndex)], map.get(row[parseInt(DataIndex)]) + parseFloat(row[3]))
        } else {
            map.set(row[parseInt(DataIndex)], parseFloat(row[3]))
        }
    })
    //                                                                                                                                                                                                                                                      
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let values = Array.from(mapSorted.values()).map(element => Math.abs(element));
    //let somme = values.reduce((precendentValue, currentValue) => { return (precendentValue + currentValue) });
    values = values.map(mktVlue => ((mktVlue / somme) * 100).toFixed(2))
    let keys = Array.from(mapSorted.keys());
    if (slice) {
        keys = keys.slice(0, 5);
        values = values.slice(0, 5);
    }
    return [keys, values]
}

export const filtreData = (filtreActif, DataIndex, indiceFiltre) => {
    let map = new Map();
    let somme = 0;
    let dataSecteur = dataBrut.filter((row) => {
        somme = somme + parseFloat(row[3]);
        if (row[indiceFiltre ? parseInt(indiceFiltre) : 1] === filtreActif) {
            return row
        }
    })
    //dataSecteur = dataSecteur.sort((a, b) => parseFloat(b[3]) - parseFloat(a[3]))

    let dataActif = dataSecteur.map((row, index) => {
        if (map.has(row[parseInt(DataIndex)])) {
            map.set(row[parseInt(DataIndex)], map.get(row[parseInt(DataIndex)]) + parseFloat(row[3]))
        } else {
            map.set(row[parseInt(DataIndex)], parseFloat(row[3]))
        }
    })
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let values = Array.from(mapSorted.values()).map(element => Math.abs(element));

    values = values.map(mktVlue => ((mktVlue / somme) * 100).toFixed(2))
    let keys = Array.from(mapSorted.keys());
    keys = keys.slice(0, 5);
    values = values.slice(0, 5);

    return [keys, values]
}

export const doubleFiltre = (filtreActif, filtreSecteur, DataIndex) => {
    let map = new Map();
    let somme = 0;
    let dataSecteur = dataBrut.filter((row) => {
        somme = somme + parseFloat(row[3]);
        if (row[1] === filtreActif && row[8] === filtreSecteur) {
            return row
        }
    })
    //dataSecteur = dataSecteur.sort((a, b) => parseFloat(b[3]) - parseFloat(a[3]))

    let dataActif = dataSecteur.map((row, index) => {
        if (map.has(row[parseInt(DataIndex)])) {
            map.set(row[parseInt(DataIndex)], map.get(row[parseInt(DataIndex)]) + parseFloat(row[3]))
        } else {
            map.set(row[parseInt(DataIndex)], parseFloat(row[3]))
        }
    })
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let values = Array.from(mapSorted.values()).map(element => Math.abs(element));

    values = values.map(mktVlue => ((mktVlue / somme) * 100).toFixed(2))
    let keys = Array.from(mapSorted.keys());
    keys = keys.slice(0, 5);
    values = values.slice(0, 5);

    return [keys, values]
}

export const calcul_Maturity_Moyenne = () => {
    let map = new Map();
    let mapMaturity = new Map();
    let fetchDataMaturite = creatData('4', false);
    let dataMaturite = fetchDataMaturite[0].map((row, index) => {
        if (row != 'NULL') {
            let dateNow = Date.now();
            let maturity_date = new Date(row).getTime();
            let maturity_en_annee = Math.round((maturity_date - dateNow) / (1000 * 60 * 60 * 24 * 365).toFixed(1));
            map.set(row, maturity_en_annee);
            maturity_en_annee = maturity_en_annee > 20 ? '>20' : maturity_en_annee;
            if (mapMaturity.has(maturity_en_annee)) {
                mapMaturity.set(maturity_en_annee, parseFloat(mapMaturity.get(maturity_en_annee)) + parseFloat(fetchDataMaturite[1][index]));
            } else {
                mapMaturity.set(maturity_en_annee, parseFloat(fetchDataMaturite[1][index]));
            }

        }
    })

    const mapSorted = new Map([...mapMaturity.entries()].sort());
    let values = Array.from(mapSorted.values());
    let keys = Array.from(mapSorted.keys());

    return [values, keys];
}

export const create_Data_Countrepartie = (DataIndex, slice, filtre, indiceFiltreActif) => {
    let map = new Map();
    let somme = 0;
    let dataActif = dataBrut.map((row, index) => {
        somme = somme + parseFloat(row[3]);
        if (filtre) {
            if (filtre === row[indiceFiltreActif ? parseInt(indiceFiltreActif) : 1] && map.has(row[parseInt(DataIndex)])) {
                map.set(row[parseInt(DataIndex)], [map.get(row[parseInt(DataIndex)])[0] + parseFloat(row[3]), row[8]])
            } else if (filtre === row[indiceFiltreActif ? parseInt(indiceFiltreActif) : 1]) {
                map.set(row[parseInt(DataIndex)], [parseFloat(row[3]), row[8]])
            }
        } else
            if (map.has(row[parseInt(DataIndex)])) {
                map.set(row[parseInt(DataIndex)], [map.get(row[parseInt(DataIndex)])[0] + parseFloat(row[3]), row[8]])
            } else {
                map.set(row[parseInt(DataIndex)], [parseFloat(row[3]), row[8]])
            }
    })
    //   
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1][0] - a[1][0]));
    let values = Array.from(mapSorted.values());
    // console.log(somme);
    values = values.map(row => [((row[0] / somme) * 100).toFixed(2), row[1]])
    let keys = Array.from(mapSorted.keys());
    if (slice) {
        keys = keys.slice(0, 10);
        values = values.slice(0, 10);
    }
    return [keys, values];

}

export const doubleFiltreDataContreparties = (DataIndex, slice, filtreActif, filtreSecteur ) => {
    let map = new Map();
    let somme = 0;
    let dataActif = dataBrut.map((row, index) => {
        somme = somme + parseFloat(row[3]);
        if (filtreActif && filtreSecteur ) {
            if (filtreActif === row[1] && filtreSecteur === row[8]  && map.has(row[parseInt(DataIndex)])) {
                map.set(row[parseInt(DataIndex)], [map.get(row[parseInt(DataIndex)])[0] + parseFloat(row[3]), row[8]])
            } else if (filtreActif === row[1] && filtreSecteur === row[8]) {
                map.set(row[parseInt(DataIndex)], [parseFloat(row[3]), row[8]])
            }
        } else
            if (map.has(row[parseInt(DataIndex)])) {
                map.set(row[parseInt(DataIndex)], [map.get(row[parseInt(DataIndex)])[0] + parseFloat(row[3]), row[8]])
            } else {
                map.set(row[parseInt(DataIndex)], [parseFloat(row[3]), row[8]])
            }
    })
    //   
    const mapSorted = new Map([...map.entries()].sort((a, b) => b[1][0] - a[1][0]));
    let values = Array.from(mapSorted.values());
    // console.log(somme);
    values = values.map(row => [((row[0] / somme) * 100).toFixed(2), row[1]])
    let keys = Array.from(mapSorted.keys());
    if (slice) {
        keys = keys.slice(0, 10);
        values = values.slice(0, 10);
    }
    return [keys, values];

}

