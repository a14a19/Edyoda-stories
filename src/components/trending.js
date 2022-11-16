import './trending.css';

const trendingImg = [
    'https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg',
    'https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg'
];

const tImg = trendingImg.map((image, i) => {
    return (
        <img src={image} alt='Trending' key={i} className='images' />
    )
});

function Trending() {
    return (
        <div className='trending m-margin'>
            <h2>
                Trending Posts
            </h2>
            <div className='container-T'>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg' alt='Trending' className='image-1' />
                <div className='sub-container-T'>
                    {tImg}
                </div>
            </div>
        </div>
    )
}

export default Trending;