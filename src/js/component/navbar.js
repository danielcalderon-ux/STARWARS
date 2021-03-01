import React, { useState, useEffect, setState, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/sw.jpg";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<i className="fab fa-jedi-order fa-3x" />
				<img src={rigoImage} height="80" />
			</Link>
			<div className="ml-auto,">
				<Dropdown isOpen={dropdownOpen} toggle={toggle} className="text-primary" color="primary">
					<DropdownToggle caret>Favoritos</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>PERSONAJES</DropdownItem>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "persona") {
								return (
									<div key={i}>
										<DropdownItem text className="text-primary">
											{favorite.name}
										</DropdownItem>
									</div>
								);
							}
						})}

						<DropdownItem divider />
						<DropdownItem header>PLANETAS</DropdownItem>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "planeta") {
								return (
									<div key={i}>
										<DropdownItem text className="text-primary">
											{favorite.name}
										</DropdownItem>
									</div>
								);
							}
						})}
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
