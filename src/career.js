export function Career() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Current Employment</div>
            <div className="panel-block">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Company</th>
                    <td>GovCIO</td>
                  </tr>
                  <tr>
                    <th>Title</th>
                    <td>Vice President, Solution Architecture</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>Northern Virginia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Recent Highlights</div>
            <div className="panel-block">
              <p>
                Over the past year, I have been the principal SA on bids
                totaling $1.6B TCV of single-award, prime contracts with U.S.
                Federal Departments and Agencies.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Important Links</div>
            <div className="panel-block">
              <div className="content">
                <p style={{ textAlign: 'center' }}>
                  <a href="https://registry.jsonresume.org/fhellwig">
                    My Resume
                  </a>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <a href="./pubs">My Publications</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Education</div>
            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <th>School</th>
                    <th>Degree</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Johns Hopkins University</td>
                    <td>Master of Science in Computer Science</td>
                  </tr>
                  <tr>
                    <td>Northeastern University</td>
                    <td>Bachelor of Science in Electrical Engineering</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Career Summary</div>
            <div className="panel-block">
              <div className="content">
                <ul>
                  <li>
                    Over ten years deep technical proposal experience with
                    measurable wins of large (&gt; $500M) contracts.
                  </li>
                  <li>
                    Started and grew a technical consulting company supporting
                    CBP, IRS, and Northrop Grumman
                  </li>
                  <li>
                    Architect for the U-2R reconnaissance mission planning
                    system
                  </li>
                  <li>
                    Supported the U.S. Intelligence Community for almost 20
                    years
                  </li>
                  <li>
                    U.S. Army Captain supporting the Strategic Defense
                    Initiative
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Personal Information</div>
            <div className="panel-block">
              <div className="content">
                <p>
                  I am a commercial, instrument-rated pilot with over 1,500
                  hours. I own a Cirrus SR20 that I keep at KHEF. In my spare
                  time, I enjoy flying with my wonderful wife, riding my
                  motorcycle, collecting watches, and building various
                  AR-platform rifles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
