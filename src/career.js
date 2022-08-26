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
            <div className="panel-heading">Resume</div>
            <div className="panel-block">
              <div className="content">
                <ul>
                  <li>
                    <a href="https://registry.jsonresume.org/fhellwig?theme=autumn">
                      My Resume (Autumn theme)
                    </a>
                  </li>
                  <li>
                    <a href="https://registry.jsonresume.org/fhellwig?theme=elegant">
                      My Resume (Elegant theme)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Publications</div>
            <div className="panel-block">
              <div className="content">
                <ul>
                  <li>
                    <a href="https://drive.google.com/file/d/1-0P8yxdEZ59GP4oN0rHqVcMRyC4Zu9AO/view?usp=sharing">
                      A Secure SDS Software Library
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/10Kf3mVxanL2vpV5Lc2xA5k5m8sj9sa9n/view?usp=sharing">
                      Implementing Associations
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1-1RpO99Q0j8tGeovKxGUO70f9CFxjbHv/view?usp=sharing">
                      Five Reasons to Move Your Line-of-Business Applications to
                      the Cloud
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/10N259NsE1ZRjwOGnbsjVb2MIOIvM0oyf/view?usp=sharing">
                      Security Considerations for DoD Cloud Migrations
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1-16M6bl8K77gNBvRfylZdgA9bPa4EgAS/view?usp=sharing">
                      Cloud Migrations &mdash; Lessons Learned
                    </a>
                  </li>
                </ul>
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
        <div className="column">
          <div className="panel">
            <div className="panel-heading">Fun Facts</div>
            <div className="panel-block">
              <div className="content">
                <p>
                  This website is written using the{' '}
                  <a href="https://reactjs.org/">React</a> JavaScript framework
                  and the <a href="https://bulma.io">Bulma</a> CSS framework. It
                  is hosted on a{' '}
                  <a href="https://www.linode.com">Linux server</a> running{' '}
                  <a href="https://www.nginx.com">NGINX</a>. The source code is
                  available on my{' '}
                  <a href="https://github.com/fhellwig/www.hellwig.org">
                    GitHub site
                  </a>
                  . My resume is written using the{' '}
                  <a href="https://jsonresume.org">JSON Resume</a> format, which
                  allows me to have two completely different themes from one{' '}
                  <a href="https://www.hellwig.org/static/frank-hellwig.resume.json">
                    {' '}
                    source file
                  </a>
                  . The publications are hosted on Google Drive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
