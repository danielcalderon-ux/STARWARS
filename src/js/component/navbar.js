import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/sw.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<i className="fab fa-jedi-order fa-3x" />
				<img src={rigoImage} height="80" />
			</Link>
			<div className="ml-auto">
				<div className="btn-group" role="group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<li>
							<a className="dropdown-item" href="#">
								Dropdown link
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Dropdown link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
