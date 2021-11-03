import { Paper, Button, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function ListContent(props) {

    const theme = useTheme();

    const Item = styled(Paper)( ({ theme }) => ({
        textAlign: 'left',
        padding: theme.spacing(1),
        borderRadius: '8px',
    }))

    return (
        <Grid
            item
            key={props.data.id}
            xs={2}
        >
            <Item>
                <Button sx={{ width: '100%', height: 'auto', padding: 0, borderRadius: '8px' }}>
                    <img src={props.data.featured_image} alt={props.data.judul} width="100%" className="list-image" />
                </Button>
                <Typography mt={1} variant="subtitle1" alt={props.data.judul} noWrap gutterBottom>{props.data.judul}</Typography>
                <Typography variant="body2" noWrap>{props.data.rating}</Typography>
                
            </Item>
        </Grid>
    );
}