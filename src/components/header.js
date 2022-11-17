import './header.css';

function Header() {
    const url = '/'
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='sub-h-lt-1'>
                    <a href={url}>
                        <h1>
                            Edyoda
                        </h1>
                    </a>
                    <em>
                        Stories
                    </em>
                </div>
                <div className='sub-h-lt-2'>
                    Explore Categories <i className="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div className='header-right'>
                <div>
                    EdYoda is free learning and knowledge
                    sharing platform for techies
                </div>
                <button className='go-to-btn'>Go to Main Website</button>
            </div>
        </div>
    )
}

export default Header;