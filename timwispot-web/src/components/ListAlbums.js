import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const ListAlbums = ({ albums }) => {
  return (
    <List>
      {albums.map((album, i) => (
        <ListItem key={album.id}>
          <ListItemAvatar>
            <img src={album.image_url} alt="" />
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="h4">{`${i + 1}. ${album.title}`}</Typography>} secondary={
            <>
              <Typography variant="h5">{album.artist_name}</Typography><Typography variant="h6">{album.release_date}</Typography></>} />
        </ListItem>
      ))}
    </List>
  )
};
export default ListAlbums;