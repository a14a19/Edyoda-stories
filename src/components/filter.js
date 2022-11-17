import './filter.css';

const filterBtns = ['All', 'Artificial Intelligence', 'Cloud Computing','DevOps', 'Programming Languages', 'Mobile Application Development', 'Technology and Tools', 'Get a Job in a Tech Company', 'Others'];

const filterBtn = filterBtns.map((btn, i) => {
    return(
        <button key={i} className={i === 0 ? "active" : "filter-btn"}>
            {btn}
        </button>
    )
})

function Filter() {
    return (
        <div className='m-margin filter'>
            <h3>
                Latest Posts
            </h3>
            <div className='filter-txt'>
                <i className="fa-solid fa-filter"></i>
                Filter by Category
            </div>
            {filterBtn}
        </div>
    )
}

export default Filter;