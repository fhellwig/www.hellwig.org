import { useLocation } from 'react-router-dom';
import { Markdown } from './markdown.js';

export function Publications() {
  let location = useLocation();
  return (
    <div className="container">
      <div className="panel">
        <div className="panel-heading">
          <div className="content">
            <a href="/">Back to Main Page</a>
            {location.search && (
              <>
                <span>&nbsp;|&nbsp;</span>
                <a href="./pubs">Back to Publications</a>
              </>
            )}
          </div>
        </div>
        <div className="panel-block">
          <div className="content">
            <Markdown />
          </div>
        </div>
      </div>
    </div>
  );
}
