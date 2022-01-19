import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCityDetails} from '../models/model';
import {
	CITY_DESCRIPTION_1,
	CITY_DESCRIPTION_2,
	CITY_DESCRIPTION_3,
	CITY_DESCRIPTION_4,
	CITY_DESCRIPTION_5,
	CITY_DESCRIPTION_6,
	CITY_DESCRIPTION_7,
	CITY_DESCRIPTION_8,
	CITY_DESCRIPTION_9,
	WELCOME_CITY,
} from '../utilities/constants';

interface CityProps {}

const City: React.FC<CityProps> = (props) => {
	const {cityName}: any = useParams();
	const [details, setDetails] = useState<any>({});
	useEffect(() => {
		(async () => {
			const response = await getCityDetails(cityName);
			setDetails({...response});
		})();
	}, []);
	const backgroundUrl =
		'https://vanguardcleaningminn.com/wp-content/uploads/2019/11/minneapolis_bridge_skyline-scaled.jpeg';

	return (
		<>
			<div
				className="flex flex-col bg-contain bg-center bg-scroll opacity-85 h-screen justify-between"
				style={{backgroundImage: `url(${backgroundUrl})`}}
			>
				<div className="flex flex-col m-auto w-3/5 h-2/5 text-center justify-center space-y-5 py-14">
					<h2 className="text-amber-400 text-4xl font-black tracking-wide">
						{WELCOME_CITY + ' ' + details.name + '!'}
					</h2>
					<h4 className="text-amber-200 text-2xl italic font-bold tracking-wide">
						{details.country}
					</h4>
				</div>
				<div className="flex flex-col mt-10 w-4/5 h-3/5 self-center text-center">
					<div
						className="self-center text-left mt-12 w-2/5 ring-2 ring-amber-500 ring-offset-2 ring-offset-amber-100 rounded-lg px-10 py-8 shadow-2xl
            shadow-yellow-300/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300"
					>
						<h2 className="text-amber-400 mt-1 italic font-bold text-xl ">
							{CITY_DESCRIPTION_9}
						</h2>
						<ul className="list-disc mt-3 px-8 self-center">
							{details.landmarks &&
								details.landmarks.map((place: any) => (
									<li
										className="text-amber-200 text-base text-lg font-bold tracking-tight"
										key={place}
									>
										{place}
									</li>
								))}
						</ul>
					</div>
					<p className="text-amber-200 mt-10 italic font-bold text-xl">
						{details.name}
						{details.name !== details.name_native &&
							' ' +
								CITY_DESCRIPTION_1 +
								' ' +
								details.name_native +
								' ' +
								CITY_DESCRIPTION_2}
						{' ' +
							CITY_DESCRIPTION_3 +
							' ' +
							details.continent +
							' ' +
							CITY_DESCRIPTION_4 +
							' ' +
							details.founded}
						<br />
						{CITY_DESCRIPTION_5 +
							' ' +
							details.population +
							' ' +
							CITY_DESCRIPTION_6 +
							' ' +
							details.latitude +
							' ' +
							CITY_DESCRIPTION_7 +
							' ' +
							details.longitude +
							' ' +
							CITY_DESCRIPTION_8}
					</p>
				</div>
			</div>
		</>
	);
};

export default City;
