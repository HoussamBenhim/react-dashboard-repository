import React ,{useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import PanoramaFishEyeTwoToneIcon from '@material-ui/icons/PanoramaFishEyeTwoTone';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { rgb, color } from 'd3';

const StyledRating = withStyles({

    icon: {
       color: 'grey',
    },
    iconFilled: {
        color: '#B6C512',
        
    },
    root: {
        margin: '0px',
    }
})(Rating);

const StyledBox = withStyles({
    root: {
        margin: '0px 0px 0px 10px',
        padding: '0px',
        width: '100%',
        display: 'flex',
        flexDirection : "row",
        flexWrap: "nowrap",
        alignContent: 'center',
    }
})(Box);





export default function ScrRatingChart({SCRMarche,SCRAction, SCRTaux, SCRDevise, SCRContrepartie}) {
    const [ScrMarche, setScrMarche] = React.useState(0);
    const [ScrAction, setScrAction] = React.useState(0);
    const [ScrTaux, setScrTaux] = React.useState(0);
    const [ScrDevise, setScrDevise] = React.useState(0);
    const [ScrContrepartie, setScrContrepartie] = React.useState(0);

    useEffect(()=>{
        //console.log(SCRMarche);
        
        setScrMarche(SCRMarche);
        setScrAction(SCRAction);
        setScrTaux(SCRTaux);
        setScrDevise(SCRDevise);
        setScrContrepartie(SCRContrepartie);
        //console.log(ScrMarche);
    },[SCRMarche,SCRAction, SCRTaux, SCRDevise, SCRContrepartie])
    
    
    return (
        <div>

            <StyledBox component="fieldset" mb={0} borderColor="transparent" style={{marginTop :15}}>
            <Typography display="inline" component="legend" color="inherit" variant="subtitle2" >SCR Marché: {ScrMarche}%</Typography>
                <StyledRating
                    name="customized-color"
                    value={ScrMarche/10}
                    readOnly
                    max={10}
                    precision={0.5}
                   
                    icon={<PanoramaFishEyeTwoToneIcon fontSize="inherit" />}
                />
                 
            </StyledBox>

            <StyledBox component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" color="inherit" variant="subtitle2" >SCR Action: {ScrAction}%</Typography>
                <StyledRating
                    name="customized-color"
                    value={ScrAction/10}
                    readOnly
                    max={10}
                    precision={0.5}
                    icon={<PanoramaFishEyeTwoToneIcon fontSize="inherit" />}
                />
            </StyledBox>

            <StyledBox component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" color="inherit" variant="subtitle2" >SCR Taux:  {ScrTaux}%</Typography>
                <StyledRating
                    name="customized-color"
                    value={ScrTaux/10}
                    readOnly
                    max={10}
                    precision={0.5}
                    icon={<PanoramaFishEyeTwoToneIcon fontSize="inherit" />}
                />
            </StyledBox>

            <StyledBox component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" color="inherit" variant="subtitle2" >SCR Devise: {ScrDevise}%</Typography>
                <StyledRating
                    name="customized-color"
                    value={ScrDevise/10}
                    readOnly
                    max={10}
                    precision={0.5}
                    icon={<PanoramaFishEyeTwoToneIcon fontSize="inherit" />}
                />
            </StyledBox>

            <StyledBox component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" color="inherit" variant="subtitle2" >SCR Contrepartie: {ScrContrepartie}%</Typography>
                <StyledRating
                    name="customized-color"
                    value={ScrContrepartie/10}
                    readOnly
                    max={10}
                    precision={0.5}
                    icon={<PanoramaFishEyeTwoToneIcon fontSize="inherit" />}
                />
            </StyledBox>


        </div>
    );
}
