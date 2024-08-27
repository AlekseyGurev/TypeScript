const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = async (url: string): Promise<Post[]> => {
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    throw new Error('Error');
  }

  const data: Post[] = await response.json();
  return data;
};

getData(COMMENTS_URL)
  .then((data) => {
    data.forEach((post) => {
      console.log(`ID:${post.id}, Email:${post.email}`);
    });
  })
  .catch((error: string) => {
    console.log('Error', error);
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
