class Node {
  constructor(post) {
    this.data = post;  // Store full post object
    this.next = null;
  }
}

function createLinkedList(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return null;
  }

  let head = null;
  let current = null;

  posts.forEach((post) => {
    if (
      typeof post.text !== 'string' || post.text.trim() === '' ||
      typeof post.timestamp !== 'string' || post.timestamp.trim() === '' ||
      typeof post.author !== 'string' || post.author.trim() === ''
    ) {
      throw new Error('Invalid post structure. Each post must have non-empty text, timestamp, and author.');
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
  if (!feed || !keyword) return [];

  const results = [];
  const normalizedKeyword = keyword.toLowerCase();
  let current = feed;

  while (current) {
    const words = current.data.text.toLowerCase().split(/\s+/);
    if (words.some(word => word.includes(normalizedKeyword))) {
      results.push(current.data);
    }
    current = current.next;
  }

  return results;
}

export default { createLinkedList, searchSocialMediaFeed };
