import React from 'react'
// import { Input } from '../shared/Input'

const landingImage = require('../images/chopping.jpg')

const Landing = (props) => {
    // const { history } = props
    return (
        <div>
            <img src={landingImage} className='landing-image' alt='landing'/>
            {/* <form>
            <Input
                className='search-bar'
                placeholder='find recipe'
            />
            <input type="submit" value="submit"/>
            </form> */}
        
        </div>
    )
}

export default Landing