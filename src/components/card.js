import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import getrandomUsers from './getrandomusers';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		cursor: 'pointer'
	},
	cardContent: {
		flexGrow: 1,
	},
	typographyContent: {
		color: 'gray',
	}
}));

export default function CardComponent(props) {
	const classes = useStyles();
	const user = getrandomUsers();
	const [isVisible, changeIsVisible] = useState(true);

	if(isVisible)
		return (
			<Grid item key={props.card} xs={12} sm={6} md={4}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.cardMedia}
						image="https://source.unsplash.com/random"
						title="Image title"
					/>
					<CardContent className={classes.cardContent}>
						<Typography gutterBottom variant="h5" component="h2">
							{user.name}
						</Typography>
						<Typography component="div">
							<Typography><span className={classes.typographyContent}>position: </span>{user.position}</Typography>
							<Typography><span className={classes.typographyContent}>busyness: </span>{user.busyness}</Typography>
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">View</Button>
						<Button size="small" color="primary" onClick={() => changeIsVisible(false)}>Delete</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	else
		return null;
}