import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ListAlbums = ({ albums }) => {
  return (
    <List>
      {albums.map(album => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src={album.image_url} alt="" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="{album.title}" secondary={
            <>
              <Typography variant="h4">{album.artist_name}</Typography><Typography variant="h6">{album.release_date}</Typography></>} />
        </ListItem>
      ))}
    </List>
  )
};
export default ListAlbums;