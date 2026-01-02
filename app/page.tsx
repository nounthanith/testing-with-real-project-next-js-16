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

			<div className="mt-20 space-y-7">
				<h3>Featured Events</h3>

				<ul className="events">
					{[1, 2, 3, 4, 5].map((event) => (
						<li key={event} className="">
							Even #${event}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
export default Page
