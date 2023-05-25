import { useQuery, useMutation, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      author
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String!, $author: String!) {
    addPost(title: $title, content: $content, author: $author) {
      id
      title
      author
    }
  }
`;

function BlogPage() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  let titleInput, contentInput, authorInput;

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({
      variables: {
        title: titleInput.value,
        content: contentInput.value,
        author: authorInput.value,
      },
    });
    titleInput.value = '';
    contentInput.value = '';
    authorInput.value = '';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={node => { titleInput = node; }} placeholder="Title" />
        <textarea ref={node => { contentInput = node; }} placeholder="Content" />
        <input ref={node => { authorInput = node; }} placeholder="Author" />
        <button type="submit">Add Post</button>
      </form>
      {data.posts.map(({ id, title, author }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>By {author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
