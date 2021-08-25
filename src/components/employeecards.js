import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	icon: {
    	marginRight: theme.spacing(2),
  	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

function EmployeeСards() {
	const classes = useStyles();
	let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	

  	return (
    	<main>
        	<div className={classes.heroContent}>
          		<Container maxWidth="sm">
            		<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              			Welcome to My company
            		</Typography>
            		<Typography variant="h5" align="center" color="textSecondary" paragraph>
						This site is an implementation of a test task
						for the Neti React developer candidate.
            		</Typography>
            		<div className={classes.heroButtons}>
              			<Grid container spacing={2} justifyContent="center">
                			<Grid item>
                  				<Button variant="contained" color="primary">
								  Adding a new employee
                  				</Button>
                			</Grid>
              			</Grid>
            		</div>
          		</Container>
        	</div>
        	<Container className={classes.cardGrid} maxWidth="md">
          		<Grid container spacing={4}>
            		{cards.map((card) => (
              			<Grid item key={card} xs={12} sm={6} md={4}>
                			<Card className={classes.card}>
                  				<CardMedia
                    				className={classes.cardMedia}
                    				image="https://source.unsplash.com/random"
                    				title="Image title"
                  				/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										User name (ФИО)
									</Typography>
									<Typography>
										должность (опционально из справочника.
										Например: руководитель проекта, front-end разработчик и т.д.);
										занятость (опционально из справочника полная/частичная);
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										View
									</Button>
									<Button size="small" color="primary">
										Delete
									</Button>
								</CardActions>
                			</Card>
              			</Grid>
            		))}
          		</Grid>
        	</Container>
      	</main>
  	);
}

export default EmployeeСards;