import { useQuery, useMutation, gql } from '@apollo/client';

const GET_POST_AND_COMMENTS = gql`
  query GetPostAndComments($id: ID!) {
    post(id: $id) {
      id
      title
      content
      author
    }
    comments(postId: $id) {
      id
      content
      author
    }
  }
`;

const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $content: String!, $author: String!) {
    addComment(postId: $postId, content: $content, author: $author) {
      id
      content
      author
    }
  }
`;

function BlogPostPage({ match }) {
  const postId = match.params.id;
  const { loading, error, data } = useQuery(GET_POST_AND_COMMENTS, { variables: { id: postId } });
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_POST_AND_COMMENTS, variables: { id: postId } }],
  });

  let contentInput, authorInput;

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment({
      variables: {
        postId,
        content: contentInput.value,
        author: authorInput.value,
      },
    });
    contentInput.value = '';
    authorInput.value = '';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.post.title}</h1>
      <p>By {data.post.author}</p>
      <div>{data.post.content}</div>
      <h2>Comments</h2>
      {data.comments.map(({ id, content, author }) => (
        <div key={id}>
          <p>{content}</p>
          <p>By {author}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <textarea ref={node => { contentInput = node; }} placeholder="Comment" />
        <input ref={node => { authorInput = node; }} placeholder="Author" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default BlogPostPage;
