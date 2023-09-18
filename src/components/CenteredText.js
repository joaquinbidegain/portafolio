import { Grid, Typography } from "@mui/material";

export function CenteredText(){
    return(
    <Grid container direction="column" justify="space-around" justifyContent="flex-start" alignItems="center" spacing={3}>
        <Grid item xs={6}>
            <Typography variant="body1" align="center" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie eros id malesuada dictum. Mauris vitae dignissim dui, sed tempus tellus. Praesent porta vel sem vitae aliquam. Cras lobortis vulputate ante et rutrum. Pellentesque hendrerit metus a lectus efficitur, vel scelerisque eros fermentum. Praesent sed erat vitae lorem consequat rutrum. Donec sagittis tincidunt nulla, eget iaculis libero. Donec at varius velit, et tristique libero. Mauris non tristique justo, nec vehicula sapien. Duis ut eros sodales, maximus ligula nec, pharetra velit. Suspendisse nec sapien vitae lacus dapibus congue. Etiam mollis lacus eu nulla ultrices, ac tristique urna tincidunt. Donec vestibulum fermentum risus non feugiat. Nullam vel consectetur augue, et fermentum neque. Suspendisse elit nibh, porttitor ac felis non, ultricies tristique est. Etiam scelerisque euismod mattis.
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie eros id malesuada dictum. Mauris vitae dignissim dui, sed tempus tellus. Praesent porta vel sem vitae aliquam. Cras lobortis vulputate ante et rutrum. Pellentesque hendrerit metus a lectus efficitur, vel scelerisque eros fermentum. Praesent sed erat vitae lorem consequat rutrum. Donec sagittis tincidunt nulla, eget iaculis libero. Donec at varius velit, et tristique libero. Mauris non tristique justo, nec vehicula sapien. Duis ut eros sodales, maximus ligula nec, pharetra velit. Suspendisse nec sapien vitae lacus dapibus congue. Etiam mollis lacus eu nulla ultrices, ac tristique urna tincidunt. Donec vestibulum fermentum risus non feugiat. Nullam vel consectetur augue, et fermentum neque. Suspendisse elit nibh, porttitor ac felis non, ultricies tristique est. Etiam scelerisque euismod mattis.</Typography>
        </Grid>
    </Grid>
    );
}
