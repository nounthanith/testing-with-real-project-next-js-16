import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";

const Page = () => {
	return (
		<section>
			<h1 className='text-center font-bold text-4xl'>
				The Hub For Every Dev <br/> Event you Can&#39;t Miss
			</h1>
			<p className='text-center mt-5'>
				Hackathons, Meetups, and Conferences, All in One Place
			</p>
			<ExploreBtn/>

			<div>
				<h3>Feature Events</h3>
				<ul>
					{[1, 2, 3, 4, 5].map((even) => (
						<li key={even}>Even {even}</li>
					))}
				</ul>
			</div>
		</section>
	)
}
export default Page
