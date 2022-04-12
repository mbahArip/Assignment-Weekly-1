// eslint-disable-next-line no-unused-vars
import * as mdb from 'mdb-ui-kit';

export const Tabs = ({ data }) => {
	return (
		<>
			<ul class='nav nav-tabs mb-3' id='ex1' role='tablist'>
				{data?.map((item, index) => (
					<li class='nav-item' role='presentation' key={index}>
						<a
							class={`nav-link ${index === 0 ? 'active' : ''}`}
							id={`ex1-tab-${index}`}
							data-mdb-toggle='tab'
							href={`#ex1-tabs-${index}`}
							role='tab'
							aria-controls={`ex1-tabs-${index}`}
							aria-selected={index === 0 ? 'true' : 'false'}
						>
							{item.title}
						</a>
					</li>
				))}
			</ul>

			<div class='tab-content' id='ex1-content'>
				{data?.map((item, index) => (
					<div
						class={`tab-pane fade show ${index === 0 ? 'active' : ''}`}
						id={`ex1-tabs-${index}`}
						role='tabpanel'
						aria-labelledby={`ex1-tab-${index}`}
					>
						<div className='container-lg mb-4'>
							<h2>{item.title} </h2>
							<span class={`badge rounded-pill  ${item.status === 'Completed' ? 'badge-success' : 'badge-danger'}`}>{item.status}</span>
						</div>
						<p>{item.description}</p>

						<div>
							<h4>Berikut merupakan hasil task saya:</h4>
							<a href={item.url.link} target='_blank' rel='noopener noreferrer'>
								{item.url.name}
							</a>
							<div className='container-md text-center'>
								{item.images.map((image, index) => (
									<img className='img-fluid m-2 shadow-4 rounded-3' src={image} alt={item.title} key={index} />
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
