import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardComponent from './card';

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
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

function EmployeeСards() {
	const classes = useStyles();
	var cards = [];
	const [cardCount, addCardCount] = useState(5);

	for(var i=0;i<cardCount;i++)
		cards.push(i);

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
                  				<Button variant="contained" color="primary" onClick={() => addCardCount(cardCount+1)}>
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
              			<CardComponent key={card} />
            		))}
          		</Grid>
        	</Container>
      	</main>
  	);
}

export default EmployeeСards;