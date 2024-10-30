import { Paper } from "@mui/material"
import MainCard from "components/MainCard"
import globalConfig from 'data/initialConfig';
import { getConfigValueV1 } from "services/configData";

const GrafanaChart = (props: any) => {
    const { url, width, height } = props;
    const graphanaUrl = getConfigValueV1("GRAFANA_URL");
    return <>
        <Paper elevation={globalConfig.elevation}>
            <MainCard content={false} sx={{ mt: 1.5 }}>
                <iframe src={`${graphanaUrl}${url}`} width={width} height={height}></iframe>
            </MainCard>
        </Paper >
    </>
}

export default GrafanaChart;