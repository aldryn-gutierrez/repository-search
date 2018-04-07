import React from 'react';
import RepositoryListItem from './repository_list_item';

const RepositoryList = (props) => {
  const repositoryItems = props.repositories.map((repository) => {
    return (
      <RepositoryListItem
        key={repository.id}
        repository={repository} />
    )
  });

  return (
    <ul className="col-md-12 list-group">
      {repositoryItems}
    </ul>
  );
}

export default RepositoryList;
