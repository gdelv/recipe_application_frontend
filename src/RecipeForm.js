import React from 'react'
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";

const RecipeForm = (props) => {
    const { onChange, onSubmit } = props
    const { name, author, img, description, prep_time, serving_size, calories_count, star_rating, directions, ingredients  } = props.formData

    return (
        <form className='form' onSubmit={(e) => onSubmit(e)}>
            <Input
                name='name'
                value={name}
                required={true}
                placeholder='Recipe Name'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='author'
                value={author}
                required={true}
                placeholder='Recipe Author'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='img'
                value={img}
                required={true}
                placeholder='Recipe Image'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='description'
                value={description}
                required={true}
                placeholder='Recipe Description'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='prep_time'
                value={prep_time}
                required={true}
                placeholder='Preparation Time'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='serving_size'
                value={serving_size}
                required={true}
                placeholder='Serving Size'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='calories_count'
                value={calories_count}
                required={true}
                placeholder='Total Calories'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='star_rating'
                value={star_rating}
                required={true}
                placeholder='Rating (1-5)'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='directions'
                value={directions}
                required={true}
                placeholder='Recipe Directions'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='ingredients'
                value={ingredients}
                required={true}
                placeholder='Recipe Ingredients'
                onChange={(e) => onChange(e)}
            />

            {/* {directions.map((direction, idx) => (
                <div>
                    <input
                        type='text'
                        placeholder={`Step #${idx + 1} name`}
                        value={direction.step}
                        onChange={onDirectionsStepChange(idx)}
                    />
                    <button
                        type='button'
                        onClick={onRemoveDirection(idx)}
                    >
                        Delete Step
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={onAddDirection}
            >
                Add Step
            </button> */}

            <Button title='Submit Recipe' className='submit'/>
        </form>
    )
}

export default RecipeForm