class Node {
  constructor(post) {
    this.text = post.text;
    this.timestamp = post.timestamp;
    this.author = post.author;
    this.next = null;
  }
}

function createLinkedList(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error('Invalid input: posts should be a non-empty array.');
  }

  let head = null;
  let current = null;

  posts.forEach((post) => {
    if (!post.text || !post.timestamp || !post.author ||
        typeof post.text !== 'string' ||
        typeof post.timestamp !== 'string' ||
        typeof post.author !== 'string') {
      throw new Error('Invalid post structure. Each post must have text, timestamp, and author as strings.');
    }

    const newNode = new Node(post);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = newNode;
    }
  });

  return head;
}

function searchSocialMediaFeed(feed, keyword) {
  if (!feed) {
    return [];
  }

  const results = [];
  const normalizedKeyword = keyword.toLowerCase();
  let current = feed;

  while (current) {
    const normalizedText = current.text.toLowerCase();
    if (normalizedText.includes(normalizedKeyword)) {
      results.push({
        text: current.text,
        timestamp: current.timestamp,
        author: current.author,
      });
    }
    current = current.next;
  }

  return results;
}

// Example usage:
const feed = createLinkedList([
  { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
  { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
  { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
]);

const searchTerm = 'great';
const results = searchSocialMediaFeed(feed, searchTerm);
console.log(results);
