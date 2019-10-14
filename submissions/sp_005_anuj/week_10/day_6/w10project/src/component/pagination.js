import Pagination from 'react-bootstrap/Pagination'
import React from 'react';
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const PaginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />
    
    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

render(PaginationBasic);

export default PaginationBasic;