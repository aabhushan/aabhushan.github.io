import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <div>
    		<h1>Aabhushan Mainali :: Software Engineer
    			<script src="https://platform.linkedin.com/in.js" type="text/javascript"></script>
  				<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/aabhushan" data-format="hover" data-related="false"></script>
    		</h1>
    		<p>Coming soon..</p>
			</div>
  }
}

render(<App/>, document.getElementById('app'));