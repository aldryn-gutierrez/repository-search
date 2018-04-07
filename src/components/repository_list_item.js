import React from 'react';

const RepositoryListItem = ({repository}) => {
  if (!repository) {
      return (
        <div>
          No Result
        </div>
      );
  }

  return (
    <li>
      <div className="col-md-12 repository-item">
        <div className="col-md-3">
          <img className="img-thumbnail" src={repository.owner.avatar_url} />
        </div>
        <div className="col-md-9">
            <div className="repository-name">{repository.name}</div>
            <div className="repository-description">{repository.description}</div>
            <div>
              <a href={repository.html_url} target="_blank">Go here!</a>
            </div>

        </div>
      </div>
    </li>
  );
}

export default RepositoryListItem;
