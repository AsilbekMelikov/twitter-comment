import './PostListItem.css'

const PostListItem = (props) => {

        const {label, onDelete, important, like, onToggleImportant, onToggleLiked} = props


        let classNames = 'app-list-item d-flex justify-content-between'
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span className='app-list-item-label' onClick={onToggleLiked}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm d-flex justify-content-center align-items-center' onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button' onClick={onDelete}
                            className='btn-trash d-flex justify-content-center align-items-center'>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button type='button' className='btn-sm btn-heart d-flex justify-content-center align-items-center'
                            onClick={onToggleLiked}>
                        <i className='fa fa-heart'></i>
                    </button>
                    <i className='fa fa-heart heart-second' onClick={onToggleLiked}></i>
                </div>
            </div>
        )
}
export default PostListItem