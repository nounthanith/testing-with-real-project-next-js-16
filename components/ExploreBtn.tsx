'use client';

import Image from "next/image";

const ExploreBtn = () => {
	return (
		<button className="mt-7 mx-auto" type="button" id="explore-btn" onClick={() => {
			console.log("Click");
		}}><a href="#events">
			Explore Event
			<Image src="/icons/arrow-down.svg" alt="arrow-down" width={20} height={20}/>
		</a></button>
	)
}
export default ExploreBtn
