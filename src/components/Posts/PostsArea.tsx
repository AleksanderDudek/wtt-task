import { Book } from '../../models/Books';
import PostList from './PostList';

function PostsArea(currentPosts : Array<Book>) {

  return (
    <div style={{padding: 10}}>
        <PostList {...currentPosts} />
    </div>
  );
}

export default PostsArea;
