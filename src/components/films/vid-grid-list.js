import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";


import bgImage from '../../../static/assets/images/bgImage.jpg';
import aaron from '../../../static/assets/images/aaron.jpg';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//   [etc...]

  const tileData = [
    {
      img: bgImage,
      title: 'Kennedy and Josh',
      type: 'Wedding',
      slug: 'kennedy_josh',
      
    },
    {
      img: aaron,
      title: 'Hannah and Josh',
      type: 'Wedding',
      slug: "hannah_josh"
    },
    {
      img: aaron,
      title: 'Hermana Ohlsen',
      type: 'HomeComing',
      slug: "hermana_ohlsen"
    },
  ];
 
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">VIDEOS</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>type: {tile.type}</span>}
              actionIcon={
                <Link to={`/films/${props.slug}`}>
                <IconButton className={classes.icon}>
                
                  <InfoIcon />
                </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);