import { Button } from '../../../../components/button/Button'

export const Col1 = () => {
    return (
        <>
            <div className='col-1'>
                <h1 className='col-1__title'>
                    <span className='shape__wrapper'>
                        <div className='orange__shape'></div>
                        <span>Discover</span>
                    </span>
                    <br />
                    <span>Most Suitable</span>
                    <br />
                    <span>Property</span>
                    <br />
                </h1>
                <p className='col-1__discription'>
                    <span>Find a variety of properties that suit you very</span>
                    <span>
                        easily,forget all difficulties in finding residence for
                        you
                    </span>
                </p>

                <div className='form__wrapper'>
                    <form className='col-1__search-box'>
                        <svg
                            className='map'
                            width={30}
                            height={30}
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='#3858d6'
                                d='M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z'
                            />
                        </svg>
                        <input
                            className='search'
                            type='search'
                            placeholder='Search by location...'
                        />
                        <Button
                            children='Search'
                            header='hero__button'
                        />
                    </form>
                </div>

                <div className='col-1__value-box'>
                    <div className='box'>
                        <h2 className='value__title'>
                            19K
                            <span>+</span>
                        </h2>
                        <p className='value__descrption'>
                            Premium
                            <br />
                            Product
                        </p>
                    </div>
                    <div className='box'>
                        <h2 className='value__title'>
                            12K
                            <span>+</span>
                        </h2>
                        <p className='value__descrption'>
                            Happy
                            <br />
                            Customer
                        </p>
                    </div>
                    <div className='box'>
                        <h2 className='value__title'>
                            28K
                            <span>+</span>
                        </h2>
                        <p className='value__descrption'>
                            Awards
                            <br />
                            Winning
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
