import React from "react";
import { Counter } from "./counter";

const Home = ({ timer }) => {
	return (
		<div className="contenedor">
			<div>
				<Counter timer={timer} />
			</div>
		</div>
	);
};
export default Home;
