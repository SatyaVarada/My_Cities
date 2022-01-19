import React, {useEffect, useState} from 'react';
import {
	SEARCHPLACEHOLDER,
	WELCOME,
	WELCOME_MESSAGE,
} from '../utilities/constants';
import {Link} from 'react-router-dom';
import {getMatchingResults} from '../models/model';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
	const [cities, setData] = useState<Array<any>>([]);
	useEffect(() => {
		(async () => {
			const response = await getMatchingResults('');
			setData([...response]);
		})();
	}, []);

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchResponse = await getMatchingResults(e.target.value);
		setData([...searchResponse]);
	};
	const backgroundUrl =
		'https://vanguardcleaningminn.com/wp-content/uploads/2019/11/minneapolis_bridge_skyline-scaled.jpeg';
	return (
		<>
			<div
				className="flex flex-col bg-contain bg-center bg-scroll opacity-85 h-screen justify-between"
				style={{backgroundImage: `url(${backgroundUrl})`}}
			>
				<div className="flex flex-col m-auto w-3/5 h-1/4 text-center space-y-5 py-14">
					<h2 className="text-amber-400 text-4xl font-black tracking-wide">
						{WELCOME}
					</h2>
					<p className="text-amber-200 mt-2 italic font-bold text-2xl">
						{WELCOME_MESSAGE}
					</p>
				</div>
				<div className="flex flex-col h-1/4 m-auto w-3/5">
					<input
						className="self-center mt-5 py-2 px-4 border-2 border-blue-400 ring-2 rounded-md caret-blue-800 placeholder-sky-300 italic w-2/5 text-sky-600 text-xl shadow-md focus:outline-none "
						id="search"
						type="search"
						placeholder={SEARCHPLACEHOLDER}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleSearch(e)
						}
					></input>
				</div>
				<div className="grid grid-cols-4 gap-12 h-1/2 overflow-auto mt-10 p-8 no-scrollbar">
					{cities.map((city) => (
						<Link key={city.name} to={'/city/' + city.name}>
							<div
								className="text-center ring-2 ring-amber-500 ring-offset-2 ring-offset-amber-100 rounded-lg px-6 py-8 shadow-2xl shadow-yellow-300/50
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300"
							>
								<h2 className="text-amber-400 text-xl font-bold tracking-tight">
									{city.name}
								</h2>
								<p className=" text-amber-200 mt-2 font-bold text-base">
									{city.country}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
