import React from 'react';
import ReactDOM from 'react-dom';

const Layout = () => {
	return (
		<div className="home">
			<div className="Aligner">
				<div className="Aligner-item">
					<img src="/img/logo.png" alt="codingphase logo" />
					<h1>Turned Out-1</h1>
					<div className="menu">
						<ul>
							<li>
								<a href="http://starterkit.codingphase.com" target="new">
									Documentation
								</a>
							</li>
							<li>
								<a href="http://www.codingphase.com" target="new">
									CodingPhase.com
								</a>
							</li>
						</ul>
					</div>
					<div className="version-num">version 4.0.1</div>
				</div>
			</div>
		</div>
	);
};

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
