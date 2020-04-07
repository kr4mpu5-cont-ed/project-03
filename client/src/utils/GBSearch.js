import axios from 'axios';

const gbSearchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
  findBooks: function(book) {
      console.log('this is the "bookId": ' + book);
      console.log(gbSearchUrl + book);
      // return axios.get(gbSearchUrl + id.q);
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&maxResults=10');
  }
};
