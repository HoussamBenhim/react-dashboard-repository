import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import AppStyle from './App.css';
import Paper from './Filtres/FIltre'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box/Box';
import DoughnutChart from './Chart/DoughnutChart'
import Barchart from './Chart/BarChart'
import RatingBarCahrt from './Chart/RatingBarChart'
import MaturityBarChart from './Chart/MatrityBarCahrt'
import CountrepartieTable from './Chart/ContrepartieTable'
import GeoChart from './Chart/GeoChart'
import Geodata from './Chart/custom.json'
import ScrRatingChart from './Chart/ScrCahrt'
import { creatDataActifs as loadDataActif } from './API';
import { creatData, filtreData, calcul_Maturity_Moyenne, create_Data_Countrepartie } from './API'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1500px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  item: {
    minWidth: '300px',
  }
}));

/*------------------------creation données -------------------------*/
function createData(Entreprise, Exposition, Secteur, key) {
  return { Entreprise, Exposition, Secteur, key };
}

const rows = [
  createData('RECKITT BENCKISER GROUP PLC', '3.37%', 'Activités des services financiers', 0),
  createData('AIR LIQUIDE', '3.34%', 'Industrie chimique', 1),
  createData('DNCA FINANCE LUXEMBOURG', '3.24%', 'DNCA FINANCE LUXEMBOURG', 3),
  createData('RECKITT BENCKISER GROUP PLC', '3.37%', 'Activités des services financiers', 4),
  createData('AIR LIQUIDE', '3.34%', 'Industrie chimique', 5),
  createData('DNCA FINANCE LUXEMBOURG', '3.24%', 'DNCA FINANCE LUXEMBOURG', 6),
  createData('AIR LIQUIDE', '3.34%', 'Industrie chimique', 7),
  createData('DNCA FINANCE LUXEMBOURG', '3.24%', 'DNCA FINANCE LUXEMBOURG', 8),
  createData('RECKITT BENCKISER GROUP PLC', '3.37%', 'Activités des services financiers', 9),
  createData('AIR LIQUIDE', '3.34%', 'Industrie chimique', 10),
  createData('DNCA FINANCE LUXEMBOURG', '3.24%', 'DNCA FINANCE LUXEMBOURG', 11),
  createData('RECKITT BENCKISER GROUP PLC', '3.37%', 'Activités des services financiers', 12),
];

function stringFyArray(array) {
  var jsonCountriesArray = {};
  let objectArray = array.map((row) => {
    Object.defineProperty(jsonCountriesArray, row, {
      configurable: false,
      enumerable: false,
      value: row,
      writable: true
    });
  }, {})
  return jsonCountriesArray
}

/*-------------------------------------------------------------------------*/
export default function App() {

  const [property, setProperty] = useState('wb_a2');
  const [dataActifs, setDataActifs] = useState({ data: [0, 0, 0], labels: ['', '', ''] });
  const [dataActif, setDataActif] = useState({ data: [0, 0, 0], labels: ['', '', ''] });
  const [statut, setStatut] = useState(true);
  const [dataSecteur, setDataSecteur] = useState({ data: [0, 0, 0, 0, 0], labels: ['', '', '', '', ''] })
  const [dataRating, setDataRating] = useState({ data: [0, 0, 0, 0, 0], labels: ['', '', '', '', ''] })
  const [dataCountries, setDataCountries] = useState({})
  const [dataMaturity, setDataMaturity] = useState({ data: [0, 0, 0, 0, 0, 0, 0, 0, 0], labels: ['', '', '', '', '', '', '', '', ''] })
  const [dataCountreparties, setDataCountreparties] = useState([[], [[], []]]);
  const [filtreActif, setFiltreActif] = useState('')
  // cette fontion load les données de l'Array dataAactifs et les met dans la variable d'état dataActif (sans S)
  useEffect(() => {
    let fetchData = loadDataActif();
    let fetchDataSecteur = creatData('8', true);
    let fetchDataRating = creatData('9', true);
    /* données sur les pays--------------------*/
    let fetchDataCountries = creatData('7', true);
    let jsonDataCountries = stringFyArray(fetchDataCountries[0])

    // ------Maturité Moyenne -------------------

    let fetchDataMaturity = calcul_Maturity_Moyenne();

    let fechtDataCountrepartie = create_Data_Countrepartie('6', true);


    /*-----------------------------------------*/

    setDataActifs({ data: fetchData[1], labels: fetchData[0] })
    setDataActif({ data: fetchData[1], labels: fetchData[0] })
    setDataSecteur({ data: fetchDataSecteur[1], labels: fetchDataSecteur[0] })
    setDataRating({ data: fetchDataRating[1], labels: fetchDataRating[0] })
    setDataCountries(jsonDataCountries)
    setDataMaturity({ data: fetchDataMaturity[0], labels: fetchDataMaturity[1] })
    setDataCountreparties(fechtDataCountrepartie)
  }, dataActifs.data, dataSecteur.data);

  // cette fonction gère les click sur Actif -----------------------------
  const handelClickSecteur = (label) =>{
    
  }
  const handelClickActif = (label) => {
    setFiltreActif(label)
    if (statut) {
      let newData = new Array(dataActifs.data.length);
      let newlabels = new Array(dataActifs.data.length);
      newData.fill(0, 0, newData.length);
      newlabels = dataActifs.labels.slice(0);
      newData.splice(dataActifs.labels.indexOf(label), 1, dataActifs.data[dataActifs.labels.indexOf(label)]);
      setDataActif({ data: newData, labels: newlabels });
      let dataSecteurFiltre = filtreData(label, '8');
      if (dataSecteurFiltre[1].length < 4) {
        let i;
        for (i = dataSecteurFiltre[1].length; i <= 4; i++) {
          dataSecteurFiltre[1][i] = 0;
          dataSecteurFiltre[0][i] = '';
        }
        setDataSecteur({ data: dataSecteurFiltre[1], labels: dataSecteurFiltre[0] });
      } else {
        setDataSecteur({ data: dataSecteurFiltre[1], labels: dataSecteurFiltre[0] });
      }
      let dataRatingFiltre = filtreData(label, '9');
      if (dataRatingFiltre[1].length < 4) {
        let i;
        for (i = dataRatingFiltre[1].length; i <= 4; i++) {
          dataRatingFiltre[1][i] = 0;
          dataRatingFiltre[0][i] = '';
        }
        setDataRating({ data: dataRatingFiltre[1], labels: dataRatingFiltre[0] })
      } else {
        setDataRating({ data: dataRatingFiltre[1], labels: dataRatingFiltre[0] })
      }

      setStatut(false);

      let dataCountriesFiltre = filtreData(label, '7');
      let jsonDataCountries = stringFyArray(dataCountriesFiltre[0])
      setDataCountries(jsonDataCountries)

      if (label === "BD") {
        let fetchDataMaturity = calcul_Maturity_Moyenne();
        setDataMaturity({ data: fetchDataMaturity[0], labels: fetchDataMaturity[1] });
      } else {
        let dataZero = new Array(dataMaturity.labels.length);
        dataZero.fill(0, 0, dataZero.length);
        setDataMaturity({ data: dataZero, labels: dataMaturity.labels });
      }

      let fechtDataCountrepartieFiltre = create_Data_Countrepartie('6', true, label);
      setDataCountreparties(fechtDataCountrepartieFiltre)

    } else {
      setFiltreActif('')
      setDataActif(dataActifs);
      let fetchDataSecteur = creatData('8', true);
      setDataSecteur({ data: fetchDataSecteur[1], labels: fetchDataSecteur[0] });
      let fetchDataRating = creatData('9', true);
      setDataRating({ data: fetchDataRating[1], labels: fetchDataRating[0] })

      let fetchDataCountries = creatData('7', true);

      let jsonDataCountries = stringFyArray(fetchDataCountries[0])
      setDataCountries(jsonDataCountries);
      let fetchDataMaturity = calcul_Maturity_Moyenne();
      setDataMaturity({ data: fetchDataMaturity[0], labels: fetchDataMaturity[1] });

      let fechtDataCountrepartie = create_Data_Countrepartie('6', true);
      setDataCountreparties(fechtDataCountrepartie)
      setStatut(true);
    }
  }
  //------------------------------------------------------------------------------------
  const classes = useStyles();




  return (
    <div>
      <Header />
      <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>
        <Grid item xs={12} className={classes.item}  >
          <Paper labelAactif={filtreActif}  handelClickActif={handelClickActif}/>
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} >
          {dataActifs.data.length > 0 ? <Box Tittle={'Classes d\'Actifs'} content={<DoughnutChart datas={dataActif} handelClickActif={handelClickActif} />} /> : <Box Tittle={'... Data Loading'} />}

        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={6} >
          {dataSecteur.data.length > 0 ? <Box Tittle={'Top 5 des secteurs d\'Activités'} content={<Barchart datas={dataSecteur}  handelClickSecteur={ handelClickSecteur} />} /> : <Box Tittle={'... Data Loading'} />}
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} >
          <Box Tittle={'SCR Marché'} content={<ScrRatingChart SCRMarche={80} SCRAction={50} SCRTaux={20} SCRDevise={80} SCRContrepartie={90} />} />
        </Grid>
        {/* 2eme ligne*/}

        <Grid item xs={12} sm={10} md={5} lg={3} >
          {dataRating.data.length > 0 ? <Box Tittle={'Poids par Rating'} content={<RatingBarCahrt data={dataRating.data} labels={dataRating.labels} />} /> : <Box Tittle={'... Data Loading'} />}
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={6} >
          <Box Tittle={'Exposition  Geographique'} content={<GeoChart data={Geodata} property={property} countries={dataCountries} />} />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} >
          <Box Tittle={'ESG & Carbon'} />
        </Grid>

        {/* 3eme ligne*/}

        <Grid item xs={12} sm={10} md={5} lg={3} >
          <Box Tittle={'Maturité Moyenne'} content={<MaturityBarChart data={dataMaturity.data} labels={dataMaturity.labels} />} />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={6} >
          <Box Tittle={'Contreparties'} content={<CountrepartieTable data={rows} datas={dataCountreparties} />} />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} >
          <Box Tittle={'Risque Climatique'} />

        </Grid>
      </Grid>




    </div>
  );

}

